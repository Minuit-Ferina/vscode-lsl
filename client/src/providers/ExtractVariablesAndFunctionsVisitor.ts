import { Token, CommonToken, ParseTreeVisitor, CharStream, CommonTokenStream, ParseTreeWalker, FileStream, ParseTree, TerminalNode, ErrorNode, ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import LSLLexer from '../antlr4/LSLLexer';
import LSLParser, { Compound_statementContext, DeclarationContext, Default_stateContext, EventContext, Function_parameterContext, Function_parametersContext, GlobalContext, Global_functionContext, Global_variableContext, IdentifierContext, LlstateContext, LlstatesContext, Lscript_programContext, StatementContext, StatementsContext } from '../antlr4/LSLParser';
import LSLVisitor, { } from '../antlr4/LSLParserVisitor';

import { Position, Range } from './common';

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
}

export class ExtractVariablesAndFunctionsVisitor extends LSLVisitor<SymbolsNode> {
	cancelToken: object;
	cancelPromise;
	parsingTimer: ReturnType<typeof setTimeout>;

	level: number;

	Symbols: Array<SymbolsNode>;
	localSymbols: Array<Array<SymbolsNode>>;
	breakPosition: Position;

	lslerror: lslerror;

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
		this.breakPosition = new Position(99999999999999, 0);

		this.SymbolsTree = new IntervalTree();

