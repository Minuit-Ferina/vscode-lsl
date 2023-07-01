import { Token, CommonToken, ParseTreeVisitor, CharStream, CommonTokenStream, ParseTreeWalker, FileStream, ParseTree, TerminalNode, ErrorNode, ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import LSLLexer from '../antlr4/LSLLexer';
import LSLParser, { Compound_statementContext, DeclarationContext, Default_stateContext, EventContext, Function_parameterContext, Function_parametersContext, GlobalContext, Global_functionContext, Global_variableContext, IdentifierContext, LlstateContext, LlstatesContext, Lscript_programContext, StatementContext, StatementsContext } from '../antlr4/LSLParser';
import LSLVisitor, { } from '../antlr4/LSLParserVisitor';

import { stripUndefined, Position, Range } from './common';

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

	stripUndefined() {
		if (Array.isArray(this.childrens)) {
			this.childrens = this.childrens.filter(e => e !== undefined);
			this.childrens.forEach(e => {
				e.stripUndefined();
			});
		}
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

	constructor() {
		super();
		this.cancelToken = {};
		this.Symbols = new Array<SymbolsNode>;
		this.localSymbols = new Array<Array<SymbolsNode>>;
		this.breakPosition = new Position(99999999999999, 0);

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
			this.cancelToken["isCancellationRequested"] = false;
			this.lslerror.errorList = [];
			this.chars = new CharStream(code);
			this.lexer = new LSLLexer(this.chars);

			this.tokens = new CommonTokenStream(this.lexer);
			this.parser = new LSLParser(this.tokens);
			this.parser.buildParseTrees = true;
			this.parser.addErrorListener(this.lslerror);
			this.tree = this.parser.lscript_program();
			// this.parser.state = ;
			return this;
		}
		catch (err) {
			if (this.cancelPromise)
				this.cancelPromise(true);
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
			sym.childrens.push(t);
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

		sym.signature = type + " " + name + "(";
		if (ctx.function_parameters()) {
			paramList = <any>this.visitChildren(ctx.function_parameters());
			sym.childrens.push(...paramList);

			for (const e of paramList) {
				sym.signature += e.signature + ", ";
			}
			sym.signature = sym.signature.slice(0, sym.signature.lastIndexOf(", "));
		}
		sym.signature += ")";

		if (ctx.compound_statement()) {
			paramList = <any>this.visit(ctx.compound_statement());
			sym.childrens.push(paramList);
		}

		return sym;
	};
	visitCompound_statement = (ctx: Compound_statementContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		return this.visit(ctx.statements());
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
			sym.childrens.push(t);
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
			sym.childrens.push(t);
		}
		else if (ctx.compound_statement()) {
			const t = this.visit(ctx.compound_statement());
			sym.childrens.push(t);
		}
		else for (const e of ctx.statement_list()) {
			const t = this.visit(e);
			sym.childrens.push(t);
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

		return sym;
	};

	visitLscript_program = (ctx: Lscript_programContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		this.Symbols = [];
		this.localSymbols = [];
		this.localSymbols.push([]);
		const t = <any>this.visitChildren(ctx);
		const sym = new SymbolsNode("lscript_program", "", "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		for (const e of t) {
			sym.childrens.push(...e);
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

	visitDefault_state = (ctx: Default_stateContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		const t = <any>this.visitChildren(ctx.state_body());

		const name = 'default';

		const sym = new SymbolsNode(name, "default_state", "state", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.childrens.push(...t);
		// for (const e of t) {
		// }

		return sym;
	};
	visitLlstate = (ctx: LlstateContext) => {
		if (this.cancelToken["isCancellationRequested"])
			throw ("cancel");
		// const t = [];

		const name = ctx.Identifier().getText();


		const t = <any>this.visitChildren(ctx.state_body());

		const sym = new SymbolsNode(name, "state", "state", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.childrens.push(...t);

		sym.signature = "state " + name;
		this.Symbols.push(sym);
		if (ctx.start.line <= this.breakPosition.row)
			this.localSymbols[this.localSymbols.length - 1].push(sym);

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
			sym.childrens.push(...param);
		}

		if (ctx.compound_statement()) {
			const param = <any>this.visit(ctx.compound_statement());
			sym.childrens.push(param);
		}
		return sym;
	};


	///////////////////////////////////////////////////////////////////////


	public getDocumentSymboles(code: string, position?: Position) {
		this.llparse(code);
		this.breakPosition = new Position(99999999999999, 0);
		const symboles = this.visit(this.tree);
		symboles.stripUndefined();
		return symboles;
	}


	public getLocalSymboles(code: string, position?: Position): Array<SymbolsNode> {
		// this.llparse(code);

		let symboles;

		if (position)
			this.breakPosition = new Position(position.row + 1, position.col);
		else
			this.breakPosition = new Position(99999999999999, 0);

		try {
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
			e.stripUndefined();
		});
		return symboles;
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
		console.log(msg);
	}
}