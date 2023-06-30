// Generated from LSLParser.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { Lscript_programContext } from "./LSLParser";
import { GlobalContext } from "./LSLParser";
import { DeclarationContext } from "./LSLParser";
import { TypenameContext } from "./LSLParser";
import { LlstatesContext } from "./LSLParser";
import { Default_stateContext } from "./LSLParser";
import { LlstateContext } from "./LSLParser";
import { Global_variableContext } from "./LSLParser";
import { Simple_assignableContext } from "./LSLParser";
import { Simple_assignable_no_listContext } from "./LSLParser";
import { ConstantContext } from "./LSLParser";
import { Fp_constantContext } from "./LSLParser";
import { Integer_constantContext } from "./LSLParser";
import { NumericLiteralContext } from "./LSLParser";
import { Special_constantContext } from "./LSLParser";
import { Vector_constantContext } from "./LSLParser";
import { Quaternion_constantContext } from "./LSLParser";
import { List_constantContext } from "./LSLParser";
import { List_entriesContext } from "./LSLParser";
import { List_entryContext } from "./LSLParser";
import { Global_functionContext } from "./LSLParser";
import { Function_parametersContext } from "./LSLParser";
import { Function_parameterContext } from "./LSLParser";
import { State_bodyContext } from "./LSLParser";
import { EventContext } from "./LSLParser";
import { Compound_statementContext } from "./LSLParser";
import { StatementsContext } from "./LSLParser";
import { StatementContext } from "./LSLParser";
import { ForexpressionlistContext } from "./LSLParser";
import { FuncexpressionlistContext } from "./LSLParser";
import { ListexpressionlistContext } from "./LSLParser";
import { NextlistexpressionlistContext } from "./LSLParser";
import { ExpressionContext } from "./LSLParser";
import { UnaryexpressionContext } from "./LSLParser";
import { TypecastContext } from "./LSLParser";
import { UnarypostfixexpressionContext } from "./LSLParser";
import { Vector_initializerContext } from "./LSLParser";
import { Quaternion_initializerContext } from "./LSLParser";
import { List_initializerContext } from "./LSLParser";
import { LvalueContext } from "./LSLParser";
import { IdentifierContext } from "./LSLParser";
import { IncludeDirectiveContext } from "./LSLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LSLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LSLParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LSLParser.lscript_program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLscript_program?: (ctx: Lscript_programContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.global`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal?: (ctx: GlobalContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.typename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypename?: (ctx: TypenameContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.llstates`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLlstates?: (ctx: LlstatesContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.default_state`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_state?: (ctx: Default_stateContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.llstate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLlstate?: (ctx: LlstateContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.global_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_variable?: (ctx: Global_variableContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.simple_assignable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_assignable?: (ctx: Simple_assignableContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.simple_assignable_no_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_assignable_no_list?: (ctx: Simple_assignable_no_listContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.fp_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFp_constant?: (ctx: Fp_constantContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.integer_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger_constant?: (ctx: Integer_constantContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.special_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecial_constant?: (ctx: Special_constantContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.vector_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVector_constant?: (ctx: Vector_constantContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.quaternion_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuaternion_constant?: (ctx: Quaternion_constantContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.list_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_constant?: (ctx: List_constantContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.list_entries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_entries?: (ctx: List_entriesContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.list_entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_entry?: (ctx: List_entryContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.global_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_function?: (ctx: Global_functionContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.function_parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_parameters?: (ctx: Function_parametersContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.function_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_parameter?: (ctx: Function_parameterContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.state_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_body?: (ctx: State_bodyContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent?: (ctx: EventContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.compound_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_statement?: (ctx: Compound_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.forexpressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForexpressionlist?: (ctx: ForexpressionlistContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.funcexpressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncexpressionlist?: (ctx: FuncexpressionlistContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.listexpressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListexpressionlist?: (ctx: ListexpressionlistContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.nextlistexpressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNextlistexpressionlist?: (ctx: NextlistexpressionlistContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.unaryexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryexpression?: (ctx: UnaryexpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.typecast`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypecast?: (ctx: TypecastContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.unarypostfixexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnarypostfixexpression?: (ctx: UnarypostfixexpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.vector_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVector_initializer?: (ctx: Vector_initializerContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.quaternion_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuaternion_initializer?: (ctx: Quaternion_initializerContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.list_initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_initializer?: (ctx: List_initializerContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `LSLParser.includeDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeDirective?: (ctx: IncludeDirectiveContext) => Result;
}

