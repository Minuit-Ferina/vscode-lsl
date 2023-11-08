// import * as fs from 'fs';

// import * as vscode from 'vscode';
// import { Tokenize, StreamOfTokens, TokenClass, code } from 'lsl-lexer';
import { workerData, parentPort } from 'worker_threads';

import { Token, CommonToken, ParseTreeVisitor, CharStream, CommonTokenStream, ParseTreeWalker, FileStream, ParseTree, TerminalNode, ErrorNode, ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import LSLLexer from './antlr4/LSLLexer';
import LSLParser, { Compound_statementContext, DeclarationContext, Default_stateContext, EventContext, Function_parameterContext, Function_parametersContext, Global_functionContext, Global_variableContext, IdentifierContext, Jump_labelContext, LlstateContext, LlstatesContext, Lscript_programContext, StatementContext } from './antlr4/LSLParser';
import LSLVisitor, { } from './antlr4/LSLParserVisitor';

import { ExtractVariablesAndFunctionsVisitor, lslerror } from './providers/ExtractVariablesAndFunctionsVisitor';


// import { Token } from 'lsl-lexer/dist/lexer';
// import { Functions } from './Functions';


const data = workerData;
// this.cancelToken["isCancellationRequested"] = false;
// outputChannel.appendLine("parse");
// this.lslerror.errorList = [];
const lsler = new lslerror();
const chars = new CharStream(workerData);
const lexer = new LSLLexer(chars);

const tokens = new CommonTokenStream(lexer);
const parser = new LSLParser(tokens);
parser.buildParseTrees = true;
parser.addErrorListener(lsler);
const tree = parser.lscript_program();
// outputChannel.appendLine("parsed");
const vi = new ExtractVariablesAndFunctionsVisitor();
vi.visit(tree);

const outtoken = [];

for (const e of tokens.tokens) {
	outtoken.push({
		text: e["text"],
		column: e["column"],
		line: e["line"],
		start: e["start"],
		stop: e["stop"],
		tokenIndex: e["tokenIndex"],
		type: e["type"]
	});
}
try {
	parentPort.postMessage({
		tokens: outtoken,
		lexerRulesNames: lexer.ruleNames,
		symboles: vi.Symbols,
		docsym: vi.documentSymboles,
		SymbolsTree: vi.SymbolsTree,
		errors: lsler.errorList
	});
}
catch (err) {
	console.log(err);
}			// this.parser.state = ;
// return this.tree;
// console.log(Functions);
process.exit();
