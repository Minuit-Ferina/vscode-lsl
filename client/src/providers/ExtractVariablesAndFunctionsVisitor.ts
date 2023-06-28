import { Token, CommonToken, ParseTreeVisitor, CharStream, CommonTokenStream, ParseTreeWalker, FileStream, ParseTree, TerminalNode, ErrorNode, ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import LSLLexer from '../antlr4/LSLLexer';
import LSLParser, { Compound_statementContext, DeclarationContext, Default_stateContext, EventContext, Function_parameterContext, Function_parametersContext, GlobalContext, Global_functionContext, Global_variableContext, IdentifierContext, LlstateContext, LlstatesContext, Lscript_programContext, Name_typeContext, StatementsContext } from '../antlr4/LSLParser';
import LSLVisitor, { } from '../antlr4/LSLParserVisitor';


import * as vscode from 'vscode';




class SymbolsNode {
	name: string;
	type: string;
	startLine: number;
	startColumn: number;
	endLine: number;
	endColumn: number;

	constructor(name: string, type: string, startLine: number, startColumn: number, endLine: number, endColumn: number) {
		this.name = name;
		this.startLine = startLine;
		this.startColumn = startColumn;
		this.endColumn = endColumn;
		this.endLine = endLine;
		this.type = type;
	}
}

export class ExtractVariablesAndFunctionsVisitor extends LSLVisitor<Array<vscode.DocumentSymbol> | vscode.DocumentSymbol> {
	cancelToken: boolean;
	outArray: vscode.DocumentSymbol[];
	level: number;

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
		if (ctx.start.line > this.breakPosition.line)
			throw ("test");
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
		this.localSymbols[this.localSymbols.length - 1].push(new SymbolsNode(symbole.name, type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column));

		return symbole;
	};

	visitGlobal_function = (ctx: Global_functionContext) => {
		if (ctx.start.line > this.breakPosition.line)
			throw ("test");
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
		this.localSymbols[this.localSymbols.length - 1].push(new SymbolsNode(symbole.name, type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column));

		if (ctx.function_parameters()) {
			paramList = this.visit(ctx.function_parameters()) as Array<vscode.DocumentSymbol>;
			symbole.children.push(...paramList);
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
		if (ctx.start.line > this.breakPosition.line)
			throw ("test");
		this.localSymbols.push([]);
		const t = [];

		ctx.statement_list().forEach(e => {
			if (e.declaration()) {
				const t2 = this.visit(e.declaration());
				if (t2)
					t.push(t2);
			}
			else {
				if (e.identifier()) {
					const name = e.identifier().getText();
					this.localSymbols[this.localSymbols.length - 1].push(new SymbolsNode(name, "", ctx.start.line - 1, ctx.start.column,
						ctx.stop.line - 1, ctx.stop.column));

				}
			}
		});
		this.localSymbols.pop();
		return t;
	};

	visitGlobal_variable = (ctx: Global_variableContext) => {
		if (ctx.start.line > this.breakPosition.line)
			throw ("test");
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
		this.localSymbols[this.localSymbols.length - 1].push(new SymbolsNode(symbole.name, type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column));

		return symbole;
	};

	visitLscript_program = (ctx: Lscript_programContext) => {
		if (ctx.start.line > this.breakPosition.line)
			throw ("test");
		this.localSymbols.push([]);
		const t = this.visitChildren(ctx) as Array<any>;
		let t2 = [];

		if (t)
			t.forEach(e => {
				if (e)
					t2.push(...e);
			});
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
		if (ctx.start.line > this.breakPosition.line)
			throw ("test");
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
			}
			symbole.children.push(symbole2);
		});
		this.localSymbols[this.localSymbols.length - 1].push(new SymbolsNode(symbole.name, "", ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column));
		return symbole;
	};

	visitDeclaration = (ctx: DeclarationContext) => {
		if (ctx.start.line > this.breakPosition.line)
			throw ("test");
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

		this.localSymbols[this.localSymbols.length - 1].push(new SymbolsNode(symbole.name, type, ctx.start.line - 1, ctx.start.column,
			ctx.stop.line - 1, ctx.stop.column));
		return symbole;
	};
	visitEvent = (ctx: EventContext) => {
		if (ctx.start.line > this.breakPosition.line)
			throw ("test");
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
		}

		const childs = this.visit(ctx.compound_statement().statements()) as Array<vscode.DocumentSymbol>;

		symbole.children.push(
			...childs
		);

		symbole.children.push(...childs);

		return symbole;
	};











	getDocumentSymboles(tree: Lscript_programContext, position?: vscode.Position): Array<vscode.DocumentSymbol> {
		// const t = new ExtractVariablesAndFunctionsVisitor();

		// let symboles: Array<vscode.DocumentSymbol>;

		// try {
		this.breakPosition = new vscode.Position(99999999999999, 0);
		const symboles = this.visit(this.tree) as Array<vscode.DocumentSymbol>;

		// }
		// catch (error) {
		// symboles = [];
		// }
		return symboles;

	}


	getLocalSymboles(tree: Lscript_programContext, position?: vscode.Position): Array<string> {
		// const t = new ExtractVariablesAndFunctionsVisitor();

		let symboles;

		if (position)
			this.breakPosition = position;
		else
			this.breakPosition = new vscode.Position(99999999999999, 0);

		try {
			symboles = this.visit(this.tree) as Array<vscode.DocumentSymbol>;
		}
		catch (error) {
			symboles = this.localSymbols;
		}

		const out = new Array<string>;
		symboles.forEach(i => {
			if (i)
				i.forEach(j => {
					out.push(j.name);
				});
		});

		return out;
	}

	getLocalSymbolesNode(tree: Lscript_programContext): Array<SymbolsNode> {
		// const t = new ExtractVariablesAndFunctionsVisitor();
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

		return out;
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

	// arr.forEach(e => {
	// 	if(e !== undefined)
	// });
	// return arr;
	return arr.reduce(function (result, item) {
		if(item !== undefined)
		result.push(Array.isArray(item) && !item.length ? stripUndefined(item) : item);
		return result;
	}, []);
}