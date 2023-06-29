import { Token, CommonToken, ParseTreeVisitor, CharStream, CommonTokenStream, ParseTreeWalker, FileStream, ParseTree, TerminalNode, ErrorNode, ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import LSLLexer from '../antlr4/LSLLexer';
import LSLParser, { Compound_statementContext, DeclarationContext, Default_stateContext, EventContext, Function_parameterContext, Function_parametersContext, GlobalContext, Global_functionContext, Global_variableContext, IdentifierContext, LlstateContext, LlstatesContext, Lscript_programContext, Name_typeContext, StatementsContext } from '../antlr4/LSLParser';
import LSLVisitor, { } from '../antlr4/LSLParserVisitor';


import * as vscode from 'vscode';
import { type } from 'os';

class Position {
	row: number;
	col: number;
	constructor(row: number, col: number) {
		this.row = row;
		this.col = col;
	}
}
class Range {
	start: Position;
	end: Position;
	constructor(start: Position, end: Position) {
		this.start = start;
		this.end = end;
	}
}



class SymbolsNode {
	name: string;
	type: string;
	nodeType: string;
	startLine: number;
	startColumn: number;
	endLine: number;
	endColumn: number;
	signature: string;

	constructor(name: string, nodeType: string, type: string, startLine: number, startColumn: number, endLine: number, endColumn: number) {
		this.name = name;
		this.startLine = startLine;
		this.startColumn = startColumn;
		this.endColumn = endColumn;
		this.endLine = endLine;
		this.type = type;
		this.nodeType = nodeType;
		this.signature = "";
	}
}

export class ExtractVariablesAndFunctionsVisitor extends LSLVisitor<Array<vscode.DocumentSymbol> | vscode.DocumentSymbol> {
	cancelToken: boolean;
	outArray: vscode.DocumentSymbol[];
	level: number;

	Symbols: Array<SymbolsNode>;
	localSymbols: Array<Array<SymbolsNode>>;
	breakPosition: vscode.Position;

	lslerror: lslerror;

	chars;
	lexer;
	tokens;
	parser;
	tree;

	constructor() {
		super();
		this.cancelToken = false;
		this.outArray = new Array<vscode.DocumentSymbol>;
		this.Symbols = new Array<SymbolsNode>;
		this.localSymbols = new Array<Array<SymbolsNode>>;
		this.breakPosition = new vscode.Position(99999999999999, 0);

		this.lslerror = new lslerror;
	}

	llparse = (code: string) => {

		this.lslerror.errorList = [];
		this.chars = new CharStream(code);
		this.lexer = new LSLLexer(this.chars);

		this.tokens = new CommonTokenStream(this.lexer);
		this.parser = new LSLParser(this.tokens);
		this.parser.buildParseTrees = true;
		this.parser.addErrorListener(this.lslerror);
		this.tree = this.parser.lscript_program();
		return this;
	};


	visitName_type = (ctx: Name_typeContext) => {
		return [];
	};
	visitIdentifier = (ctx: IdentifierContext) => {
		return [];
	};
	visitFunction_parameters = (ctx: Function_parametersContext): Array<vscode.DocumentSymbol> => {
		this.level++;
		let params = this.visitChildren(ctx) as Array<vscode.DocumentSymbol>;

		params = params.filter(e => e !== undefined);
		this.level--;
		return params;
	};

	visitFunction_parameter = (ctx: Function_parameterContext) => {
		// const name = this.visit(ctx.name_type().identifier()) as vscode.DocumentSymbol;
		const name = ctx.name_type().identifier().getText();
		const type = ctx.name_type().typename().getText();

		const symbole = new vscode.DocumentSymbol(name, "", vscode.SymbolKind.Variable,
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			),
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			)
		);

		const sym = new SymbolsNode(name, "variable_declaration", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name;
		this.Symbols.push(sym);
		if (ctx.start.line <= this.breakPosition.line)
			this.localSymbols[this.localSymbols.length - 1].push(sym);

		return symbole;
	};

	visitGlobal_function = (ctx: Global_functionContext) => {
		let paramList;
		let name;
		let type = "";
		if (ctx.name_type()) {
			name = ctx.name_type().identifier().getText();
			type = ctx.name_type().typename().getText();
		}
		else {
			name = ctx.identifier().getText();
		}


		const symbole = new vscode.DocumentSymbol(name, "", vscode.SymbolKind.Function,
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			),
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			)
		);

		const sym = new SymbolsNode(symbole.name, "global_function_declaration", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name + "()";
		this.Symbols.push(sym);
		if (ctx.start.line <= this.breakPosition.line)
			this.localSymbols[this.localSymbols.length - 1].push(sym);

		if (ctx.function_parameters()) {
			paramList = this.visit(ctx.function_parameters()) as Array<vscode.DocumentSymbol>;
			symbole.children.push(...paramList);
			for (const e of ctx.function_parameters().function_parameter_list()) {
				const sym = new SymbolsNode(e.name_type().identifier().getText(), "variable_declaration", e.name_type().typename().getText(), ctx.start.line - 1, ctx.start.column,
					ctx.stop.line - 1, ctx.stop.column);
				sym.signature = e.name_type().typename().getText() + " " + e.name_type().identifier().getText() + "()";
				// this.localSymbols[this.localSymbols.length - 1].push(sym);
			}
		}
		let childs = [];
		if (ctx.compound_statement())
			childs = this.visit(ctx.compound_statement().statements()) as Array<vscode.DocumentSymbol>;

		if (childs)
			symbole.children.push(
				...childs
			);

		return symbole;
	};
	visitCompound_statement = (ctx: Compound_statementContext) => {
		return this.visit(ctx.statements());
	};

	visitStatements = (ctx: StatementsContext) => {
		if (ctx.start.line <= this.breakPosition.line)
			this.localSymbols.push([]);
		const t = [];

		ctx.statement_list().forEach(e => {
			if (e.declaration()) {
				const t2 = this.visit(e.declaration());

				if (t2)
					t.push(t2);

				// const name = e.declaration().Identifier();
				const type = e.declaration().typename().getText();
				const name = e.declaration().Identifier().getText();

				const sym = new SymbolsNode(name, "variable_declaration", type, ctx.start.line - 1, ctx.start.column,
					ctx.stop.line - 1, ctx.stop.column);
				sym.signature = type + " " + name;

				this.Symbols.push(sym);
				if (ctx.start.line <= this.breakPosition.line)
					this.localSymbols[this.localSymbols.length - 1].push(sym);
			}
			else {
				if (e.identifier()) {
					const name = e.identifier().getText();

					const sym = new SymbolsNode(name, "variable", "", ctx.start.line - 1, ctx.start.column,
						ctx.stop.line - 1, ctx.stop.column);
					sym.signature = " " + name;
					// this.Symbols.push(sym);
					// this.localSymbols[this.localSymbols.length - 1].push(sym);

				}
			}
		});
		if (ctx.stop.line <= this.breakPosition.line)
			this.localSymbols.pop();
		return t;
	};

	visitGlobal_variable = (ctx: Global_variableContext) => {
		const name = ctx.name_type().identifier().getText();
		const type = ctx.name_type().typename().getText();

		const symbole = new vscode.DocumentSymbol(name, "", vscode.SymbolKind.Variable,
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			),
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			)
		);

		const sym = new SymbolsNode(symbole.name, "global_variable_declaration", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + " " + name;
		this.Symbols.push(sym);
		if (ctx.start.line <= this.breakPosition.line)
			this.localSymbols[this.localSymbols.length - 1].push(sym);

		return symbole;
	};

	visitLscript_program = (ctx: Lscript_programContext) => {
		this.Symbols = [];
		this.localSymbols = [];
		this.localSymbols.push([]);
		const t = this.visitChildren(ctx) as Array<any>;
		let t2 = [];

		if (t)
			t.forEach(e => {
				if (e)
					t2.push(...e);
			});
		if (ctx.stop.line <= this.breakPosition.line)
			this.localSymbols.pop();

		t2 = stripUndefined(t2);
		return t2;
	};

	visitDefault_state = (ctx: Default_stateContext) => {
		const t = [];

		const name = 'default';

		const symbole = new vscode.DocumentSymbol(name, "", vscode.SymbolKind.String,
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			),
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			)
		);
		symbole.kind = vscode.SymbolKind.Class;

		ctx.state_body().event_list().forEach(e => {
			const symbole2 = new vscode.DocumentSymbol(e.Identifier().getText(), "", vscode.SymbolKind.Event,
				new vscode.Range(
					new vscode.Position(e.start.line - 1, e.start.column),
					new vscode.Position(e.stop.line - 1, e.stop.column)
				),
				new vscode.Range(
					new vscode.Position(e.start.line - 1, e.start.column),
					new vscode.Position(e.stop.line - 1, e.stop.column)
				)
			);

			if (e.compound_statement()) {
				const c = this.visit(e.compound_statement()) as Array<vscode.DocumentSymbol>;
				if (c)
					symbole2.children.push(...c);
			}
			if (e.function_parameters()) {
				const c = this.visit(e.function_parameters()) as Array<vscode.DocumentSymbol>;
				if (c)
					symbole2.children.push(...c);
			}
			symbole.children.push(symbole2);
		});
		return symbole;
	};
	visitLlstate = (ctx: LlstateContext) => {
		const t = [];

		const name = ctx.Identifier().getText();

		const symbole = new vscode.DocumentSymbol(name, "", vscode.SymbolKind.String,
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			),
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			)
		);

		symbole.kind = vscode.SymbolKind.Class;

		ctx.state_body().event_list().forEach(e => {
			const symbole2 = new vscode.DocumentSymbol(e.Identifier().getText(), "", vscode.SymbolKind.Event,
				new vscode.Range(
					new vscode.Position(e.start.line - 1, e.start.column),
					new vscode.Position(e.stop.line - 1, e.stop.column)
				),
				new vscode.Range(
					new vscode.Position(e.start.line - 1, e.start.column),
					new vscode.Position(e.stop.line - 1, e.stop.column)
				)
			);

			if (e.compound_statement()) {
				const c = this.visit(e.compound_statement()) as Array<vscode.DocumentSymbol>;
				symbole2.children.push(...c);
			}
			if (e.function_parameters()) {
				const c = this.visit(e.function_parameters()) as Array<vscode.DocumentSymbol>;
				symbole2.children.push(...c);

				for (const e2 of e.function_parameters().function_parameter_list()) {
					const sym = new SymbolsNode(e2.name_type().identifier().getText(), "variable_declaration", e2.name_type().typename().getText(), ctx.start.line - 1, ctx.start.column,
						ctx.stop.line - 1, ctx.stop.column);
					sym.signature = e2.name_type().typename().getText() + " " + e2.name_type().identifier().getText();
					this.Symbols.push(sym);
					if (ctx.start.line <= this.breakPosition.line)
						this.localSymbols[this.localSymbols.length - 1].push(sym);
				}



			}
			symbole.children.push(symbole2);
		});

		const sym = new SymbolsNode(symbole.name, "state_declaration", "state", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = "state " + name;
		this.Symbols.push(sym);
		if (ctx.start.line <= this.breakPosition.line)
			this.localSymbols[this.localSymbols.length - 1].push(sym);
		return symbole;
	};

	visitDeclaration = (ctx: DeclarationContext) => {
		const name = ctx.Identifier().getText();
		const type = ctx.typename().getText();

		const symbole = new vscode.DocumentSymbol(name, "", vscode.SymbolKind.String,
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			),
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			)
		);

		symbole.kind = vscode.SymbolKind.Variable;
		const sym = new SymbolsNode(symbole.name, "variable", type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column);
		sym.signature = type + "" + name;
		if (ctx.start.line <= this.breakPosition.line)
			this.localSymbols[this.localSymbols.length - 1].push(sym);
		return symbole;
	};
	visitEvent = (ctx: EventContext) => {
		const name = ctx.Identifier().getText();

		const symbole = new vscode.DocumentSymbol(name, "", vscode.SymbolKind.Event,
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			),
			new vscode.Range(
				new vscode.Position(ctx.start.line - 1, ctx.start.column),
				new vscode.Position(ctx.stop.line - 1, ctx.stop.column)
			)
		);

		if (ctx.function_parameters()) {
			const params = this.visit(ctx.function_parameters()) as Array<vscode.DocumentSymbol>;
			symbole.children.push(...params);

			for (const e of ctx.function_parameters().function_parameter_list()) {
				const sym = new SymbolsNode(e.name_type().identifier().getText(), "variable", e.name_type().typename().getText(), ctx.start.line - 1, ctx.start.column,
					ctx.stop.line - 1, ctx.stop.column);
				sym.signature = e.name_type().typename().getText() + " " + e.name_type().identifier().getText() + "()";
				// this.localSymbols[this.localSymbols.length - 1].push(sym);
			}
		}

		const childs = this.visit(ctx.compound_statement().statements()) as Array<vscode.DocumentSymbol>;

		symbole.children.push(
			...childs
		);

		symbole.children.push(...childs);

		return symbole;
	};











	getDocumentSymboles(tree: Lscript_programContext, position?: vscode.Position): Array<vscode.DocumentSymbol> {
		this.breakPosition = new vscode.Position(99999999999999, 0);
		const symboles = this.visit(this.tree) as Array<vscode.DocumentSymbol>;

		return stripUndefined(symboles);
	}


	getLocalSymboles(tree: Lscript_programContext, position?: vscode.Position): Array<SymbolsNode> {
		let symboles;

		if (position)
			this.breakPosition = new vscode.Position(position.line + 1, position.character);
		else
			this.breakPosition = new vscode.Position(99999999999999, 0);

		try {
			symboles = this.visit(this.tree) as Array<vscode.DocumentSymbol>;
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

		return stripUndefined(out);
	}

	getLocalSymbolesNode(tree: Lscript_programContext): Array<SymbolsNode> {
		this.breakPosition = new vscode.Position(99999999999999, 0);

		this.visit(this.tree);
		const symboles = this.localSymbols;

		const out = new Array<SymbolsNode>;
		symboles.forEach(i => {
			if (i)
				i.forEach(j => {
					out.push(j);
				});
		});

		return stripUndefined(out);
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

function stripUndefined(arr) {
	return arr.reduce(function (result, item) {
		if (item !== undefined)
			result.push(Array.isArray(item) && !item.length ? stripUndefined(item) : item);
		return result;
	}, []);
}