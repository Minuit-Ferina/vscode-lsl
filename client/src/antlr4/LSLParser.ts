// Generated from LSLParser.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LSLParserListener from "./LSLParserListener.js";
import LSLParserVisitor from "./LSLParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LSLParser extends Parser {
	public static readonly Integer = 1;
	public static readonly Float = 2;
	public static readonly String = 3;
	public static readonly Key = 4;
	public static readonly Vector = 5;
	public static readonly Quaternion = 6;
	public static readonly Rotation = 7;
	public static readonly List = 8;
	public static readonly StateDefault = 9;
	public static readonly State = 10;
	public static readonly Event = 11;
	public static readonly Jump = 12;
	public static readonly Return = 13;
	public static readonly If = 14;
	public static readonly Else = 15;
	public static readonly For = 16;
	public static readonly Do = 17;
	public static readonly While = 18;
	public static readonly Print = 19;
	public static readonly Dot = 20;
	public static readonly IntegerTrue = 21;
	public static readonly IntegerFalse = 22;
	public static readonly ZeroVector = 23;
	public static readonly ZeroRotation = 24;
	public static readonly TouchInvalidVector = 25;
	public static readonly TouchInvalidTexcoord = 26;
	public static readonly PlusPlus = 27;
	public static readonly MinusMinus = 28;
	public static readonly PlusAssign = 29;
	public static readonly MinusAssign = 30;
	public static readonly StarAssign = 31;
	public static readonly DivAssign = 32;
	public static readonly ModAssign = 33;
	public static readonly Semi = 34;
	public static readonly Comma = 35;
	public static readonly Assign = 36;
	public static readonly LeftParen = 37;
	public static readonly RightParen = 38;
	public static readonly LeftBracket = 39;
	public static readonly RightBracket = 40;
	public static readonly LeftBrace = 41;
	public static readonly RightBrace = 42;
	public static readonly Plus = 43;
	public static readonly Minus = 44;
	public static readonly Asterisk = 45;
	public static readonly At = 46;
	public static readonly Greater = 47;
	public static readonly Less = 48;
	public static readonly EQ = 49;
	public static readonly NEQ = 50;
	public static readonly GreaterEqual = 51;
	public static readonly LessEqual = 52;
	public static readonly And = 53;
	public static readonly Or = 54;
	public static readonly Caret = 55;
	public static readonly Tilde = 56;
	public static readonly Not = 57;
	public static readonly AndAnd = 58;
	public static readonly OrOr = 59;
	public static readonly LeftShift = 60;
	public static readonly RightShift = 61;
	public static readonly StringConstant = 62;
	public static readonly Slash = 63;
	public static readonly Mod = 64;
	public static readonly HexIntegerLiteral = 65;
	public static readonly BinaryIntegerLiteral = 66;
	public static readonly StringLiteral = 67;
	public static readonly FloatingConstant = 68;
	public static readonly DigitSequence = 69;
	public static readonly MultiLineMacro = 70;
	public static readonly Directive = 71;
	public static readonly Whitespace = 72;
	public static readonly Newline = 73;
	public static readonly BlockComment = 74;
	public static readonly LineComment = 75;
	public static readonly Identifier = 76;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_lscript_program = 0;
	public static readonly RULE_global = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_typename = 3;
	public static readonly RULE_llstates = 4;
	public static readonly RULE_default_state = 5;
	public static readonly RULE_llstate = 6;
	public static readonly RULE_global_variable = 7;
	public static readonly RULE_simple_assignable = 8;
	public static readonly RULE_simple_assignable_no_list = 9;
	public static readonly RULE_constant = 10;
	public static readonly RULE_fp_constant = 11;
	public static readonly RULE_integer_constant = 12;
	public static readonly RULE_numericLiteral = 13;
	public static readonly RULE_special_constant = 14;
	public static readonly RULE_vector_constant = 15;
	public static readonly RULE_quaternion_constant = 16;
	public static readonly RULE_list_constant = 17;
	public static readonly RULE_list_entries = 18;
	public static readonly RULE_list_entry = 19;
	public static readonly RULE_global_function = 20;
	public static readonly RULE_function_parameters = 21;
	public static readonly RULE_function_parameter = 22;
	public static readonly RULE_state_body = 23;
	public static readonly RULE_event = 24;
	public static readonly RULE_compound_statement = 25;
	public static readonly RULE_statements = 26;
	public static readonly RULE_statement = 27;
	public static readonly RULE_forexpressionlist = 28;
	public static readonly RULE_funcexpressionlist = 29;
	public static readonly RULE_listexpressionlist = 30;
	public static readonly RULE_nextlistexpressionlist = 31;
	public static readonly RULE_expression = 32;
	public static readonly RULE_unaryexpression = 33;
	public static readonly RULE_typecast = 34;
	public static readonly RULE_unarypostfixexpression = 35;
	public static readonly RULE_vector_initializer = 36;
	public static readonly RULE_quaternion_initializer = 37;
	public static readonly RULE_list_initializer = 38;
	public static readonly RULE_lvalue = 39;
	public static readonly RULE_identifier = 40;
	public static readonly literalNames: (string | null)[] = [ null, "'integer'", 
                                                            "'float'", "'string'", 
                                                            "'key'", "'vector'", 
                                                            "'quaternion'", 
                                                            "'rotation'", 
                                                            "'list'", "'default'", 
                                                            "'state'", "'event'", 
                                                            "'jump'", "'return'", 
                                                            "'if'", "'else'", 
                                                            "'for'", "'do'", 
                                                            "'while'", "'print'", 
                                                            "'.'", "'TRUE'", 
                                                            "'FALSE'", "'ZERO_Vector'", 
                                                            "'ZERO_ROTATION'", 
                                                            "'TOUCH_INVALID_Vector'", 
                                                            "'TOUCH_INVALID_TEXCOORD'", 
                                                            "'++'", "'--'", 
                                                            "'+='", "'-='", 
                                                            "'*='", "'/='", 
                                                            "'%='", "';'", 
                                                            "','", "'='", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'@'", 
                                                            "'>'", "'<'", 
                                                            "'=='", "'!='", 
                                                            "'>='", "'<='", 
                                                            "'&'", "'|'", 
                                                            "'^'", "'~'", 
                                                            "'!'", "'&&'", 
                                                            "'||'", "'<<'", 
                                                            "'>>'", null, 
                                                            "'/'", "'%'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Integer", 
                                                             "Float", "String", 
                                                             "Key", "Vector", 
                                                             "Quaternion", 
                                                             "Rotation", 
                                                             "List", "StateDefault", 
                                                             "State", "Event", 
                                                             "Jump", "Return", 
                                                             "If", "Else", 
                                                             "For", "Do", 
                                                             "While", "Print", 
                                                             "Dot", "IntegerTrue", 
                                                             "IntegerFalse", 
                                                             "ZeroVector", 
                                                             "ZeroRotation", 
                                                             "TouchInvalidVector", 
                                                             "TouchInvalidTexcoord", 
                                                             "PlusPlus", 
                                                             "MinusMinus", 
                                                             "PlusAssign", 
                                                             "MinusAssign", 
                                                             "StarAssign", 
                                                             "DivAssign", 
                                                             "ModAssign", 
                                                             "Semi", "Comma", 
                                                             "Assign", "LeftParen", 
                                                             "RightParen", 
                                                             "LeftBracket", 
                                                             "RightBracket", 
                                                             "LeftBrace", 
                                                             "RightBrace", 
                                                             "Plus", "Minus", 
                                                             "Asterisk", 
                                                             "At", "Greater", 
                                                             "Less", "EQ", 
                                                             "NEQ", "GreaterEqual", 
                                                             "LessEqual", 
                                                             "And", "Or", 
                                                             "Caret", "Tilde", 
                                                             "Not", "AndAnd", 
                                                             "OrOr", "LeftShift", 
                                                             "RightShift", 
                                                             "StringConstant", 
                                                             "Slash", "Mod", 
                                                             "HexIntegerLiteral", 
                                                             "BinaryIntegerLiteral", 
                                                             "StringLiteral", 
                                                             "FloatingConstant", 
                                                             "DigitSequence", 
                                                             "MultiLineMacro", 
                                                             "Directive", 
                                                             "Whitespace", 
                                                             "Newline", 
                                                             "BlockComment", 
                                                             "LineComment", 
                                                             "Identifier" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"lscript_program", "global", "declaration", "typename", "llstates", "default_state", 
		"llstate", "global_variable", "simple_assignable", "simple_assignable_no_list", 
		"constant", "fp_constant", "integer_constant", "numericLiteral", "special_constant", 
		"vector_constant", "quaternion_constant", "list_constant", "list_entries", 
		"list_entry", "global_function", "function_parameters", "function_parameter", 
		"state_body", "event", "compound_statement", "statements", "statement", 
		"forexpressionlist", "funcexpressionlist", "listexpressionlist", "nextlistexpressionlist", 
		"expression", "unaryexpression", "typecast", "unarypostfixexpression", 
		"vector_initializer", "quaternion_initializer", "list_initializer", "lvalue", 
		"identifier",
	];
	public get grammarFileName(): string { return "LSLParser.g4"; }
	public get literalNames(): (string | null)[] { return LSLParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LSLParser.symbolicNames; }
	public get ruleNames(): string[] { return LSLParser.ruleNames; }
	public get serializedATN(): number[] { return LSLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LSLParser._ATN, LSLParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public lscript_program(): Lscript_programContext {
		let localctx: Lscript_programContext = new Lscript_programContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LSLParser.RULE_lscript_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 535787518) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 2428523689) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1039) !== 0)) {
				{
				{
				this.state = 82;
				this.global();
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
			this.match(LSLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public global(): GlobalContext {
		let localctx: GlobalContext = new GlobalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LSLParser.RULE_global);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 90;
				this.global_function();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 91;
				this.llstates();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 92;
				this.statements();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LSLParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.typename();
			this.state = 96;
			this.match(LSLParser.Identifier);
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 97;
				this.match(LSLParser.Assign);
				this.state = 98;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typename(): TypenameContext {
		let localctx: TypenameContext = new TypenameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LSLParser.RULE_typename);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public llstates(): LlstatesContext {
		let localctx: LlstatesContext = new LlstatesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LSLParser.RULE_llstates);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 103;
			this.default_state();
			this.state = 107;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 104;
					this.llstate();
					}
					}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public default_state(): Default_stateContext {
		let localctx: Default_stateContext = new Default_stateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LSLParser.RULE_default_state);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this.match(LSLParser.StateDefault);
			{
			this.state = 111;
			this.match(LSLParser.LeftBrace);
			this.state = 112;
			this.state_body();
			this.state = 113;
			this.match(LSLParser.RightBrace);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public llstate(): LlstateContext {
		let localctx: LlstateContext = new LlstateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LSLParser.RULE_llstate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.match(LSLParser.State);
			this.state = 116;
			this.match(LSLParser.Identifier);
			{
			this.state = 117;
			this.match(LSLParser.LeftBrace);
			this.state = 118;
			this.state_body();
			this.state = 119;
			this.match(LSLParser.RightBrace);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public global_variable(): Global_variableContext {
		let localctx: Global_variableContext = new Global_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LSLParser.RULE_global_variable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 121;
			this.typename();
			this.state = 122;
			this.identifier();
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 123;
				this.match(LSLParser.Assign);
				this.state = 124;
				this.simple_assignable();
				}
			}

			this.state = 127;
			this.match(LSLParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_assignable(): Simple_assignableContext {
		let localctx: Simple_assignableContext = new Simple_assignableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LSLParser.RULE_simple_assignable);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 48:
			case 62:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 76:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 129;
				this.simple_assignable_no_list();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 130;
				this.list_constant();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_assignable_no_list(): Simple_assignable_no_listContext {
		let localctx: Simple_assignable_no_listContext = new Simple_assignable_no_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LSLParser.RULE_simple_assignable_no_list);
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 76:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 133;
				this.match(LSLParser.Identifier);
				}
				break;
			case 21:
			case 22:
			case 62:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 134;
				this.constant();
				}
				break;
			case 23:
			case 24:
			case 25:
			case 26:
			case 48:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 135;
				this.special_constant();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LSLParser.RULE_constant);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 22:
			case 65:
			case 66:
			case 67:
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 138;
				this.integer_constant();
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 139;
				this.fp_constant();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 140;
				this.match(LSLParser.StringConstant);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fp_constant(): Fp_constantContext {
		let localctx: Fp_constantContext = new Fp_constantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LSLParser.RULE_fp_constant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this.match(LSLParser.FloatingConstant);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integer_constant(): Integer_constantContext {
		let localctx: Integer_constantContext = new Integer_constantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LSLParser.RULE_integer_constant);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 67:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 145;
				this.match(LSLParser.StringLiteral);
				}
				break;
			case 65:
			case 66:
			case 69:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 146;
				this.numericLiteral();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 147;
				this.match(LSLParser.IntegerTrue);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 148;
				this.match(LSLParser.IntegerFalse);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let localctx: NumericLiteralContext = new NumericLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LSLParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if(!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 19) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public special_constant(): Special_constantContext {
		let localctx: Special_constantContext = new Special_constantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LSLParser.RULE_special_constant);
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 153;
				this.vector_constant();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 154;
				this.quaternion_constant();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public vector_constant(): Vector_constantContext {
		let localctx: Vector_constantContext = new Vector_constantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LSLParser.RULE_vector_constant);
		try {
			this.state = 168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 157;
				this.match(LSLParser.Less);
				this.state = 158;
				this.simple_assignable();
				this.state = 159;
				this.match(LSLParser.Comma);
				this.state = 160;
				this.simple_assignable();
				this.state = 161;
				this.match(LSLParser.Comma);
				this.state = 162;
				this.simple_assignable();
				this.state = 163;
				this.match(LSLParser.Greater);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 165;
				this.match(LSLParser.ZeroVector);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 166;
				this.match(LSLParser.TouchInvalidVector);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 167;
				this.match(LSLParser.TouchInvalidTexcoord);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quaternion_constant(): Quaternion_constantContext {
		let localctx: Quaternion_constantContext = new Quaternion_constantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LSLParser.RULE_quaternion_constant);
		try {
			this.state = 181;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 170;
				this.match(LSLParser.Less);
				this.state = 171;
				this.simple_assignable();
				this.state = 172;
				this.match(LSLParser.Comma);
				this.state = 173;
				this.simple_assignable();
				this.state = 174;
				this.match(LSLParser.Comma);
				this.state = 175;
				this.simple_assignable();
				this.state = 176;
				this.match(LSLParser.Comma);
				this.state = 177;
				this.simple_assignable();
				this.state = 178;
				this.match(LSLParser.Greater);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 180;
				this.match(LSLParser.ZeroRotation);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list_constant(): List_constantContext {
		let localctx: List_constantContext = new List_constantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LSLParser.RULE_list_constant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this.match(LSLParser.LeftBracket);
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 132120576) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 272515073) !== 0)) {
				{
				this.state = 184;
				this.list_entries();
				}
			}

			this.state = 187;
			this.match(LSLParser.RightBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list_entries(): List_entriesContext {
		let localctx: List_entriesContext = new List_entriesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LSLParser.RULE_list_entries);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 189;
			this.list_entry();
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 190;
				this.match(LSLParser.Comma);
				this.state = 191;
				this.list_entry();
				}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list_entry(): List_entryContext {
		let localctx: List_entryContext = new List_entryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LSLParser.RULE_list_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.simple_assignable_no_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public global_function(): Global_functionContext {
		let localctx: Global_functionContext = new Global_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LSLParser.RULE_global_function);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 199;
				this.typename();
				}
			}

			this.state = 202;
			this.identifier();
			this.state = 203;
			this.match(LSLParser.LeftParen);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 204;
				this.function_parameters();
				}
			}

			this.state = 207;
			this.match(LSLParser.RightParen);
			this.state = 208;
			this.compound_statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_parameters(): Function_parametersContext {
		let localctx: Function_parametersContext = new Function_parametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LSLParser.RULE_function_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.function_parameter();
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 211;
				this.match(LSLParser.Comma);
				this.state = 212;
				this.function_parameter();
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_parameter(): Function_parameterContext {
		let localctx: Function_parameterContext = new Function_parameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LSLParser.RULE_function_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.typename();
			this.state = 219;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public state_body(): State_bodyContext {
		let localctx: State_bodyContext = new State_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, LSLParser.RULE_state_body);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===76) {
				{
				{
				this.state = 221;
				this.event();
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public event(): EventContext {
		let localctx: EventContext = new EventContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LSLParser.RULE_event);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 227;
			this.match(LSLParser.Identifier);
			this.state = 228;
			this.match(LSLParser.LeftParen);
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 229;
				this.function_parameters();
				}
			}

			this.state = 232;
			this.match(LSLParser.RightParen);
			this.state = 233;
			this.compound_statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compound_statement(): Compound_statementContext {
		let localctx: Compound_statementContext = new Compound_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LSLParser.RULE_compound_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 235;
			this.match(LSLParser.LeftBrace);
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 535787006) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 2428523689) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1039) !== 0)) {
				{
				this.state = 236;
				this.statements();
				}
			}

			this.state = 239;
			this.match(LSLParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LSLParser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 241;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 244;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LSLParser.RULE_statement);
		let _la: number;
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 246;
				this.match(LSLParser.Semi);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 247;
				this.match(LSLParser.State);
				this.state = 248;
				this.identifier();
				this.state = 249;
				this.match(LSLParser.Semi);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 251;
				this.match(LSLParser.State);
				this.state = 252;
				this.match(LSLParser.StateDefault);
				this.state = 253;
				this.match(LSLParser.Semi);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 254;
				this.match(LSLParser.Jump);
				this.state = 255;
				this.identifier();
				this.state = 256;
				this.match(LSLParser.Semi);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 258;
				this.match(LSLParser.At);
				this.state = 259;
				this.identifier();
				this.state = 260;
				this.match(LSLParser.Semi);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 262;
				this.match(LSLParser.Return);
				this.state = 263;
				this.expression(0);
				this.state = 264;
				this.match(LSLParser.Semi);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 266;
				this.match(LSLParser.Return);
				this.state = 267;
				this.match(LSLParser.Semi);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 268;
				this.expression(0);
				this.state = 269;
				this.match(LSLParser.Semi);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 271;
				this.declaration();
				this.state = 272;
				this.match(LSLParser.Semi);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 274;
				this.compound_statement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 275;
				this.match(LSLParser.If);
				this.state = 276;
				this.match(LSLParser.LeftParen);
				this.state = 277;
				this.expression(0);
				this.state = 278;
				this.match(LSLParser.RightParen);
				this.state = 279;
				this.statement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 281;
				this.match(LSLParser.If);
				this.state = 282;
				this.match(LSLParser.LeftParen);
				this.state = 283;
				this.expression(0);
				this.state = 284;
				this.match(LSLParser.RightParen);
				this.state = 285;
				this.statement();
				this.state = 286;
				this.match(LSLParser.Else);
				this.state = 287;
				this.statement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 289;
				this.match(LSLParser.For);
				this.state = 290;
				this.match(LSLParser.LeftParen);
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 571737085) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1064515) !== 0)) {
					{
					this.state = 291;
					this.forexpressionlist();
					}
				}

				this.state = 294;
				this.match(LSLParser.Semi);
				this.state = 295;
				this.expression(0);
				this.state = 296;
				this.match(LSLParser.Semi);
				this.state = 297;
				this.forexpressionlist();
				this.state = 298;
				this.match(LSLParser.RightParen);
				this.state = 299;
				this.statement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 301;
				this.match(LSLParser.Do);
				this.state = 302;
				this.statement();
				this.state = 303;
				this.match(LSLParser.While);
				this.state = 304;
				this.match(LSLParser.LeftParen);
				this.state = 305;
				this.expression(0);
				this.state = 306;
				this.match(LSLParser.RightParen);
				this.state = 307;
				this.match(LSLParser.Semi);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 309;
				this.match(LSLParser.While);
				this.state = 310;
				this.match(LSLParser.LeftParen);
				this.state = 311;
				this.expression(0);
				this.state = 312;
				this.match(LSLParser.RightParen);
				this.state = 313;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forexpressionlist(): ForexpressionlistContext {
		let localctx: ForexpressionlistContext = new ForexpressionlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, LSLParser.RULE_forexpressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 317;
			this.expression(0);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 318;
				this.match(LSLParser.Comma);
				this.state = 319;
				this.expression(0);
				}
				}
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcexpressionlist(): FuncexpressionlistContext {
		let localctx: FuncexpressionlistContext = new FuncexpressionlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LSLParser.RULE_funcexpressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 325;
			this.expression(0);
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 326;
				this.match(LSLParser.Comma);
				this.state = 327;
				this.expression(0);
				}
				}
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listexpressionlist(): ListexpressionlistContext {
		let localctx: ListexpressionlistContext = new ListexpressionlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, LSLParser.RULE_listexpressionlist);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 333;
			this.nextlistexpressionlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nextlistexpressionlist(): NextlistexpressionlistContext {
		let localctx: NextlistexpressionlistContext = new NextlistexpressionlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, LSLParser.RULE_nextlistexpressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 335;
			this.expression(0);
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 336;
				this.match(LSLParser.Comma);
				this.state = 337;
				this.expression(0);
				}
				}
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 64;
		this.enterRecursionRule(localctx, 64, LSLParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 344;
				this.unaryexpression();
				}
				break;
			case 2:
				{
				this.state = 345;
				this.lvalue();
				this.state = 346;
				this.match(LSLParser.Assign);
				this.state = 347;
				this.expression(24);
				}
				break;
			case 3:
				{
				this.state = 349;
				this.lvalue();
				this.state = 350;
				this.match(LSLParser.PlusAssign);
				this.state = 351;
				this.expression(23);
				}
				break;
			case 4:
				{
				this.state = 353;
				this.lvalue();
				this.state = 354;
				this.match(LSLParser.MinusAssign);
				this.state = 355;
				this.expression(22);
				}
				break;
			case 5:
				{
				this.state = 357;
				this.lvalue();
				this.state = 358;
				this.match(LSLParser.StarAssign);
				this.state = 359;
				this.expression(21);
				}
				break;
			case 6:
				{
				this.state = 361;
				this.lvalue();
				this.state = 362;
				this.match(LSLParser.DivAssign);
				this.state = 363;
				this.expression(20);
				}
				break;
			case 7:
				{
				this.state = 365;
				this.lvalue();
				this.state = 366;
				this.match(LSLParser.ModAssign);
				this.state = 367;
				this.expression(19);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 427;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 425;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 371;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 372;
						this.match(LSLParser.EQ);
						this.state = 373;
						this.expression(19);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 374;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 375;
						this.match(LSLParser.NEQ);
						this.state = 376;
						this.expression(18);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 377;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 378;
						this.match(LSLParser.LessEqual);
						this.state = 379;
						this.expression(17);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 380;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 381;
						this.match(LSLParser.GreaterEqual);
						this.state = 382;
						this.expression(16);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 383;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 384;
						this.match(LSLParser.Less);
						this.state = 385;
						this.expression(15);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 386;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 387;
						this.match(LSLParser.Greater);
						this.state = 388;
						this.expression(14);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 389;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 390;
						this.match(LSLParser.Plus);
						this.state = 391;
						this.expression(13);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 392;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 393;
						this.match(LSLParser.Minus);
						this.state = 394;
						this.expression(12);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 395;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 396;
						this.match(LSLParser.Asterisk);
						this.state = 397;
						this.expression(11);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 398;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 399;
						this.match(LSLParser.Slash);
						this.state = 400;
						this.expression(10);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 401;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 402;
						this.match(LSLParser.Mod);
						this.state = 403;
						this.expression(9);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 404;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 405;
						this.match(LSLParser.And);
						this.state = 406;
						this.expression(8);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 407;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 408;
						this.match(LSLParser.Or);
						this.state = 409;
						this.expression(7);
						}
						break;
					case 14:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 410;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 411;
						this.match(LSLParser.Caret);
						this.state = 412;
						this.expression(6);
						}
						break;
					case 15:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 413;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 414;
						this.match(LSLParser.AndAnd);
						this.state = 415;
						this.expression(5);
						}
						break;
					case 16:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 416;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 417;
						this.match(LSLParser.OrOr);
						this.state = 418;
						this.expression(4);
						}
						break;
					case 17:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 419;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 420;
						this.match(LSLParser.LeftShift);
						this.state = 421;
						this.expression(3);
						}
						break;
					case 18:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 422;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 423;
						this.match(LSLParser.RightShift);
						this.state = 424;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 429;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryexpression(): UnaryexpressionContext {
		let localctx: UnaryexpressionContext = new UnaryexpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, LSLParser.RULE_unaryexpression);
		try {
			this.state = 446;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 430;
				this.match(LSLParser.Minus);
				this.state = 431;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 432;
				this.match(LSLParser.Not);
				this.state = 433;
				this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 434;
				this.match(LSLParser.Tilde);
				this.state = 435;
				this.expression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 436;
				this.match(LSLParser.PlusPlus);
				this.state = 437;
				this.lvalue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 438;
				this.match(LSLParser.MinusMinus);
				this.state = 439;
				this.lvalue();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 440;
				this.typecast();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 441;
				this.unarypostfixexpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 442;
				this.match(LSLParser.LeftParen);
				this.state = 443;
				this.expression(0);
				this.state = 444;
				this.match(LSLParser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typecast(): TypecastContext {
		let localctx: TypecastContext = new TypecastContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, LSLParser.RULE_typecast);
		try {
			this.state = 470;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 448;
				this.match(LSLParser.LeftParen);
				this.state = 449;
				this.typename();
				this.state = 450;
				this.match(LSLParser.RightParen);
				this.state = 451;
				this.lvalue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 453;
				this.match(LSLParser.LeftParen);
				this.state = 454;
				this.typename();
				this.state = 455;
				this.match(LSLParser.RightParen);
				this.state = 456;
				this.constant();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 458;
				this.match(LSLParser.LeftParen);
				this.state = 459;
				this.typename();
				this.state = 460;
				this.match(LSLParser.RightParen);
				this.state = 461;
				this.unarypostfixexpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 463;
				this.match(LSLParser.LeftParen);
				this.state = 464;
				this.typename();
				this.state = 465;
				this.match(LSLParser.RightParen);
				this.state = 466;
				this.match(LSLParser.LeftParen);
				this.state = 467;
				this.expression(0);
				this.state = 468;
				this.match(LSLParser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unarypostfixexpression(): UnarypostfixexpressionContext {
		let localctx: UnarypostfixexpressionContext = new UnarypostfixexpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, LSLParser.RULE_unarypostfixexpression);
		let _la: number;
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 472;
				this.vector_initializer();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 473;
				this.quaternion_initializer();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 474;
				this.list_initializer();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 475;
				this.lvalue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 476;
				this.lvalue();
				this.state = 477;
				this.match(LSLParser.PlusPlus);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 479;
				this.lvalue();
				this.state = 480;
				this.match(LSLParser.MinusMinus);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 482;
				this.identifier();
				this.state = 483;
				this.match(LSLParser.LeftParen);
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 571737085) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1064515) !== 0)) {
					{
					this.state = 484;
					this.funcexpressionlist();
					}
				}

				this.state = 487;
				this.match(LSLParser.RightParen);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 489;
				this.match(LSLParser.Print);
				this.state = 490;
				this.match(LSLParser.LeftParen);
				this.state = 491;
				this.expression(0);
				this.state = 492;
				this.match(LSLParser.RightParen);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 494;
				this.constant();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public vector_initializer(): Vector_initializerContext {
		let localctx: Vector_initializerContext = new Vector_initializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, LSLParser.RULE_vector_initializer);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 497;
				this.match(LSLParser.Less);
				this.state = 498;
				this.expression(0);
				this.state = 499;
				this.match(LSLParser.Comma);
				this.state = 500;
				this.expression(0);
				this.state = 501;
				this.match(LSLParser.Comma);
				this.state = 502;
				this.expression(0);
				this.state = 503;
				this.match(LSLParser.Greater);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 505;
				this.match(LSLParser.ZeroVector);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 506;
				this.match(LSLParser.TouchInvalidVector);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 507;
				this.match(LSLParser.TouchInvalidTexcoord);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quaternion_initializer(): Quaternion_initializerContext {
		let localctx: Quaternion_initializerContext = new Quaternion_initializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, LSLParser.RULE_quaternion_initializer);
		try {
			this.state = 521;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 510;
				this.match(LSLParser.Less);
				this.state = 511;
				this.expression(0);
				this.state = 512;
				this.match(LSLParser.Comma);
				this.state = 513;
				this.expression(0);
				this.state = 514;
				this.match(LSLParser.Comma);
				this.state = 515;
				this.expression(0);
				this.state = 516;
				this.match(LSLParser.Comma);
				this.state = 517;
				this.expression(0);
				this.state = 518;
				this.match(LSLParser.Greater);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 520;
				this.match(LSLParser.ZeroRotation);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list_initializer(): List_initializerContext {
		let localctx: List_initializerContext = new List_initializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, LSLParser.RULE_list_initializer);
		try {
			this.state = 529;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 523;
				this.match(LSLParser.LeftBracket);
				this.state = 524;
				this.listexpressionlist();
				this.state = 525;
				this.match(LSLParser.RightBracket);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 527;
				this.match(LSLParser.LeftBracket);
				this.state = 528;
				this.match(LSLParser.RightBracket);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lvalue(): LvalueContext {
		let localctx: LvalueContext = new LvalueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, LSLParser.RULE_lvalue);
		try {
			this.state = 536;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 531;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 532;
				this.identifier();
				this.state = 533;
				this.match(LSLParser.Dot);
				this.state = 534;
				this.match(LSLParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, LSLParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 538;
			this.match(LSLParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 32:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 18);
		case 1:
			return this.precpred(this._ctx, 17);
		case 2:
			return this.precpred(this._ctx, 16);
		case 3:
			return this.precpred(this._ctx, 15);
		case 4:
			return this.precpred(this._ctx, 14);
		case 5:
			return this.precpred(this._ctx, 13);
		case 6:
			return this.precpred(this._ctx, 12);
		case 7:
			return this.precpred(this._ctx, 11);
		case 8:
			return this.precpred(this._ctx, 10);
		case 9:
			return this.precpred(this._ctx, 9);
		case 10:
			return this.precpred(this._ctx, 8);
		case 11:
			return this.precpred(this._ctx, 7);
		case 12:
			return this.precpred(this._ctx, 6);
		case 13:
			return this.precpred(this._ctx, 5);
		case 14:
			return this.precpred(this._ctx, 4);
		case 15:
			return this.precpred(this._ctx, 3);
		case 16:
			return this.precpred(this._ctx, 2);
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,76,541,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,1,0,5,0,84,8,0,10,0,12,0,87,9,0,1,0,1,0,1,1,1,1,1,1,3,
	1,94,8,1,1,2,1,2,1,2,1,2,3,2,100,8,2,1,3,1,3,1,4,1,4,5,4,106,8,4,10,4,12,
	4,109,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,
	7,126,8,7,1,7,1,7,1,8,1,8,3,8,132,8,8,1,9,1,9,1,9,3,9,137,8,9,1,10,1,10,
	1,10,3,10,142,8,10,1,11,1,11,1,12,1,12,1,12,1,12,3,12,150,8,12,1,13,1,13,
	1,14,1,14,3,14,156,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,3,15,169,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
	1,16,3,16,182,8,16,1,17,1,17,3,17,186,8,17,1,17,1,17,1,18,1,18,1,18,5,18,
	193,8,18,10,18,12,18,196,9,18,1,19,1,19,1,20,3,20,201,8,20,1,20,1,20,1,
	20,3,20,206,8,20,1,20,1,20,1,20,1,21,1,21,1,21,5,21,214,8,21,10,21,12,21,
	217,9,21,1,22,1,22,1,22,1,23,5,23,223,8,23,10,23,12,23,226,9,23,1,24,1,
	24,1,24,3,24,231,8,24,1,24,1,24,1,24,1,25,1,25,3,25,238,8,25,1,25,1,25,
	1,26,4,26,243,8,26,11,26,12,26,244,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,293,8,27,1,27,1,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,3,27,316,8,27,1,28,1,28,1,28,5,28,321,8,28,10,28,
	12,28,324,9,28,1,29,1,29,1,29,5,29,329,8,29,10,29,12,29,332,9,29,1,30,1,
	30,1,31,1,31,1,31,5,31,339,8,31,10,31,12,31,342,9,31,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,370,8,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,426,8,32,10,32,12,32,429,9,32,1,33,
	1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,
	33,3,33,447,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
	1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,471,8,34,1,
	35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,486,
	8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,496,8,35,1,36,1,36,1,
	36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,509,8,36,1,37,1,37,1,37,
	1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,522,8,37,1,38,1,38,1,38,1,
	38,1,38,1,38,3,38,530,8,38,1,39,1,39,1,39,1,39,1,39,3,39,537,8,39,1,40,
	1,40,1,40,0,1,64,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,0,2,1,
	0,1,8,2,0,65,66,69,69,594,0,85,1,0,0,0,2,93,1,0,0,0,4,95,1,0,0,0,6,101,
	1,0,0,0,8,103,1,0,0,0,10,110,1,0,0,0,12,115,1,0,0,0,14,121,1,0,0,0,16,131,
	1,0,0,0,18,136,1,0,0,0,20,141,1,0,0,0,22,143,1,0,0,0,24,149,1,0,0,0,26,
	151,1,0,0,0,28,155,1,0,0,0,30,168,1,0,0,0,32,181,1,0,0,0,34,183,1,0,0,0,
	36,189,1,0,0,0,38,197,1,0,0,0,40,200,1,0,0,0,42,210,1,0,0,0,44,218,1,0,
	0,0,46,224,1,0,0,0,48,227,1,0,0,0,50,235,1,0,0,0,52,242,1,0,0,0,54,315,
	1,0,0,0,56,317,1,0,0,0,58,325,1,0,0,0,60,333,1,0,0,0,62,335,1,0,0,0,64,
	369,1,0,0,0,66,446,1,0,0,0,68,470,1,0,0,0,70,495,1,0,0,0,72,508,1,0,0,0,
	74,521,1,0,0,0,76,529,1,0,0,0,78,536,1,0,0,0,80,538,1,0,0,0,82,84,3,2,1,
	0,83,82,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,
	87,85,1,0,0,0,88,89,5,0,0,1,89,1,1,0,0,0,90,94,3,40,20,0,91,94,3,8,4,0,
	92,94,3,52,26,0,93,90,1,0,0,0,93,91,1,0,0,0,93,92,1,0,0,0,94,3,1,0,0,0,
	95,96,3,6,3,0,96,99,5,76,0,0,97,98,5,36,0,0,98,100,3,64,32,0,99,97,1,0,
	0,0,99,100,1,0,0,0,100,5,1,0,0,0,101,102,7,0,0,0,102,7,1,0,0,0,103,107,
	3,10,5,0,104,106,3,12,6,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,
	0,107,108,1,0,0,0,108,9,1,0,0,0,109,107,1,0,0,0,110,111,5,9,0,0,111,112,
	5,41,0,0,112,113,3,46,23,0,113,114,5,42,0,0,114,11,1,0,0,0,115,116,5,10,
	0,0,116,117,5,76,0,0,117,118,5,41,0,0,118,119,3,46,23,0,119,120,5,42,0,
	0,120,13,1,0,0,0,121,122,3,6,3,0,122,125,3,80,40,0,123,124,5,36,0,0,124,
	126,3,16,8,0,125,123,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,128,5,
	34,0,0,128,15,1,0,0,0,129,132,3,18,9,0,130,132,3,34,17,0,131,129,1,0,0,
	0,131,130,1,0,0,0,132,17,1,0,0,0,133,137,5,76,0,0,134,137,3,20,10,0,135,
	137,3,28,14,0,136,133,1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,19,1,
	0,0,0,138,142,3,24,12,0,139,142,3,22,11,0,140,142,5,62,0,0,141,138,1,0,
	0,0,141,139,1,0,0,0,141,140,1,0,0,0,142,21,1,0,0,0,143,144,5,68,0,0,144,
	23,1,0,0,0,145,150,5,67,0,0,146,150,3,26,13,0,147,150,5,21,0,0,148,150,
	5,22,0,0,149,145,1,0,0,0,149,146,1,0,0,0,149,147,1,0,0,0,149,148,1,0,0,
	0,150,25,1,0,0,0,151,152,7,1,0,0,152,27,1,0,0,0,153,156,3,30,15,0,154,156,
	3,32,16,0,155,153,1,0,0,0,155,154,1,0,0,0,156,29,1,0,0,0,157,158,5,48,0,
	0,158,159,3,16,8,0,159,160,5,35,0,0,160,161,3,16,8,0,161,162,5,35,0,0,162,
	163,3,16,8,0,163,164,5,47,0,0,164,169,1,0,0,0,165,169,5,23,0,0,166,169,
	5,25,0,0,167,169,5,26,0,0,168,157,1,0,0,0,168,165,1,0,0,0,168,166,1,0,0,
	0,168,167,1,0,0,0,169,31,1,0,0,0,170,171,5,48,0,0,171,172,3,16,8,0,172,
	173,5,35,0,0,173,174,3,16,8,0,174,175,5,35,0,0,175,176,3,16,8,0,176,177,
	5,35,0,0,177,178,3,16,8,0,178,179,5,47,0,0,179,182,1,0,0,0,180,182,5,24,
	0,0,181,170,1,0,0,0,181,180,1,0,0,0,182,33,1,0,0,0,183,185,5,39,0,0,184,
	186,3,36,18,0,185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,188,5,
	40,0,0,188,35,1,0,0,0,189,194,3,38,19,0,190,191,5,35,0,0,191,193,3,38,19,
	0,192,190,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,37,
	1,0,0,0,196,194,1,0,0,0,197,198,3,18,9,0,198,39,1,0,0,0,199,201,3,6,3,0,
	200,199,1,0,0,0,200,201,1,0,0,0,201,202,1,0,0,0,202,203,3,80,40,0,203,205,
	5,37,0,0,204,206,3,42,21,0,205,204,1,0,0,0,205,206,1,0,0,0,206,207,1,0,
	0,0,207,208,5,38,0,0,208,209,3,50,25,0,209,41,1,0,0,0,210,215,3,44,22,0,
	211,212,5,35,0,0,212,214,3,44,22,0,213,211,1,0,0,0,214,217,1,0,0,0,215,
	213,1,0,0,0,215,216,1,0,0,0,216,43,1,0,0,0,217,215,1,0,0,0,218,219,3,6,
	3,0,219,220,3,80,40,0,220,45,1,0,0,0,221,223,3,48,24,0,222,221,1,0,0,0,
	223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,225,47,1,0,0,0,226,224,
	1,0,0,0,227,228,5,76,0,0,228,230,5,37,0,0,229,231,3,42,21,0,230,229,1,0,
	0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,233,5,38,0,0,233,234,3,50,25,0,
	234,49,1,0,0,0,235,237,5,41,0,0,236,238,3,52,26,0,237,236,1,0,0,0,237,238,
	1,0,0,0,238,239,1,0,0,0,239,240,5,42,0,0,240,51,1,0,0,0,241,243,3,54,27,
	0,242,241,1,0,0,0,243,244,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,53,
	1,0,0,0,246,316,5,34,0,0,247,248,5,10,0,0,248,249,3,80,40,0,249,250,5,34,
	0,0,250,316,1,0,0,0,251,252,5,10,0,0,252,253,5,9,0,0,253,316,5,34,0,0,254,
	255,5,12,0,0,255,256,3,80,40,0,256,257,5,34,0,0,257,316,1,0,0,0,258,259,
	5,46,0,0,259,260,3,80,40,0,260,261,5,34,0,0,261,316,1,0,0,0,262,263,5,13,
	0,0,263,264,3,64,32,0,264,265,5,34,0,0,265,316,1,0,0,0,266,267,5,13,0,0,
	267,316,5,34,0,0,268,269,3,64,32,0,269,270,5,34,0,0,270,316,1,0,0,0,271,
	272,3,4,2,0,272,273,5,34,0,0,273,316,1,0,0,0,274,316,3,50,25,0,275,276,
	5,14,0,0,276,277,5,37,0,0,277,278,3,64,32,0,278,279,5,38,0,0,279,280,3,
	54,27,0,280,316,1,0,0,0,281,282,5,14,0,0,282,283,5,37,0,0,283,284,3,64,
	32,0,284,285,5,38,0,0,285,286,3,54,27,0,286,287,5,15,0,0,287,288,3,54,27,
	0,288,316,1,0,0,0,289,290,5,16,0,0,290,292,5,37,0,0,291,293,3,56,28,0,292,
	291,1,0,0,0,292,293,1,0,0,0,293,294,1,0,0,0,294,295,5,34,0,0,295,296,3,
	64,32,0,296,297,5,34,0,0,297,298,3,56,28,0,298,299,5,38,0,0,299,300,3,54,
	27,0,300,316,1,0,0,0,301,302,5,17,0,0,302,303,3,54,27,0,303,304,5,18,0,
	0,304,305,5,37,0,0,305,306,3,64,32,0,306,307,5,38,0,0,307,308,5,34,0,0,
	308,316,1,0,0,0,309,310,5,18,0,0,310,311,5,37,0,0,311,312,3,64,32,0,312,
	313,5,38,0,0,313,314,3,54,27,0,314,316,1,0,0,0,315,246,1,0,0,0,315,247,
	1,0,0,0,315,251,1,0,0,0,315,254,1,0,0,0,315,258,1,0,0,0,315,262,1,0,0,0,
	315,266,1,0,0,0,315,268,1,0,0,0,315,271,1,0,0,0,315,274,1,0,0,0,315,275,
	1,0,0,0,315,281,1,0,0,0,315,289,1,0,0,0,315,301,1,0,0,0,315,309,1,0,0,0,
	316,55,1,0,0,0,317,322,3,64,32,0,318,319,5,35,0,0,319,321,3,64,32,0,320,
	318,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,323,57,1,0,
	0,0,324,322,1,0,0,0,325,330,3,64,32,0,326,327,5,35,0,0,327,329,3,64,32,
	0,328,326,1,0,0,0,329,332,1,0,0,0,330,328,1,0,0,0,330,331,1,0,0,0,331,59,
	1,0,0,0,332,330,1,0,0,0,333,334,3,62,31,0,334,61,1,0,0,0,335,340,3,64,32,
	0,336,337,5,35,0,0,337,339,3,64,32,0,338,336,1,0,0,0,339,342,1,0,0,0,340,
	338,1,0,0,0,340,341,1,0,0,0,341,63,1,0,0,0,342,340,1,0,0,0,343,344,6,32,
	-1,0,344,370,3,66,33,0,345,346,3,78,39,0,346,347,5,36,0,0,347,348,3,64,
	32,24,348,370,1,0,0,0,349,350,3,78,39,0,350,351,5,29,0,0,351,352,3,64,32,
	23,352,370,1,0,0,0,353,354,3,78,39,0,354,355,5,30,0,0,355,356,3,64,32,22,
	356,370,1,0,0,0,357,358,3,78,39,0,358,359,5,31,0,0,359,360,3,64,32,21,360,
	370,1,0,0,0,361,362,3,78,39,0,362,363,5,32,0,0,363,364,3,64,32,20,364,370,
	1,0,0,0,365,366,3,78,39,0,366,367,5,33,0,0,367,368,3,64,32,19,368,370,1,
	0,0,0,369,343,1,0,0,0,369,345,1,0,0,0,369,349,1,0,0,0,369,353,1,0,0,0,369,
	357,1,0,0,0,369,361,1,0,0,0,369,365,1,0,0,0,370,427,1,0,0,0,371,372,10,
	18,0,0,372,373,5,49,0,0,373,426,3,64,32,19,374,375,10,17,0,0,375,376,5,
	50,0,0,376,426,3,64,32,18,377,378,10,16,0,0,378,379,5,52,0,0,379,426,3,
	64,32,17,380,381,10,15,0,0,381,382,5,51,0,0,382,426,3,64,32,16,383,384,
	10,14,0,0,384,385,5,48,0,0,385,426,3,64,32,15,386,387,10,13,0,0,387,388,
	5,47,0,0,388,426,3,64,32,14,389,390,10,12,0,0,390,391,5,43,0,0,391,426,
	3,64,32,13,392,393,10,11,0,0,393,394,5,44,0,0,394,426,3,64,32,12,395,396,
	10,10,0,0,396,397,5,45,0,0,397,426,3,64,32,11,398,399,10,9,0,0,399,400,
	5,63,0,0,400,426,3,64,32,10,401,402,10,8,0,0,402,403,5,64,0,0,403,426,3,
	64,32,9,404,405,10,7,0,0,405,406,5,53,0,0,406,426,3,64,32,8,407,408,10,
	6,0,0,408,409,5,54,0,0,409,426,3,64,32,7,410,411,10,5,0,0,411,412,5,55,
	0,0,412,426,3,64,32,6,413,414,10,4,0,0,414,415,5,58,0,0,415,426,3,64,32,
	5,416,417,10,3,0,0,417,418,5,59,0,0,418,426,3,64,32,4,419,420,10,2,0,0,
	420,421,5,60,0,0,421,426,3,64,32,3,422,423,10,1,0,0,423,424,5,61,0,0,424,
	426,3,64,32,2,425,371,1,0,0,0,425,374,1,0,0,0,425,377,1,0,0,0,425,380,1,
	0,0,0,425,383,1,0,0,0,425,386,1,0,0,0,425,389,1,0,0,0,425,392,1,0,0,0,425,
	395,1,0,0,0,425,398,1,0,0,0,425,401,1,0,0,0,425,404,1,0,0,0,425,407,1,0,
	0,0,425,410,1,0,0,0,425,413,1,0,0,0,425,416,1,0,0,0,425,419,1,0,0,0,425,
	422,1,0,0,0,426,429,1,0,0,0,427,425,1,0,0,0,427,428,1,0,0,0,428,65,1,0,
	0,0,429,427,1,0,0,0,430,431,5,44,0,0,431,447,3,64,32,0,432,433,5,57,0,0,
	433,447,3,64,32,0,434,435,5,56,0,0,435,447,3,64,32,0,436,437,5,27,0,0,437,
	447,3,78,39,0,438,439,5,28,0,0,439,447,3,78,39,0,440,447,3,68,34,0,441,
	447,3,70,35,0,442,443,5,37,0,0,443,444,3,64,32,0,444,445,5,38,0,0,445,447,
	1,0,0,0,446,430,1,0,0,0,446,432,1,0,0,0,446,434,1,0,0,0,446,436,1,0,0,0,
	446,438,1,0,0,0,446,440,1,0,0,0,446,441,1,0,0,0,446,442,1,0,0,0,447,67,
	1,0,0,0,448,449,5,37,0,0,449,450,3,6,3,0,450,451,5,38,0,0,451,452,3,78,
	39,0,452,471,1,0,0,0,453,454,5,37,0,0,454,455,3,6,3,0,455,456,5,38,0,0,
	456,457,3,20,10,0,457,471,1,0,0,0,458,459,5,37,0,0,459,460,3,6,3,0,460,
	461,5,38,0,0,461,462,3,70,35,0,462,471,1,0,0,0,463,464,5,37,0,0,464,465,
	3,6,3,0,465,466,5,38,0,0,466,467,5,37,0,0,467,468,3,64,32,0,468,469,5,38,
	0,0,469,471,1,0,0,0,470,448,1,0,0,0,470,453,1,0,0,0,470,458,1,0,0,0,470,
	463,1,0,0,0,471,69,1,0,0,0,472,496,3,72,36,0,473,496,3,74,37,0,474,496,
	3,76,38,0,475,496,3,78,39,0,476,477,3,78,39,0,477,478,5,27,0,0,478,496,
	1,0,0,0,479,480,3,78,39,0,480,481,5,28,0,0,481,496,1,0,0,0,482,483,3,80,
	40,0,483,485,5,37,0,0,484,486,3,58,29,0,485,484,1,0,0,0,485,486,1,0,0,0,
	486,487,1,0,0,0,487,488,5,38,0,0,488,496,1,0,0,0,489,490,5,19,0,0,490,491,
	5,37,0,0,491,492,3,64,32,0,492,493,5,38,0,0,493,496,1,0,0,0,494,496,3,20,
	10,0,495,472,1,0,0,0,495,473,1,0,0,0,495,474,1,0,0,0,495,475,1,0,0,0,495,
	476,1,0,0,0,495,479,1,0,0,0,495,482,1,0,0,0,495,489,1,0,0,0,495,494,1,0,
	0,0,496,71,1,0,0,0,497,498,5,48,0,0,498,499,3,64,32,0,499,500,5,35,0,0,
	500,501,3,64,32,0,501,502,5,35,0,0,502,503,3,64,32,0,503,504,5,47,0,0,504,
	509,1,0,0,0,505,509,5,23,0,0,506,509,5,25,0,0,507,509,5,26,0,0,508,497,
	1,0,0,0,508,505,1,0,0,0,508,506,1,0,0,0,508,507,1,0,0,0,509,73,1,0,0,0,
	510,511,5,48,0,0,511,512,3,64,32,0,512,513,5,35,0,0,513,514,3,64,32,0,514,
	515,5,35,0,0,515,516,3,64,32,0,516,517,5,35,0,0,517,518,3,64,32,0,518,519,
	5,47,0,0,519,522,1,0,0,0,520,522,5,24,0,0,521,510,1,0,0,0,521,520,1,0,0,
	0,522,75,1,0,0,0,523,524,5,39,0,0,524,525,3,60,30,0,525,526,5,40,0,0,526,
	530,1,0,0,0,527,528,5,39,0,0,528,530,5,40,0,0,529,523,1,0,0,0,529,527,1,
	0,0,0,530,77,1,0,0,0,531,537,3,80,40,0,532,533,3,80,40,0,533,534,5,20,0,
	0,534,535,5,76,0,0,535,537,1,0,0,0,536,531,1,0,0,0,536,532,1,0,0,0,537,
	79,1,0,0,0,538,539,5,76,0,0,539,81,1,0,0,0,37,85,93,99,107,125,131,136,
	141,149,155,168,181,185,194,200,205,215,224,230,237,244,292,315,322,330,
	340,369,425,427,446,470,485,495,508,521,529,536];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LSLParser.__ATN) {
			LSLParser.__ATN = new ATNDeserializer().deserialize(LSLParser._serializedATN);
		}

		return LSLParser.__ATN;
	}


	static DecisionsToDFA = LSLParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Lscript_programContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(LSLParser.EOF, 0);
	}
	public global_list(): GlobalContext[] {
		return this.getTypedRuleContexts(GlobalContext) as GlobalContext[];
	}
	public global(i: number): GlobalContext {
		return this.getTypedRuleContext(GlobalContext, i) as GlobalContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_lscript_program;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterLscript_program) {
	 		listener.enterLscript_program(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitLscript_program) {
	 		listener.exitLscript_program(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitLscript_program) {
			return visitor.visitLscript_program(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public global_function(): Global_functionContext {
		return this.getTypedRuleContext(Global_functionContext, 0) as Global_functionContext;
	}
	public llstates(): LlstatesContext {
		return this.getTypedRuleContext(LlstatesContext, 0) as LlstatesContext;
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_global;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterGlobal) {
	 		listener.enterGlobal(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitGlobal) {
	 		listener.exitGlobal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitGlobal) {
			return visitor.visitGlobal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typename(): TypenameContext {
		return this.getTypedRuleContext(TypenameContext, 0) as TypenameContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(LSLParser.Identifier, 0);
	}
	public Assign(): TerminalNode {
		return this.getToken(LSLParser.Assign, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_declaration;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypenameContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Integer(): TerminalNode {
		return this.getToken(LSLParser.Integer, 0);
	}
	public Float(): TerminalNode {
		return this.getToken(LSLParser.Float, 0);
	}
	public String(): TerminalNode {
		return this.getToken(LSLParser.String, 0);
	}
	public Key(): TerminalNode {
		return this.getToken(LSLParser.Key, 0);
	}
	public Vector(): TerminalNode {
		return this.getToken(LSLParser.Vector, 0);
	}
	public Quaternion(): TerminalNode {
		return this.getToken(LSLParser.Quaternion, 0);
	}
	public Rotation(): TerminalNode {
		return this.getToken(LSLParser.Rotation, 0);
	}
	public List(): TerminalNode {
		return this.getToken(LSLParser.List, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_typename;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterTypename) {
	 		listener.enterTypename(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitTypename) {
	 		listener.exitTypename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitTypename) {
			return visitor.visitTypename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LlstatesContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public default_state(): Default_stateContext {
		return this.getTypedRuleContext(Default_stateContext, 0) as Default_stateContext;
	}
	public llstate_list(): LlstateContext[] {
		return this.getTypedRuleContexts(LlstateContext) as LlstateContext[];
	}
	public llstate(i: number): LlstateContext {
		return this.getTypedRuleContext(LlstateContext, i) as LlstateContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_llstates;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterLlstates) {
	 		listener.enterLlstates(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitLlstates) {
	 		listener.exitLlstates(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitLlstates) {
			return visitor.visitLlstates(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Default_stateContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StateDefault(): TerminalNode {
		return this.getToken(LSLParser.StateDefault, 0);
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(LSLParser.LeftBrace, 0);
	}
	public state_body(): State_bodyContext {
		return this.getTypedRuleContext(State_bodyContext, 0) as State_bodyContext;
	}
	public RightBrace(): TerminalNode {
		return this.getToken(LSLParser.RightBrace, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_default_state;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterDefault_state) {
	 		listener.enterDefault_state(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitDefault_state) {
	 		listener.exitDefault_state(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitDefault_state) {
			return visitor.visitDefault_state(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LlstateContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public State(): TerminalNode {
		return this.getToken(LSLParser.State, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(LSLParser.Identifier, 0);
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(LSLParser.LeftBrace, 0);
	}
	public state_body(): State_bodyContext {
		return this.getTypedRuleContext(State_bodyContext, 0) as State_bodyContext;
	}
	public RightBrace(): TerminalNode {
		return this.getToken(LSLParser.RightBrace, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_llstate;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterLlstate) {
	 		listener.enterLlstate(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitLlstate) {
	 		listener.exitLlstate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitLlstate) {
			return visitor.visitLlstate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_variableContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typename(): TypenameContext {
		return this.getTypedRuleContext(TypenameContext, 0) as TypenameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(LSLParser.Semi, 0);
	}
	public Assign(): TerminalNode {
		return this.getToken(LSLParser.Assign, 0);
	}
	public simple_assignable(): Simple_assignableContext {
		return this.getTypedRuleContext(Simple_assignableContext, 0) as Simple_assignableContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_global_variable;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterGlobal_variable) {
	 		listener.enterGlobal_variable(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitGlobal_variable) {
	 		listener.exitGlobal_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitGlobal_variable) {
			return visitor.visitGlobal_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_assignableContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_assignable_no_list(): Simple_assignable_no_listContext {
		return this.getTypedRuleContext(Simple_assignable_no_listContext, 0) as Simple_assignable_no_listContext;
	}
	public list_constant(): List_constantContext {
		return this.getTypedRuleContext(List_constantContext, 0) as List_constantContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_simple_assignable;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterSimple_assignable) {
	 		listener.enterSimple_assignable(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitSimple_assignable) {
	 		listener.exitSimple_assignable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitSimple_assignable) {
			return visitor.visitSimple_assignable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_assignable_no_listContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(LSLParser.Identifier, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public special_constant(): Special_constantContext {
		return this.getTypedRuleContext(Special_constantContext, 0) as Special_constantContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_simple_assignable_no_list;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterSimple_assignable_no_list) {
	 		listener.enterSimple_assignable_no_list(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitSimple_assignable_no_list) {
	 		listener.exitSimple_assignable_no_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitSimple_assignable_no_list) {
			return visitor.visitSimple_assignable_no_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integer_constant(): Integer_constantContext {
		return this.getTypedRuleContext(Integer_constantContext, 0) as Integer_constantContext;
	}
	public fp_constant(): Fp_constantContext {
		return this.getTypedRuleContext(Fp_constantContext, 0) as Fp_constantContext;
	}
	public StringConstant(): TerminalNode {
		return this.getToken(LSLParser.StringConstant, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_constant;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterConstant) {
	 		listener.enterConstant(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitConstant) {
	 		listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fp_constantContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FloatingConstant(): TerminalNode {
		return this.getToken(LSLParser.FloatingConstant, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_fp_constant;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterFp_constant) {
	 		listener.enterFp_constant(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitFp_constant) {
	 		listener.exitFp_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitFp_constant) {
			return visitor.visitFp_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integer_constantContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(LSLParser.StringLiteral, 0);
	}
	public numericLiteral(): NumericLiteralContext {
		return this.getTypedRuleContext(NumericLiteralContext, 0) as NumericLiteralContext;
	}
	public IntegerTrue(): TerminalNode {
		return this.getToken(LSLParser.IntegerTrue, 0);
	}
	public IntegerFalse(): TerminalNode {
		return this.getToken(LSLParser.IntegerFalse, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_integer_constant;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterInteger_constant) {
	 		listener.enterInteger_constant(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitInteger_constant) {
	 		listener.exitInteger_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitInteger_constant) {
			return visitor.visitInteger_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DigitSequence(): TerminalNode {
		return this.getToken(LSLParser.DigitSequence, 0);
	}
	public HexIntegerLiteral(): TerminalNode {
		return this.getToken(LSLParser.HexIntegerLiteral, 0);
	}
	public BinaryIntegerLiteral(): TerminalNode {
		return this.getToken(LSLParser.BinaryIntegerLiteral, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_numericLiteral;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterNumericLiteral) {
	 		listener.enterNumericLiteral(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitNumericLiteral) {
	 		listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Special_constantContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public vector_constant(): Vector_constantContext {
		return this.getTypedRuleContext(Vector_constantContext, 0) as Vector_constantContext;
	}
	public quaternion_constant(): Quaternion_constantContext {
		return this.getTypedRuleContext(Quaternion_constantContext, 0) as Quaternion_constantContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_special_constant;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterSpecial_constant) {
	 		listener.enterSpecial_constant(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitSpecial_constant) {
	 		listener.exitSpecial_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitSpecial_constant) {
			return visitor.visitSpecial_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Vector_constantContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Less(): TerminalNode {
		return this.getToken(LSLParser.Less, 0);
	}
	public simple_assignable_list(): Simple_assignableContext[] {
		return this.getTypedRuleContexts(Simple_assignableContext) as Simple_assignableContext[];
	}
	public simple_assignable(i: number): Simple_assignableContext {
		return this.getTypedRuleContext(Simple_assignableContext, i) as Simple_assignableContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
	public Greater(): TerminalNode {
		return this.getToken(LSLParser.Greater, 0);
	}
	public ZeroVector(): TerminalNode {
		return this.getToken(LSLParser.ZeroVector, 0);
	}
	public TouchInvalidVector(): TerminalNode {
		return this.getToken(LSLParser.TouchInvalidVector, 0);
	}
	public TouchInvalidTexcoord(): TerminalNode {
		return this.getToken(LSLParser.TouchInvalidTexcoord, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_vector_constant;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterVector_constant) {
	 		listener.enterVector_constant(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitVector_constant) {
	 		listener.exitVector_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitVector_constant) {
			return visitor.visitVector_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quaternion_constantContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Less(): TerminalNode {
		return this.getToken(LSLParser.Less, 0);
	}
	public simple_assignable_list(): Simple_assignableContext[] {
		return this.getTypedRuleContexts(Simple_assignableContext) as Simple_assignableContext[];
	}
	public simple_assignable(i: number): Simple_assignableContext {
		return this.getTypedRuleContext(Simple_assignableContext, i) as Simple_assignableContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
	public Greater(): TerminalNode {
		return this.getToken(LSLParser.Greater, 0);
	}
	public ZeroRotation(): TerminalNode {
		return this.getToken(LSLParser.ZeroRotation, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_quaternion_constant;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterQuaternion_constant) {
	 		listener.enterQuaternion_constant(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitQuaternion_constant) {
	 		listener.exitQuaternion_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitQuaternion_constant) {
			return visitor.visitQuaternion_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_constantContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(LSLParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(LSLParser.RightBracket, 0);
	}
	public list_entries(): List_entriesContext {
		return this.getTypedRuleContext(List_entriesContext, 0) as List_entriesContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_list_constant;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterList_constant) {
	 		listener.enterList_constant(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitList_constant) {
	 		listener.exitList_constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitList_constant) {
			return visitor.visitList_constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_entriesContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public list_entry_list(): List_entryContext[] {
		return this.getTypedRuleContexts(List_entryContext) as List_entryContext[];
	}
	public list_entry(i: number): List_entryContext {
		return this.getTypedRuleContext(List_entryContext, i) as List_entryContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_list_entries;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterList_entries) {
	 		listener.enterList_entries(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitList_entries) {
	 		listener.exitList_entries(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitList_entries) {
			return visitor.visitList_entries(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_entryContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_assignable_no_list(): Simple_assignable_no_listContext {
		return this.getTypedRuleContext(Simple_assignable_no_listContext, 0) as Simple_assignable_no_listContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_list_entry;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterList_entry) {
	 		listener.enterList_entry(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitList_entry) {
	 		listener.exitList_entry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitList_entry) {
			return visitor.visitList_entry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_functionContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(LSLParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(LSLParser.RightParen, 0);
	}
	public compound_statement(): Compound_statementContext {
		return this.getTypedRuleContext(Compound_statementContext, 0) as Compound_statementContext;
	}
	public typename(): TypenameContext {
		return this.getTypedRuleContext(TypenameContext, 0) as TypenameContext;
	}
	public function_parameters(): Function_parametersContext {
		return this.getTypedRuleContext(Function_parametersContext, 0) as Function_parametersContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_global_function;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterGlobal_function) {
	 		listener.enterGlobal_function(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitGlobal_function) {
	 		listener.exitGlobal_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitGlobal_function) {
			return visitor.visitGlobal_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_parametersContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_parameter_list(): Function_parameterContext[] {
		return this.getTypedRuleContexts(Function_parameterContext) as Function_parameterContext[];
	}
	public function_parameter(i: number): Function_parameterContext {
		return this.getTypedRuleContext(Function_parameterContext, i) as Function_parameterContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_function_parameters;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterFunction_parameters) {
	 		listener.enterFunction_parameters(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitFunction_parameters) {
	 		listener.exitFunction_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitFunction_parameters) {
			return visitor.visitFunction_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_parameterContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typename(): TypenameContext {
		return this.getTypedRuleContext(TypenameContext, 0) as TypenameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_function_parameter;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterFunction_parameter) {
	 		listener.enterFunction_parameter(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitFunction_parameter) {
	 		listener.exitFunction_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitFunction_parameter) {
			return visitor.visitFunction_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class State_bodyContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public event_list(): EventContext[] {
		return this.getTypedRuleContexts(EventContext) as EventContext[];
	}
	public event(i: number): EventContext {
		return this.getTypedRuleContext(EventContext, i) as EventContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_state_body;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterState_body) {
	 		listener.enterState_body(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitState_body) {
	 		listener.exitState_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitState_body) {
			return visitor.visitState_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(LSLParser.Identifier, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(LSLParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(LSLParser.RightParen, 0);
	}
	public compound_statement(): Compound_statementContext {
		return this.getTypedRuleContext(Compound_statementContext, 0) as Compound_statementContext;
	}
	public function_parameters(): Function_parametersContext {
		return this.getTypedRuleContext(Function_parametersContext, 0) as Function_parametersContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_event;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterEvent) {
	 		listener.enterEvent(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitEvent) {
	 		listener.exitEvent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitEvent) {
			return visitor.visitEvent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_statementContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(LSLParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(LSLParser.RightBrace, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_compound_statement;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterCompound_statement) {
	 		listener.enterCompound_statement(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitCompound_statement) {
	 		listener.exitCompound_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitCompound_statement) {
			return visitor.visitCompound_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_statements;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Semi_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Semi);
	}
	public Semi(i: number): TerminalNode {
		return this.getToken(LSLParser.Semi, i);
	}
	public State(): TerminalNode {
		return this.getToken(LSLParser.State, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public StateDefault(): TerminalNode {
		return this.getToken(LSLParser.StateDefault, 0);
	}
	public Jump(): TerminalNode {
		return this.getToken(LSLParser.Jump, 0);
	}
	public At(): TerminalNode {
		return this.getToken(LSLParser.At, 0);
	}
	public Return(): TerminalNode {
		return this.getToken(LSLParser.Return, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public compound_statement(): Compound_statementContext {
		return this.getTypedRuleContext(Compound_statementContext, 0) as Compound_statementContext;
	}
	public If(): TerminalNode {
		return this.getToken(LSLParser.If, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(LSLParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(LSLParser.RightParen, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public Else(): TerminalNode {
		return this.getToken(LSLParser.Else, 0);
	}
	public For(): TerminalNode {
		return this.getToken(LSLParser.For, 0);
	}
	public forexpressionlist_list(): ForexpressionlistContext[] {
		return this.getTypedRuleContexts(ForexpressionlistContext) as ForexpressionlistContext[];
	}
	public forexpressionlist(i: number): ForexpressionlistContext {
		return this.getTypedRuleContext(ForexpressionlistContext, i) as ForexpressionlistContext;
	}
	public Do(): TerminalNode {
		return this.getToken(LSLParser.Do, 0);
	}
	public While(): TerminalNode {
		return this.getToken(LSLParser.While, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_statement;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForexpressionlistContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_forexpressionlist;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterForexpressionlist) {
	 		listener.enterForexpressionlist(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitForexpressionlist) {
	 		listener.exitForexpressionlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitForexpressionlist) {
			return visitor.visitForexpressionlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncexpressionlistContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_funcexpressionlist;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterFuncexpressionlist) {
	 		listener.enterFuncexpressionlist(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitFuncexpressionlist) {
	 		listener.exitFuncexpressionlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitFuncexpressionlist) {
			return visitor.visitFuncexpressionlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListexpressionlistContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nextlistexpressionlist(): NextlistexpressionlistContext {
		return this.getTypedRuleContext(NextlistexpressionlistContext, 0) as NextlistexpressionlistContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_listexpressionlist;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterListexpressionlist) {
	 		listener.enterListexpressionlist(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitListexpressionlist) {
	 		listener.exitListexpressionlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitListexpressionlist) {
			return visitor.visitListexpressionlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NextlistexpressionlistContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_nextlistexpressionlist;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterNextlistexpressionlist) {
	 		listener.enterNextlistexpressionlist(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitNextlistexpressionlist) {
	 		listener.exitNextlistexpressionlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitNextlistexpressionlist) {
			return visitor.visitNextlistexpressionlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryexpression(): UnaryexpressionContext {
		return this.getTypedRuleContext(UnaryexpressionContext, 0) as UnaryexpressionContext;
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(LSLParser.Assign, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public PlusAssign(): TerminalNode {
		return this.getToken(LSLParser.PlusAssign, 0);
	}
	public MinusAssign(): TerminalNode {
		return this.getToken(LSLParser.MinusAssign, 0);
	}
	public StarAssign(): TerminalNode {
		return this.getToken(LSLParser.StarAssign, 0);
	}
	public DivAssign(): TerminalNode {
		return this.getToken(LSLParser.DivAssign, 0);
	}
	public ModAssign(): TerminalNode {
		return this.getToken(LSLParser.ModAssign, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(LSLParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(LSLParser.NEQ, 0);
	}
	public LessEqual(): TerminalNode {
		return this.getToken(LSLParser.LessEqual, 0);
	}
	public GreaterEqual(): TerminalNode {
		return this.getToken(LSLParser.GreaterEqual, 0);
	}
	public Less(): TerminalNode {
		return this.getToken(LSLParser.Less, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(LSLParser.Greater, 0);
	}
	public Plus(): TerminalNode {
		return this.getToken(LSLParser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(LSLParser.Minus, 0);
	}
	public Asterisk(): TerminalNode {
		return this.getToken(LSLParser.Asterisk, 0);
	}
	public Slash(): TerminalNode {
		return this.getToken(LSLParser.Slash, 0);
	}
	public Mod(): TerminalNode {
		return this.getToken(LSLParser.Mod, 0);
	}
	public And(): TerminalNode {
		return this.getToken(LSLParser.And, 0);
	}
	public Or(): TerminalNode {
		return this.getToken(LSLParser.Or, 0);
	}
	public Caret(): TerminalNode {
		return this.getToken(LSLParser.Caret, 0);
	}
	public AndAnd(): TerminalNode {
		return this.getToken(LSLParser.AndAnd, 0);
	}
	public OrOr(): TerminalNode {
		return this.getToken(LSLParser.OrOr, 0);
	}
	public LeftShift(): TerminalNode {
		return this.getToken(LSLParser.LeftShift, 0);
	}
	public RightShift(): TerminalNode {
		return this.getToken(LSLParser.RightShift, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_expression;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryexpressionContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Minus(): TerminalNode {
		return this.getToken(LSLParser.Minus, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Not(): TerminalNode {
		return this.getToken(LSLParser.Not, 0);
	}
	public Tilde(): TerminalNode {
		return this.getToken(LSLParser.Tilde, 0);
	}
	public PlusPlus(): TerminalNode {
		return this.getToken(LSLParser.PlusPlus, 0);
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public MinusMinus(): TerminalNode {
		return this.getToken(LSLParser.MinusMinus, 0);
	}
	public typecast(): TypecastContext {
		return this.getTypedRuleContext(TypecastContext, 0) as TypecastContext;
	}
	public unarypostfixexpression(): UnarypostfixexpressionContext {
		return this.getTypedRuleContext(UnarypostfixexpressionContext, 0) as UnarypostfixexpressionContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(LSLParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(LSLParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_unaryexpression;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterUnaryexpression) {
	 		listener.enterUnaryexpression(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitUnaryexpression) {
	 		listener.exitUnaryexpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitUnaryexpression) {
			return visitor.visitUnaryexpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypecastContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftParen_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.LeftParen);
	}
	public LeftParen(i: number): TerminalNode {
		return this.getToken(LSLParser.LeftParen, i);
	}
	public typename(): TypenameContext {
		return this.getTypedRuleContext(TypenameContext, 0) as TypenameContext;
	}
	public RightParen_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.RightParen);
	}
	public RightParen(i: number): TerminalNode {
		return this.getToken(LSLParser.RightParen, i);
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public unarypostfixexpression(): UnarypostfixexpressionContext {
		return this.getTypedRuleContext(UnarypostfixexpressionContext, 0) as UnarypostfixexpressionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_typecast;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterTypecast) {
	 		listener.enterTypecast(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitTypecast) {
	 		listener.exitTypecast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitTypecast) {
			return visitor.visitTypecast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnarypostfixexpressionContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public vector_initializer(): Vector_initializerContext {
		return this.getTypedRuleContext(Vector_initializerContext, 0) as Vector_initializerContext;
	}
	public quaternion_initializer(): Quaternion_initializerContext {
		return this.getTypedRuleContext(Quaternion_initializerContext, 0) as Quaternion_initializerContext;
	}
	public list_initializer(): List_initializerContext {
		return this.getTypedRuleContext(List_initializerContext, 0) as List_initializerContext;
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public PlusPlus(): TerminalNode {
		return this.getToken(LSLParser.PlusPlus, 0);
	}
	public MinusMinus(): TerminalNode {
		return this.getToken(LSLParser.MinusMinus, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(LSLParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(LSLParser.RightParen, 0);
	}
	public funcexpressionlist(): FuncexpressionlistContext {
		return this.getTypedRuleContext(FuncexpressionlistContext, 0) as FuncexpressionlistContext;
	}
	public Print(): TerminalNode {
		return this.getToken(LSLParser.Print, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_unarypostfixexpression;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterUnarypostfixexpression) {
	 		listener.enterUnarypostfixexpression(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitUnarypostfixexpression) {
	 		listener.exitUnarypostfixexpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitUnarypostfixexpression) {
			return visitor.visitUnarypostfixexpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Vector_initializerContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Less(): TerminalNode {
		return this.getToken(LSLParser.Less, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
	public Greater(): TerminalNode {
		return this.getToken(LSLParser.Greater, 0);
	}
	public ZeroVector(): TerminalNode {
		return this.getToken(LSLParser.ZeroVector, 0);
	}
	public TouchInvalidVector(): TerminalNode {
		return this.getToken(LSLParser.TouchInvalidVector, 0);
	}
	public TouchInvalidTexcoord(): TerminalNode {
		return this.getToken(LSLParser.TouchInvalidTexcoord, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_vector_initializer;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterVector_initializer) {
	 		listener.enterVector_initializer(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitVector_initializer) {
	 		listener.exitVector_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitVector_initializer) {
			return visitor.visitVector_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Quaternion_initializerContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Less(): TerminalNode {
		return this.getToken(LSLParser.Less, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(LSLParser.Comma, i);
	}
	public Greater(): TerminalNode {
		return this.getToken(LSLParser.Greater, 0);
	}
	public ZeroRotation(): TerminalNode {
		return this.getToken(LSLParser.ZeroRotation, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_quaternion_initializer;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterQuaternion_initializer) {
	 		listener.enterQuaternion_initializer(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitQuaternion_initializer) {
	 		listener.exitQuaternion_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitQuaternion_initializer) {
			return visitor.visitQuaternion_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_initializerContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(LSLParser.LeftBracket, 0);
	}
	public listexpressionlist(): ListexpressionlistContext {
		return this.getTypedRuleContext(ListexpressionlistContext, 0) as ListexpressionlistContext;
	}
	public RightBracket(): TerminalNode {
		return this.getToken(LSLParser.RightBracket, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_list_initializer;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterList_initializer) {
	 		listener.enterList_initializer(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitList_initializer) {
	 		listener.exitList_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitList_initializer) {
			return visitor.visitList_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LvalueContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Dot(): TerminalNode {
		return this.getToken(LSLParser.Dot, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(LSLParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_lvalue;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterLvalue) {
	 		listener.enterLvalue(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitLvalue) {
	 		listener.exitLvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitLvalue) {
			return visitor.visitLvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(LSLParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_identifier;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
