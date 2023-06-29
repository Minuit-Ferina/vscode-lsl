import { Token, CommonToken, ParseTreeVisitor, CharStream, CommonTokenStream, ParseTreeWalker, FileStream, ParseTree, TerminalNode, ErrorNode, ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import LSLParser, { Compound_statementContext, DeclarationContext, Default_stateContext, EventContext, Function_parameterContext, Function_parametersContext, GlobalContext, Global_functionContext, Global_variableContext, IdentifierContext, LlstateContext, Lscript_programContext, Name_typeContext } from '../antlr4/LSLParser';
import LSLVisitor, { } from '../antlr4/LSLParserVisitor';


