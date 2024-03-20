import { Worker, workerData, parentPort } from 'worker_threads';
import { Token, CommonToken, ParseTreeVisitor, CharStream, CommonTokenStream, ParseTreeWalker, FileStream, ParseTree, TerminalNode, ErrorNode, ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import LSLLexer from '../antlr4/LSLLexer';
import LSLParser, { Compound_statementContext, DeclarationContext, Default_stateContext, EventContext, Function_parameterContext, Function_parametersContext, Global_functionContext, Global_variableContext, IdentifierContext, Jump_labelContext, LlstateContext, LlstatesContext, Lscript_programContext, StatementContext } from '../antlr4/LSLParser';
import LSLVisitor, { } from '../antlr4/LSLParserVisitor';


export class Position {
	row: number;
	col: number;
	constructor(row: number, col: number) {
		this.row = row;
		this.col = col;
	}
}
export class Range {
	start: Position;
	end: Position;
	constructor(start: Position, end: Position) {
		this.start = start;
		this.end = end;
	}
}



export class SymbolsNode {
	name: string;
	type: string;
	nodeType: string;
	cancelToken: boolean;
	// startLine: number;
	// startColumn: number;
	// endLine: number;
	// endColumn: number;
	range: Range;
	signature: string;
	childrens: Array<SymbolsNode>;

	constructor(name: string, nodeType: string, type: string, startLine: number, startColumn: number, endLine: number, endColumn: number) {
		this.name = name;
		// this.startLine = startLine;
		// this.startColumn = startColumn;
		// this.endColumn = endColumn;
		// this.endLine = endLine;
		this.range = new Range(new Position(startLine, startColumn), new Position(endLine, endColumn));
		this.type = type;
		this.nodeType = nodeType;
		this.signature = "";
		this.childrens = new Array<SymbolsNode>;
	}

	addChildrens(childrens: Array<SymbolsNode>) {
		if (childrens)
			childrens.forEach(e => {
				if (e)
					this.childrens.push(e);
			});
	}

	stripUndefined() {
		if (Array.isArray(this.childrens)) {
			this.childrens = this.childrens.filter(e => e !== undefined);
			this.childrens.forEach(e => {
				if (e && e.stripUndefined)
					e.stripUndefined();
			});
		}
	}
}

interface IntervalTreeItem {
	start: number,
	stop: number,
	sym: SymbolsNode
}

class IntervalTree {
	tree: Array<IntervalTreeItem>;
	constructor() {
		this.tree = new Array<IntervalTreeItem>;
	}
	clear() {
		this.tree = [];
	}
	insert(start: number, stop: number, sym: SymbolsNode) {
		this.tree.push({ start: start, stop: stop, sym: sym });
	}
	search(start: number, stop: number): Array<SymbolsNode> {
		const t = this.tree.filter(e => e.start <= start && e.stop >= stop);
		const out = new Array<SymbolsNode>;
		for (const e of t) {
			out.push(e.sym);
		}
		return out;
	}
	dump(): string {
		let out: string;
		this.tree.forEach(e => {
			out += "[" + e.start + ", " + e.stop + "]" + " " + e.sym.name + "\n";
		});
		return out;
	}
}

export class ExtractVariablesAndFunctionsVisitor extends LSLVisitor<SymbolsNode> {
	cancelToken: object;
	cancelPromise;
	parsingTimer: ReturnType<typeof setTimeout>;

	level: number;

	Symbols: Array<SymbolsNode>;
	localSymbols: Array<Array<SymbolsNode>>;

	lslerror: lslerror;
	uri: string;

	isUptodate: boolean;
	documentSymboles: SymbolsNode;
	lexerRulesNames;

	worker: Worker;
	workerPromises: Array<any>;

	chars;
	lexer;
	tokens;
	parser: LSLParser;
	tree;

	SymbolsTree: IntervalTree;

	constructor() {
		super();
		this.cancelToken = {};
		this.Symbols = new Array<SymbolsNode>;
		this.localSymbols = new Array<Array<SymbolsNode>>;

		this.SymbolsTree = new IntervalTree();

		this.lslerror = new lslerror;
		this.isUptodate = false;
		this.tokens = [];

		this.worker = null;
		this.workerPromises = [];
	}

	async cancel() {
		// const t = new Promise<boolean>((resolve, reject) => {
		// 	this.cancelPromise = resolve;
		// 	resolve(true);
		// });
		// this.cancelToken["isCancellationRequested"] = true;
		// this.parser.state = 0;
		// this.parser.reset();
		if (this.worker) {
			console.log("terminate worker from cancelToken");
			await this.worker.terminate();
			this.worker = null;
		}
		// return t;
	}

	async llparse(code: string) {
		console.log("llparse");
		const self = this.worker;

		if (this.worker != null) {
			await this.worker.terminate();
			this.worker = null;
		}

		return new Promise((resolve, reject) => {
			this.workerPromises.push({ resolve: resolve, reject: reject });

			if (this.worker == null) {
				// prod
				// this.worker = new Worker(__dirname + "/../mcpp.js", { workerData: code , }); //
				this.worker = new Worker(__dirname + "/../out/lsl-diag.js", { workerData: code }); //
				// dev
				// this.worker = new Worker(__dirname + "/../lsl-diag.js", { workerData: code });
				this.worker.addListener('message', (message) => {
					this.tree = message;
					this.SymbolsTree.tree = message["SymbolsTree"]["tree"];
					this.documentSymboles = message["docsym"];
					this.Symbols = message["symboles"];
					this.tokens = message["tokens"];
					this.lexerRulesNames = message["lexerRulesNames"];
					this.isUptodate = true;
					console.log(self);
					this.worker = null;
					while (this.workerPromises.length) {
						this.workerPromises.pop().resolve(this);
					}
				});
				this.worker.on('error', (err) => {
					console.error(err);
					this.worker = null;
					this.workerPromises.forEach(e => {
						e.reject(this);
					});
				});
				this.worker.on('exit', () => {
					this.worker = null;
					// this.workerPromises.forEach(e => {
					// 	e.resolve(this);
					// });
				});
			}
		});
	}
	visitIdentifier = (ctx: IdentifierContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		const name = ctx.Identifier().getText();
		const sym = new SymbolsNode(name, "identifier", "", ctx.start.line - 1, ctx.start.column,
			ctx.start.line - 1, ctx.start.column + name.length);
		sym.signature = " " + name;
		this.Symbols.push(sym);

		return sym;
	};
	visitFunction_parameters = (ctx: Function_parametersContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		this.level++;

		const sym = new SymbolsNode("", "function_parameters", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);

		for (const e of ctx.function_parameter_list()) {
			const t = this.visit(e);
			sym.addChildrens([t]);
		}
		// for (const e of t) {
		// }

		this.level--;

		return sym;
	};

	visitFunction_parameter = (ctx: Function_parameterContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		// const name = this.visit(ctx.name_type().identifier()) as vscode.DocumentSymbol;
		const name = ctx.identifier().getText();
		const type = ctx.typename().getText();

		const sym = new SymbolsNode(name, "function_parameter", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name;
		this.Symbols.push(sym);
		this.SymbolsTree.insert(ctx.parentCtx.parentCtx.start.tokenIndex, ctx.parentCtx.parentCtx.stop.tokenIndex, sym);

		return sym;
	};

	visitGlobal_function = (ctx: Global_functionContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		let paramList;
		let type = "";
		const name = ctx.identifier().getText();
		if (ctx.typename()) {
			type = ctx.typename().getText();
		}

		const sym = new SymbolsNode(name, "global_function", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		this.Symbols.push(sym);

		this.SymbolsTree.insert(ctx.parentCtx.start.tokenIndex, ctx.parentCtx.stop.tokenIndex, sym);

		sym.signature = type + " " + name + "(";
		if (ctx.function_parameters()) {
			paramList = <any>this.visitChildren(ctx.function_parameters());
			if (paramList)
				sym.addChildrens(paramList);

			for (const e of paramList) {
				if (e)
					sym.signature += e.signature + ", ";
			}
			sym.signature = sym.signature.slice(0, sym.signature.lastIndexOf(", "));
		}
		sym.signature += ")";

		if (ctx.compound_statement()) {
			paramList = this.visit(ctx.compound_statement());
			sym.addChildrens([paramList]);
		}

		return sym;
	};
	visitCompound_statement = (ctx: Compound_statementContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");

		const sym = new SymbolsNode("", "compound_statement", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);

		if (ctx.statement_list())
			for (const t of ctx.statement_list())
				sym.addChildrens([this.visit(t)]);
		return sym;
	};

	visitStatement = (ctx: StatementContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		const sym = new SymbolsNode("", "statement", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);

		if (ctx.declaration()) {
			const t = <any>this.visit(ctx.declaration());
			sym.addChildrens([t]);
		}
		else if (ctx.compound_statement()) {
			const t = this.visit(ctx.compound_statement());
			sym.addChildrens([t]);
		}
		else if (ctx.statement_list()) {
			for (const statement of ctx.statement_list()) {
				const t = this.visit(statement);
				sym.addChildrens([t]);
			}
		}

		// const childs = <any>this.visitChildren(ctx);
		// if(childs)
		// 	sym.addChildrens(childs);
		return sym;
	};

	visitGlobal_variable = (ctx: Global_variableContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		const name = ctx.identifier().getText();
		const type = ctx.typename().getText();

		const sym = new SymbolsNode(name, "variable_declaration", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name;
		this.Symbols.push(sym);
		this.SymbolsTree.insert(ctx.start.tokenIndex, ctx.parser.getTokenStream().size - 1, sym);
		return sym;
	};

	visitLscript_program = (ctx: Lscript_programContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		this.Symbols = [];
		this.localSymbols = [];
		this.localSymbols.push([]);
		let stopLine = ctx.EOF().symbol.line, stopColumn = ctx.EOF().symbol.column;
		if (ctx.stop) {
			stopLine = ctx.stop.line;
			stopColumn = ctx.stop.column;
		}

		const sym = new SymbolsNode("lscript_program", "", "", ctx.start.line - 1, ctx.start.column,
			stopLine - 1, stopColumn);

		const childs = <any>this.visitChildren(ctx);
		if (childs)
			sym.addChildrens(childs);

		// if (t)
		// 	t.forEach(e => {
		// 		if (e)
		// 			t2.push(...e);
		// 	});

		// sym = stripUndefined(sym);
		sym.stripUndefined();
		this.documentSymboles = sym;
		return sym;
	};

	visitDefault_state = (ctx: Default_stateContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");

		const name = 'default';

		const sym = new SymbolsNode(name, "default_state", "state", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);

		if (ctx.state_body()) {
			const t = <any>this.visitChildren(ctx.state_body());
			sym.addChildrens(t);
		}

		return sym;
	};

	visitLlstates = (ctx: LlstatesContext) => {
		const name = 'llstates';

		const sym = new SymbolsNode(name, "llstates", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);

		const t = <any>this.visitChildren(ctx);
		sym.addChildrens(t);

		return sym;
	};
	visitLlstate = (ctx: LlstateContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		// const t = [];

		const name = ctx.Identifier().getText();


		const sym = new SymbolsNode(name, "state", "state", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);

		if (ctx.state_body()) {
			const t = <any>this.visitChildren(ctx.state_body());
			sym.addChildrens(t);
		}

		sym.signature = "state " + name;
		this.Symbols.push(sym);
		this.SymbolsTree.insert(ctx.parentCtx.start.tokenIndex, ctx.parentCtx.stop.tokenIndex, sym);
		return sym;
	};

	visitDeclaration = (ctx: DeclarationContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		const name = ctx.Identifier().getText();
		const type = ctx.typename().getText();

		// outputChannel.appendLine("variable_declaration " + name);

		const sym = new SymbolsNode(name, "variable_declaration", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name;

		this.SymbolsTree.insert(ctx.start.tokenIndex, ctx.parentCtx.parentCtx.stop.tokenIndex, sym);
		return sym;
	};

	visitJump_label = (ctx: Jump_labelContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		const name = ctx.identifier().getText();
		// const type = ctx.typename().getText();

		// outputChannel.appendLine("label_declaration " + name);

		const sym = new SymbolsNode(name, "label_declaration", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = name;

		this.Symbols.push(sym);
		this.SymbolsTree.insert(ctx.start.tokenIndex, ctx.parentCtx.parentCtx.stop.tokenIndex, sym);
		return undefined;
	};


	visitEvent = (ctx: EventContext) => {
		// if (this.cancelToken["isCancellationRequested"])
		// throw ("cancel");
		const name = ctx.Identifier().getText();
		// let param = [];
		// const childs = <any>this.visitChildren(ctx.compound_statement());

		const sym = new SymbolsNode(name, "event", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);

		if (ctx.function_parameters()) {
			const param = <any>this.visitChildren(ctx.function_parameters());
			if (param)
				sym.addChildrens(param);
		}

		if (ctx.compound_statement()) {
			const param = this.visit(ctx.compound_statement());
			if (param)
				sym.addChildrens([param]);
		}
		return sym;
	};


	///////////////////////////////////////////////////////////////////////


	public async getDocumentSymboles(code: string, position?: Position) {
		if (!this.isUptodate)
			await this.llparse(code);

		return this.documentSymboles;
	}


	public async getLocalSymboles(code: string, position?: Position): Promise<Array<SymbolsNode>> {
		if (!this.isUptodate)
			await this.llparse(code);

		let symboles;

		// if (position)
		// this.breakPosition = new Position(position.row + 1, position.col);
		// else
		// this.breakPosition = new Position(99999999999999, 0);

		try {
			// this.SymbolsTree.clear();
			// symboles = this.visit(this.tree);
		}
		catch (error) {
			symboles = this.localSymbols;
		}
		symboles = this.localSymbols;
		const out = new Array<SymbolsNode>;
		for (const i of symboles) {
			if (i)
				i.forEach(j => {
					out.push(j);
				});
		}
		return out;
	}

	public async getLocalSymbolesNode(code: string): Promise<Array<SymbolsNode>> {
		if (!this.isUptodate)
			await this.llparse(code);

		// this.SymbolsTree.clear();
		// this.visit(this.tree);
		const symboles = this.Symbols;

		// const out = new Array<SymbolsNode>;
		// symboles.forEach(i => {
		// 	if (i)
		// 		i.forEach(j => {
		// 			out.push(j);
		// 		});
		// });
		symboles.forEach(e => {
			if (e)
				e.stripUndefined();
		});
		return symboles;
	}

	// return tokens that overlap the token range
	getL(start: number, stop: number) {
		return this.SymbolsTree.search(start, stop);
	}

	// return the tokens that overlap the document range
	getR(position: Position) {
		if (!this.tokens)
			return [];
		const idx = this.tokens.find(e =>
			e.line > position.row
			|| (
				e.line == position.row + 1
				&& e.column <= position.col
				&& e.column + e.text.length >= position.col)
		);

		if (idx) {
			const lo = this.getL(idx.tokenIndex, idx.tokenIndex);
			return lo;
		}
		return [];
	}

	flattenLocalSymbos(symboles: SymbolsNode[][]) {
		const out = new Array<SymbolsNode>;

		for (const i of symboles) {
			if (i)
				i.forEach(j => {
					out.push(j);
				});
		}

	}
}


interface error {
	recognizer: Recognizer<Token>,
	offendingSymbol: Token,
	line: number,
	column: number,
	msg: string,
	e: RecognitionException
}
export class lslerror extends ErrorListener<Token>
{
	errorList: Array<error>;
	uri: string;
	constructor() {
		super();
		this.errorList = [];
		this.uri = "";
	}
	syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException): void {
		this.errorList.push({
			recognizer: recognizer,
			offendingSymbol: offendingSymbol,
			line: line,
			column: column,
			msg: msg,
			e: e
		});

		// outputChannel.appendLine(`${this.uri}(${line}:${column}) ${msg}`);
		// outputChannel.show(true);

		// console.log(msg);
	}

}