		this.lslerror = new lslerror;
	}

	cancel(): Promise<boolean> {
		const t = new Promise<boolean>((resolve, reject) => {
			this.cancelPromise = resolve;
			resolve(true);
		});
		this.cancelToken["isCancellationRequested"] = true;
		// this.parser.state = 0;
		this.parser.reset();
		return t;
	}
	execCancel() {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
	}
	llparse = (code: string) => {
		try {
			// this.cancelToken["isCancellationRequested"] = false;
			this.lslerror.errorList = [];
			this.chars = new CharStream(code);
			this.lexer = new LSLLexer(this.chars);

			this.tokens = new CommonTokenStream(this.lexer);
			this.parser = new LSLParser(this.tokens);
			this.parser.buildParseTrees = true;
			this.parser.addErrorListener(this.lslerror);
			this.tree = this.parser.lscript_program();
			// this.parser.state = ;
			return this.tree;
		}
		catch (err) {
			// if (this.cancelPromise)
			// this.cancelPromise(true);
			return;
		}
	};

	visitIdentifier = (ctx: IdentifierContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		const name = ctx.Identifier().getText();
		const sym = new SymbolsNode(name, "identifier", "", ctx.start.line - 1, ctx.start.column,
			ctx.start.line - 1, ctx.start.column + name.length);
		sym.signature = " " + name;
		this.Symbols.push(sym);

		return sym;
	};
	visitFunction_parameters = (ctx: Function_parametersContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
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
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		// const name = this.visit(ctx.name_type().identifier()) as vscode.DocumentSymbol;
		const name = ctx.identifier().getText();
		const type = ctx.typename().getText();

		const sym = new SymbolsNode(name, "function_parameter", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name;
		this.Symbols.push(sym);
		if (ctx.start.line <= this.breakPosition.row)
			this.localSymbols[this.localSymbols.length - 1].push(sym);
		this.SymbolsTree.insert(ctx.parentCtx.parentCtx.start.tokenIndex, ctx.parentCtx.parentCtx.stop.tokenIndex, sym);

		return sym;
	};

	visitGlobal_function = (ctx: Global_functionContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		let paramList;
		let type = "";
		const name = ctx.identifier().getText();
		if (ctx.typename()) {
			type = ctx.typename().getText();
		}

		const sym = new SymbolsNode(name, "global_function", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		this.Symbols.push(sym);



		if (ctx.start.line <= this.breakPosition.row)
			this.localSymbols[this.localSymbols.length - 1].push(sym);
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
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		if (ctx.statements())
			return this.visit(ctx.statements());
		return;
	};

	visitStatements = (ctx: StatementsContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		if (ctx.start.line <= this.breakPosition.row)
			this.localSymbols.push([]);

		const sym = new SymbolsNode("", "statements", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);

		for (const e of ctx.statement_list()) {
			const t = this.visit(e);
			sym.addChildrens([t]);
		}

		if (ctx.stop.line <= this.breakPosition.row)
			this.localSymbols.pop();
		return sym;
	};

	visitStatement = (ctx: StatementContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		const sym = new SymbolsNode("", "statements", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		if (ctx.declaration()) {
			const t = <any>this.visit(ctx.declaration());
			sym.addChildrens([t]);
		}
		else if (ctx.compound_statement()) {
			const t = this.visit(ctx.compound_statement());
			sym.addChildrens([t]);
		}
		else for (const e of ctx.statement_list()) {
			const t = this.visit(e);
			sym.addChildrens([t]);
		}

		return sym;
	};

	visitGlobal_variable = (ctx: Global_variableContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		const name = ctx.identifier().getText();
		const type = ctx.typename().getText();

		const sym = new SymbolsNode(name, "variable_declaration", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name;
		this.Symbols.push(sym);
		if (ctx.start.line <= this.breakPosition.row)
			this.localSymbols[this.localSymbols.length - 1].push(sym);
		this.SymbolsTree.insert(ctx.start.tokenIndex, ctx.parser.getTokenStream().size - 1, sym);
		return sym;
	};

	visitLscript_program = (ctx: Lscript_programContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
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
		if (ctx.global_list()) {
			for (const e of ctx.global_list()) {
				const t = this.visit(e);
				sym.addChildrens([t]);
			}
		}

		// if (t)
		// 	t.forEach(e => {
		// 		if (e)
		// 			t2.push(...e);
		// 	});
		if (ctx.stop.line <= this.breakPosition.row)
			this.localSymbols.pop();

		// sym = stripUndefined(sym);
		sym.stripUndefined();
		return sym;
	};

	visitGlobal = (ctx: GlobalContext) => {
		const t = <any>this.visitChildren(ctx);
		let stopLine = ctx.parser.getTokenStream().get(ctx.parser.getTokenStream().size - 1).line + 1, stopColumn = ctx.parser.getTokenStream().get(ctx.parser.getTokenStream().size - 1).column;
		if (ctx.stop) {
			stopLine = ctx.stop.line;
			stopColumn = ctx.stop.column;
		}
		const sym = new SymbolsNode("global", "", "", ctx.start.line - 1, ctx.start.column,
			stopLine - 1, stopColumn);
		sym.addChildrens(t);
		return sym;
	};

	visitDefault_state = (ctx: Default_stateContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");

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
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
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
		if (ctx.start.line <= this.breakPosition.row)
			this.localSymbols[this.localSymbols.length - 1].push(sym);
		this.SymbolsTree.insert(ctx.parentCtx.start.tokenIndex, ctx.parentCtx.stop.tokenIndex, sym);
		return sym;
	};

	visitDeclaration = (ctx: DeclarationContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		const name = ctx.Identifier().getText();
		const type = ctx.typename().getText();

		const sym = new SymbolsNode(name, "variable_declaration", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name;

		if (ctx.start.line <= this.breakPosition.row)
			this.localSymbols[this.localSymbols.length - 1].push(sym);
		if (ctx.parentCtx.parentCtx.parentCtx.constructor.name === 'GlobalContext')
			this.SymbolsTree.insert(ctx.start.tokenIndex, ctx.parentCtx.parentCtx.parentCtx.parentCtx.stop.tokenIndex, sym);
		else
			this.SymbolsTree.insert(ctx.start.tokenIndex, ctx.parentCtx.parentCtx.parentCtx.stop.tokenIndex, sym);
		return sym;
	};

	visitEvent = (ctx: EventContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
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


	public getDocumentSymboles(code: string, position?: Position) {
		this.llparse(code);
		this.breakPosition = new Position(99999999999999, 0);
		try {
			this.SymbolsTree.clear();
			const symboles = this.visit(this.tree);
			if (symboles)
				symboles.stripUndefined();
			return symboles;
		}
		catch (err) {
			return;
		}
	}


	public getLocalSymboles(code: string, position?: Position): Array<SymbolsNode> {
		// this.llparse(code);

		let symboles;

		if (position)
			this.breakPosition = new Position(position.row + 1, position.col);
		else
			this.breakPosition = new Position(99999999999999, 0);

		try {
			this.SymbolsTree.clear();
			symboles = this.visit(this.tree);
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

	public getLocalSymbolesNode(code: string): Array<SymbolsNode> {
		this.llparse(code);

		this.breakPosition = new Position(99999999999999, 0);

		this.SymbolsTree.clear();
		this.visit(this.tree);
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

	getL(start: number, stop: number) {
		return this.SymbolsTree.search(start, stop);
	}

	getR(position: Position) {
		const idx = this.tokens.tokens.find(e =>
			e.line == position.row + 1
			&& e.column <= position.col
			&& e.column + e.text.length >= position.col
		);

		if (idx) {
			const lo = this.getL(idx.tokenIndex, idx.tokenIndex);
			return lo;
		}
		return [];

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
class lslerror extends ErrorListener<Token>
{
	errorList: Array<error>;
	constructor() {
		super();
		this.errorList = [];
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
		// console.log(msg);
	}
}