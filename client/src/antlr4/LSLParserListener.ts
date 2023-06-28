// Generated from LSLParser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { Lscript_programContext } from "./LSLParser";
import { GlobalContext } from "./LSLParser";
import { DeclarationContext } from "./LSLParser";
import { TypenameContext } from "./LSLParser";
import { Name_typeContext } from "./LSLParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `LSLParser`.
 */
export default class LSLParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LSLParser.lscript_program`.
	 * @param ctx the parse tree
	 */
	enterLscript_program?: (ctx: Lscript_programContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.lscript_program`.
	 * @param ctx the parse tree
	 */
	exitLscript_program?: (ctx: Lscript_programContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.global`.
	 * @param ctx the parse tree
	 */
	enterGlobal?: (ctx: GlobalContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.global`.
	 * @param ctx the parse tree
	 */
	exitGlobal?: (ctx: GlobalContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.typename`.
	 * @param ctx the parse tree
	 */
	enterTypename?: (ctx: TypenameContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.typename`.
	 * @param ctx the parse tree
	 */
	exitTypename?: (ctx: TypenameContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.name_type`.
	 * @param ctx the parse tree
	 */
	enterName_type?: (ctx: Name_typeContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.name_type`.
	 * @param ctx the parse tree
	 */
	exitName_type?: (ctx: Name_typeContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.llstates`.
	 * @param ctx the parse tree
	 */
	enterLlstates?: (ctx: LlstatesContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.llstates`.
	 * @param ctx the parse tree
	 */
	exitLlstates?: (ctx: LlstatesContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.default_state`.
	 * @param ctx the parse tree
	 */
	enterDefault_state?: (ctx: Default_stateContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.default_state`.
	 * @param ctx the parse tree
	 */
	exitDefault_state?: (ctx: Default_stateContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.llstate`.
	 * @param ctx the parse tree
	 */
	enterLlstate?: (ctx: LlstateContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.llstate`.
	 * @param ctx the parse tree
	 */
	exitLlstate?: (ctx: LlstateContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.global_variable`.
	 * @param ctx the parse tree
	 */
	enterGlobal_variable?: (ctx: Global_variableContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.global_variable`.
	 * @param ctx the parse tree
	 */
	exitGlobal_variable?: (ctx: Global_variableContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.simple_assignable`.
	 * @param ctx the parse tree
	 */
	enterSimple_assignable?: (ctx: Simple_assignableContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.simple_assignable`.
	 * @param ctx the parse tree
	 */
	exitSimple_assignable?: (ctx: Simple_assignableContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.simple_assignable_no_list`.
	 * @param ctx the parse tree
	 */
	enterSimple_assignable_no_list?: (ctx: Simple_assignable_no_listContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.simple_assignable_no_list`.
	 * @param ctx the parse tree
	 */
	exitSimple_assignable_no_list?: (ctx: Simple_assignable_no_listContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.fp_constant`.
	 * @param ctx the parse tree
	 */
	enterFp_constant?: (ctx: Fp_constantContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.fp_constant`.
	 * @param ctx the parse tree
	 */
	exitFp_constant?: (ctx: Fp_constantContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.integer_constant`.
	 * @param ctx the parse tree
	 */
	enterInteger_constant?: (ctx: Integer_constantContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.integer_constant`.
	 * @param ctx the parse tree
	 */
	exitInteger_constant?: (ctx: Integer_constantContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.special_constant`.
	 * @param ctx the parse tree
	 */
	enterSpecial_constant?: (ctx: Special_constantContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.special_constant`.
	 * @param ctx the parse tree
	 */
	exitSpecial_constant?: (ctx: Special_constantContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.vector_constant`.
	 * @param ctx the parse tree
	 */
	enterVector_constant?: (ctx: Vector_constantContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.vector_constant`.
	 * @param ctx the parse tree
	 */
	exitVector_constant?: (ctx: Vector_constantContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.quaternion_constant`.
	 * @param ctx the parse tree
	 */
	enterQuaternion_constant?: (ctx: Quaternion_constantContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.quaternion_constant`.
	 * @param ctx the parse tree
	 */
	exitQuaternion_constant?: (ctx: Quaternion_constantContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.list_constant`.
	 * @param ctx the parse tree
	 */
	enterList_constant?: (ctx: List_constantContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.list_constant`.
	 * @param ctx the parse tree
	 */
	exitList_constant?: (ctx: List_constantContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.list_entries`.
	 * @param ctx the parse tree
	 */
	enterList_entries?: (ctx: List_entriesContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.list_entries`.
	 * @param ctx the parse tree
	 */
	exitList_entries?: (ctx: List_entriesContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.list_entry`.
	 * @param ctx the parse tree
	 */
	enterList_entry?: (ctx: List_entryContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.list_entry`.
	 * @param ctx the parse tree
	 */
	exitList_entry?: (ctx: List_entryContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.global_function`.
	 * @param ctx the parse tree
	 */
	enterGlobal_function?: (ctx: Global_functionContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.global_function`.
	 * @param ctx the parse tree
	 */
	exitGlobal_function?: (ctx: Global_functionContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameters?: (ctx: Function_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.function_parameters`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameters?: (ctx: Function_parametersContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.function_parameter`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameter?: (ctx: Function_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.function_parameter`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameter?: (ctx: Function_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.state_body`.
	 * @param ctx the parse tree
	 */
	enterState_body?: (ctx: State_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.state_body`.
	 * @param ctx the parse tree
	 */
	exitState_body?: (ctx: State_bodyContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	enterCompound_statement?: (ctx: Compound_statementContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.compound_statement`.
	 * @param ctx the parse tree
	 */
	exitCompound_statement?: (ctx: Compound_statementContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.forexpressionlist`.
	 * @param ctx the parse tree
	 */
	enterForexpressionlist?: (ctx: ForexpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.forexpressionlist`.
	 * @param ctx the parse tree
	 */
	exitForexpressionlist?: (ctx: ForexpressionlistContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.funcexpressionlist`.
	 * @param ctx the parse tree
	 */
	enterFuncexpressionlist?: (ctx: FuncexpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.funcexpressionlist`.
	 * @param ctx the parse tree
	 */
	exitFuncexpressionlist?: (ctx: FuncexpressionlistContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.listexpressionlist`.
	 * @param ctx the parse tree
	 */
	enterListexpressionlist?: (ctx: ListexpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.listexpressionlist`.
	 * @param ctx the parse tree
	 */
	exitListexpressionlist?: (ctx: ListexpressionlistContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.nextlistexpressionlist`.
	 * @param ctx the parse tree
	 */
	enterNextlistexpressionlist?: (ctx: NextlistexpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.nextlistexpressionlist`.
	 * @param ctx the parse tree
	 */
	exitNextlistexpressionlist?: (ctx: NextlistexpressionlistContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.unaryexpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryexpression?: (ctx: UnaryexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.unaryexpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryexpression?: (ctx: UnaryexpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.typecast`.
	 * @param ctx the parse tree
	 */
	enterTypecast?: (ctx: TypecastContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.typecast`.
	 * @param ctx the parse tree
	 */
	exitTypecast?: (ctx: TypecastContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.unarypostfixexpression`.
	 * @param ctx the parse tree
	 */
	enterUnarypostfixexpression?: (ctx: UnarypostfixexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.unarypostfixexpression`.
	 * @param ctx the parse tree
	 */
	exitUnarypostfixexpression?: (ctx: UnarypostfixexpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.vector_initializer`.
	 * @param ctx the parse tree
	 */
	enterVector_initializer?: (ctx: Vector_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.vector_initializer`.
	 * @param ctx the parse tree
	 */
	exitVector_initializer?: (ctx: Vector_initializerContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.quaternion_initializer`.
	 * @param ctx the parse tree
	 */
	enterQuaternion_initializer?: (ctx: Quaternion_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.quaternion_initializer`.
	 * @param ctx the parse tree
	 */
	exitQuaternion_initializer?: (ctx: Quaternion_initializerContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.list_initializer`.
	 * @param ctx the parse tree
	 */
	enterList_initializer?: (ctx: List_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.list_initializer`.
	 * @param ctx the parse tree
	 */
	exitList_initializer?: (ctx: List_initializerContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `LSLParser.includeDirective`.
	 * @param ctx the parse tree
	 */
	enterIncludeDirective?: (ctx: IncludeDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `LSLParser.includeDirective`.
	 * @param ctx the parse tree
	 */
	exitIncludeDirective?: (ctx: IncludeDirectiveContext) => void;
}

