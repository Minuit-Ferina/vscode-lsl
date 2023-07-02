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
			this.state = 94;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 90;
				this.global_variable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 91;
				this.global_function();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 92;
				this.llstates();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 93;
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
			this.state = 96;
			this.typename();
			this.state = 97;
			this.match(LSLParser.Identifier);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 98;
				this.match(LSLParser.Assign);
				this.state = 99;
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
			this.state = 102;
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
			this.state = 104;
			this.default_state();
			this.state = 108;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 105;
					this.llstate();
					}
					}
				}
				this.state = 110;
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
			this.state = 111;
			this.match(LSLParser.StateDefault);
			{
			this.state = 112;
			this.match(LSLParser.LeftBrace);
			this.state = 113;
			this.state_body();
			this.state = 114;
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
			this.state = 116;
			this.match(LSLParser.State);
			this.state = 117;
			this.match(LSLParser.Identifier);
			{
			this.state = 118;
			this.match(LSLParser.LeftBrace);
			this.state = 119;
			this.state_body();
			this.state = 120;
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
			this.state = 122;
			this.typename();
			this.state = 123;
			this.identifier();
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 124;
				this.match(LSLParser.Assign);
				this.state = 125;
				this.simple_assignable();
				}
			}

			this.state = 128;
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
			this.state = 132;
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
				this.state = 130;
				this.simple_assignable_no_list();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 131;
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
			this.state = 137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 76:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 134;
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
				this.state = 135;
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
				this.state = 136;
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
			this.state = 142;
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
				this.state = 139;
				this.integer_constant();
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 140;
				this.fp_constant();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 141;
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
			this.state = 144;
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
			this.state = 150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 67:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 146;
				this.match(LSLParser.StringLiteral);
				}
				break;
			case 65:
			case 66:
			case 69:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 147;
				this.numericLiteral();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 148;
				this.match(LSLParser.IntegerTrue);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 149;
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
			this.state = 152;
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
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 154;
				this.vector_constant();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 155;
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
			this.state = 169;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 158;
				this.match(LSLParser.Less);
				this.state = 159;
				this.simple_assignable();
				this.state = 160;
				this.match(LSLParser.Comma);
				this.state = 161;
				this.simple_assignable();
				this.state = 162;
				this.match(LSLParser.Comma);
				this.state = 163;
				this.simple_assignable();
				this.state = 164;
				this.match(LSLParser.Greater);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 166;
				this.match(LSLParser.ZeroVector);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 167;
				this.match(LSLParser.TouchInvalidVector);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 168;
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
			this.state = 182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 171;
				this.match(LSLParser.Less);
				this.state = 172;
				this.simple_assignable();
				this.state = 173;
				this.match(LSLParser.Comma);
				this.state = 174;
				this.simple_assignable();
				this.state = 175;
				this.match(LSLParser.Comma);
				this.state = 176;
				this.simple_assignable();
				this.state = 177;
				this.match(LSLParser.Comma);
				this.state = 178;
				this.simple_assignable();
				this.state = 179;
				this.match(LSLParser.Greater);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 181;
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
			this.state = 184;
			this.match(LSLParser.LeftBracket);
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 132120576) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 272515073) !== 0)) {
				{
				this.state = 185;
				this.list_entries();
				}
			}

			this.state = 188;
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
			this.state = 190;
			this.list_entry();
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 191;
				this.match(LSLParser.Comma);
				this.state = 192;
				this.list_entry();
				}
				}
				this.state = 197;
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
			this.state = 198;
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
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 200;
				this.typename();
				}
			}

			this.state = 203;
			this.identifier();
			this.state = 204;
			this.match(LSLParser.LeftParen);
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 205;
				this.function_parameters();
				}
			}

			this.state = 208;
			this.match(LSLParser.RightParen);
			this.state = 209;
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
			this.state = 211;
			this.function_parameter();
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 212;
				this.match(LSLParser.Comma);
				this.state = 213;
				this.function_parameter();
				}
				}
				this.state = 218;
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
			this.state = 219;
			this.typename();
			this.state = 220;
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
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===76) {
				{
				{
				this.state = 222;
				this.event();
				}
				}
				this.state = 227;
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
			this.state = 228;
			this.match(LSLParser.Identifier);
			this.state = 229;
			this.match(LSLParser.LeftParen);
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 230;
				this.function_parameters();
				}
			}

			this.state = 233;
			this.match(LSLParser.RightParen);
			this.state = 234;
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
			this.state = 236;
			this.match(LSLParser.LeftBrace);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 535787006) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 2428523689) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1039) !== 0)) {
				{
				this.state = 237;
				this.statements();
				}
			}

			this.state = 240;
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
			this.state = 243;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 242;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 245;
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
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 247;
				this.match(LSLParser.Semi);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 248;
				this.match(LSLParser.State);
				this.state = 249;
				this.identifier();
				this.state = 250;
				this.match(LSLParser.Semi);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 252;
				this.match(LSLParser.State);
				this.state = 253;
				this.match(LSLParser.StateDefault);
				this.state = 254;
				this.match(LSLParser.Semi);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 255;
				this.match(LSLParser.Jump);
				this.state = 256;
				this.identifier();
				this.state = 257;
				this.match(LSLParser.Semi);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 259;
				this.match(LSLParser.At);
				this.state = 260;
				this.identifier();
				this.state = 261;
				this.match(LSLParser.Semi);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 263;
				this.match(LSLParser.Return);
				this.state = 264;
				this.expression(0);
				this.state = 265;
				this.match(LSLParser.Semi);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 267;
				this.match(LSLParser.Return);
				this.state = 268;
				this.match(LSLParser.Semi);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 269;
				this.expression(0);
				this.state = 270;
				this.match(LSLParser.Semi);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 272;
				this.declaration();
				this.state = 273;
				this.match(LSLParser.Semi);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 275;
				this.compound_statement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 276;
				this.match(LSLParser.If);
				this.state = 277;
				this.match(LSLParser.LeftParen);
				this.state = 278;
				this.expression(0);
				this.state = 279;
				this.match(LSLParser.RightParen);
				this.state = 280;
				this.statement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 282;
				this.match(LSLParser.If);
				this.state = 283;
				this.match(LSLParser.LeftParen);
				this.state = 284;
				this.expression(0);
				this.state = 285;
				this.match(LSLParser.RightParen);
				this.state = 286;
				this.statement();
				this.state = 287;
				this.match(LSLParser.Else);
				this.state = 288;
				this.statement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 290;
				this.match(LSLParser.For);
				this.state = 291;
				this.match(LSLParser.LeftParen);
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 571737085) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1064515) !== 0)) {
					{
					this.state = 292;
					this.forexpressionlist();
					}
				}

				this.state = 295;
				this.match(LSLParser.Semi);
				this.state = 296;
				this.expression(0);
				this.state = 297;
				this.match(LSLParser.Semi);
				this.state = 298;
				this.forexpressionlist();
				this.state = 299;
				this.match(LSLParser.RightParen);
				this.state = 300;
				this.statement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 302;
				this.match(LSLParser.Do);
				this.state = 303;
				this.statement();
				this.state = 304;
				this.match(LSLParser.While);
				this.state = 305;
				this.match(LSLParser.LeftParen);
				this.state = 306;
				this.expression(0);
				this.state = 307;
				this.match(LSLParser.RightParen);
				this.state = 308;
				this.match(LSLParser.Semi);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 310;
				this.match(LSLParser.While);
				this.state = 311;
				this.match(LSLParser.LeftParen);
				this.state = 312;
				this.expression(0);
				this.state = 313;
				this.match(LSLParser.RightParen);
				this.state = 314;
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
			this.state = 318;
			this.expression(0);
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 319;
				this.match(LSLParser.Comma);
				this.state = 320;
				this.expression(0);
				}
				}
				this.state = 325;
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
			this.state = 326;
			this.expression(0);
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 327;
				this.match(LSLParser.Comma);
				this.state = 328;
				this.expression(0);
				}
				}
				this.state = 333;
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
			this.state = 334;
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
			this.state = 336;
			this.expression(0);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 337;
				this.match(LSLParser.Comma);
				this.state = 338;
				this.expression(0);
				}
				}
				this.state = 343;
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
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 345;
				this.unaryexpression();
				}
				break;
			case 2:
				{
				this.state = 346;
				this.lvalue();
				this.state = 347;
				this.match(LSLParser.Assign);
				this.state = 348;
				this.expression(24);
				}
				break;
			case 3:
				{
				this.state = 350;
				this.lvalue();
				this.state = 351;
				this.match(LSLParser.PlusAssign);
				this.state = 352;
				this.expression(23);
				}
				break;
			case 4:
				{
				this.state = 354;
				this.lvalue();
				this.state = 355;
				this.match(LSLParser.MinusAssign);
				this.state = 356;
				this.expression(22);
				}
				break;
			case 5:
				{
				this.state = 358;
				this.lvalue();
				this.state = 359;
				this.match(LSLParser.StarAssign);
				this.state = 360;
				this.expression(21);
				}
				break;
			case 6:
				{
				this.state = 362;
				this.lvalue();
				this.state = 363;
				this.match(LSLParser.DivAssign);
				this.state = 364;
				this.expression(20);
				}
				break;
			case 7:
				{
				this.state = 366;
				this.lvalue();
				this.state = 367;
				this.match(LSLParser.ModAssign);
				this.state = 368;
				this.expression(19);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 428;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 426;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 372;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 373;
						this.match(LSLParser.EQ);
						this.state = 374;
						this.expression(19);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 375;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 376;
						this.match(LSLParser.NEQ);
						this.state = 377;
						this.expression(18);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 379;
						this.match(LSLParser.LessEqual);
						this.state = 380;
						this.expression(17);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 382;
						this.match(LSLParser.GreaterEqual);
						this.state = 383;
						this.expression(16);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 385;
						this.match(LSLParser.Less);
						this.state = 386;
						this.expression(15);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 388;
						this.match(LSLParser.Greater);
						this.state = 389;
						this.expression(14);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 390;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 391;
						this.match(LSLParser.Plus);
						this.state = 392;
						this.expression(13);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 393;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 394;
						this.match(LSLParser.Minus);
						this.state = 395;
						this.expression(12);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 396;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 397;
						this.match(LSLParser.Asterisk);
						this.state = 398;
						this.expression(11);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 399;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 400;
						this.match(LSLParser.Slash);
						this.state = 401;
						this.expression(10);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 402;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 403;
						this.match(LSLParser.Mod);
						this.state = 404;
						this.expression(9);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 405;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 406;
						this.match(LSLParser.And);
						this.state = 407;
						this.expression(8);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 408;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 409;
						this.match(LSLParser.Or);
						this.state = 410;
						this.expression(7);
						}
						break;
					case 14:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 411;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 412;
						this.match(LSLParser.Caret);
						this.state = 413;
						this.expression(6);
						}
						break;
					case 15:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 414;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 415;
						this.match(LSLParser.AndAnd);
						this.state = 416;
						this.expression(5);
						}
						break;
					case 16:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 417;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 418;
						this.match(LSLParser.OrOr);
						this.state = 419;
						this.expression(4);
						}
						break;
					case 17:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 420;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 421;
						this.match(LSLParser.LeftShift);
						this.state = 422;
						this.expression(3);
						}
						break;
					case 18:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 423;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 424;
						this.match(LSLParser.RightShift);
						this.state = 425;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 430;
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
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 431;
				this.match(LSLParser.Minus);
				this.state = 432;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 433;
				this.match(LSLParser.Not);
				this.state = 434;
				this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 435;
				this.match(LSLParser.Tilde);
				this.state = 436;
				this.expression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 437;
				this.match(LSLParser.PlusPlus);
				this.state = 438;
				this.lvalue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 439;
				this.match(LSLParser.MinusMinus);
				this.state = 440;
				this.lvalue();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 441;
				this.typecast();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 442;
				this.unarypostfixexpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 443;
				this.match(LSLParser.LeftParen);
				this.state = 444;
				this.expression(0);
				this.state = 445;
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
			this.state = 471;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 449;
				this.match(LSLParser.LeftParen);
				this.state = 450;
				this.typename();
				this.state = 451;
				this.match(LSLParser.RightParen);
				this.state = 452;
				this.lvalue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 454;
				this.match(LSLParser.LeftParen);
				this.state = 455;
				this.typename();
				this.state = 456;
				this.match(LSLParser.RightParen);
				this.state = 457;
				this.constant();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 459;
				this.match(LSLParser.LeftParen);
				this.state = 460;
				this.typename();
				this.state = 461;
				this.match(LSLParser.RightParen);
				this.state = 462;
				this.unarypostfixexpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 464;
				this.match(LSLParser.LeftParen);
				this.state = 465;
				this.typename();
				this.state = 466;
				this.match(LSLParser.RightParen);
				this.state = 467;
				this.match(LSLParser.LeftParen);
				this.state = 468;
				this.expression(0);
				this.state = 469;
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
			this.state = 496;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 473;
				this.vector_initializer();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 474;
				this.quaternion_initializer();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 475;
				this.list_initializer();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 476;
				this.lvalue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 477;
				this.lvalue();
				this.state = 478;
				this.match(LSLParser.PlusPlus);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 480;
				this.lvalue();
				this.state = 481;
				this.match(LSLParser.MinusMinus);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 483;
				this.identifier();
				this.state = 484;
				this.match(LSLParser.LeftParen);
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 571737085) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1064515) !== 0)) {
					{
					this.state = 485;
					this.funcexpressionlist();
					}
				}

				this.state = 488;
				this.match(LSLParser.RightParen);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 490;
				this.match(LSLParser.Print);
				this.state = 491;
				this.match(LSLParser.LeftParen);
				this.state = 492;
				this.expression(0);
				this.state = 493;
				this.match(LSLParser.RightParen);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 495;
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
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 498;
				this.match(LSLParser.Less);
				this.state = 499;
				this.expression(0);
				this.state = 500;
				this.match(LSLParser.Comma);
				this.state = 501;
				this.expression(0);
				this.state = 502;
				this.match(LSLParser.Comma);
				this.state = 503;
				this.expression(0);
				this.state = 504;
				this.match(LSLParser.Greater);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 506;
				this.match(LSLParser.ZeroVector);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 507;
				this.match(LSLParser.TouchInvalidVector);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 508;
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
			this.state = 522;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 511;
				this.match(LSLParser.Less);
				this.state = 512;
				this.expression(0);
				this.state = 513;
				this.match(LSLParser.Comma);
				this.state = 514;
				this.expression(0);
				this.state = 515;
				this.match(LSLParser.Comma);
				this.state = 516;
				this.expression(0);
				this.state = 517;
				this.match(LSLParser.Comma);
				this.state = 518;
				this.expression(0);
				this.state = 519;
				this.match(LSLParser.Greater);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 521;
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
			this.state = 530;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 524;
				this.match(LSLParser.LeftBracket);
				this.state = 525;
				this.listexpressionlist();
				this.state = 526;
				this.match(LSLParser.RightBracket);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 528;
				this.match(LSLParser.LeftBracket);
				this.state = 529;
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
			this.state = 537;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 532;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 533;
				this.identifier();
				this.state = 534;
				this.match(LSLParser.Dot);
				this.state = 535;
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
			this.state = 539;
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

	public static readonly _serializedATN: number[] = [4,1,76,542,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,1,0,5,0,84,8,0,10,0,12,0,87,9,0,1,0,1,0,1,1,1,1,1,1,1,
	1,3,1,95,8,1,1,2,1,2,1,2,1,2,3,2,101,8,2,1,3,1,3,1,4,1,4,5,4,107,8,4,10,
	4,12,4,110,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,
	1,7,3,7,127,8,7,1,7,1,7,1,8,1,8,3,8,133,8,8,1,9,1,9,1,9,3,9,138,8,9,1,10,
	1,10,1,10,3,10,143,8,10,1,11,1,11,1,12,1,12,1,12,1,12,3,12,151,8,12,1,13,
	1,13,1,14,1,14,3,14,157,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,3,15,170,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
	1,16,1,16,3,16,183,8,16,1,17,1,17,3,17,187,8,17,1,17,1,17,1,18,1,18,1,18,
	5,18,194,8,18,10,18,12,18,197,9,18,1,19,1,19,1,20,3,20,202,8,20,1,20,1,
	20,1,20,3,20,207,8,20,1,20,1,20,1,20,1,21,1,21,1,21,5,21,215,8,21,10,21,
	12,21,218,9,21,1,22,1,22,1,22,1,23,5,23,224,8,23,10,23,12,23,227,9,23,1,
	24,1,24,1,24,3,24,232,8,24,1,24,1,24,1,24,1,25,1,25,3,25,239,8,25,1,25,
	1,25,1,26,4,26,244,8,26,11,26,12,26,245,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,294,8,27,1,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,3,27,317,8,27,1,28,1,28,1,28,5,28,322,8,28,
	10,28,12,28,325,9,28,1,29,1,29,1,29,5,29,330,8,29,10,29,12,29,333,9,29,
	1,30,1,30,1,31,1,31,1,31,5,31,340,8,31,10,31,12,31,343,9,31,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,371,8,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,427,8,32,10,32,12,32,430,9,
	32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,
	1,33,1,33,3,33,448,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
	34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,472,
	8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,
	35,487,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,497,8,35,1,36,
	1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,510,8,36,1,37,1,
	37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,523,8,37,1,38,1,38,
	1,38,1,38,1,38,1,38,3,38,531,8,38,1,39,1,39,1,39,1,39,1,39,3,39,538,8,39,
	1,40,1,40,1,40,0,1,64,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
	34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
	0,2,1,0,1,8,2,0,65,66,69,69,596,0,85,1,0,0,0,2,94,1,0,0,0,4,96,1,0,0,0,
	6,102,1,0,0,0,8,104,1,0,0,0,10,111,1,0,0,0,12,116,1,0,0,0,14,122,1,0,0,
	0,16,132,1,0,0,0,18,137,1,0,0,0,20,142,1,0,0,0,22,144,1,0,0,0,24,150,1,
	0,0,0,26,152,1,0,0,0,28,156,1,0,0,0,30,169,1,0,0,0,32,182,1,0,0,0,34,184,
	1,0,0,0,36,190,1,0,0,0,38,198,1,0,0,0,40,201,1,0,0,0,42,211,1,0,0,0,44,
	219,1,0,0,0,46,225,1,0,0,0,48,228,1,0,0,0,50,236,1,0,0,0,52,243,1,0,0,0,
	54,316,1,0,0,0,56,318,1,0,0,0,58,326,1,0,0,0,60,334,1,0,0,0,62,336,1,0,
	0,0,64,370,1,0,0,0,66,447,1,0,0,0,68,471,1,0,0,0,70,496,1,0,0,0,72,509,
	1,0,0,0,74,522,1,0,0,0,76,530,1,0,0,0,78,537,1,0,0,0,80,539,1,0,0,0,82,
	84,3,2,1,0,83,82,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,
	1,0,0,0,87,85,1,0,0,0,88,89,5,0,0,1,89,1,1,0,0,0,90,95,3,14,7,0,91,95,3,
	40,20,0,92,95,3,8,4,0,93,95,3,52,26,0,94,90,1,0,0,0,94,91,1,0,0,0,94,92,
	1,0,0,0,94,93,1,0,0,0,95,3,1,0,0,0,96,97,3,6,3,0,97,100,5,76,0,0,98,99,
	5,36,0,0,99,101,3,64,32,0,100,98,1,0,0,0,100,101,1,0,0,0,101,5,1,0,0,0,
	102,103,7,0,0,0,103,7,1,0,0,0,104,108,3,10,5,0,105,107,3,12,6,0,106,105,
	1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,9,1,0,0,0,110,
	108,1,0,0,0,111,112,5,9,0,0,112,113,5,41,0,0,113,114,3,46,23,0,114,115,
	5,42,0,0,115,11,1,0,0,0,116,117,5,10,0,0,117,118,5,76,0,0,118,119,5,41,
	0,0,119,120,3,46,23,0,120,121,5,42,0,0,121,13,1,0,0,0,122,123,3,6,3,0,123,
	126,3,80,40,0,124,125,5,36,0,0,125,127,3,16,8,0,126,124,1,0,0,0,126,127,
	1,0,0,0,127,128,1,0,0,0,128,129,5,34,0,0,129,15,1,0,0,0,130,133,3,18,9,
	0,131,133,3,34,17,0,132,130,1,0,0,0,132,131,1,0,0,0,133,17,1,0,0,0,134,
	138,5,76,0,0,135,138,3,20,10,0,136,138,3,28,14,0,137,134,1,0,0,0,137,135,
	1,0,0,0,137,136,1,0,0,0,138,19,1,0,0,0,139,143,3,24,12,0,140,143,3,22,11,
	0,141,143,5,62,0,0,142,139,1,0,0,0,142,140,1,0,0,0,142,141,1,0,0,0,143,
	21,1,0,0,0,144,145,5,68,0,0,145,23,1,0,0,0,146,151,5,67,0,0,147,151,3,26,
	13,0,148,151,5,21,0,0,149,151,5,22,0,0,150,146,1,0,0,0,150,147,1,0,0,0,
	150,148,1,0,0,0,150,149,1,0,0,0,151,25,1,0,0,0,152,153,7,1,0,0,153,27,1,
	0,0,0,154,157,3,30,15,0,155,157,3,32,16,0,156,154,1,0,0,0,156,155,1,0,0,
	0,157,29,1,0,0,0,158,159,5,48,0,0,159,160,3,16,8,0,160,161,5,35,0,0,161,
	162,3,16,8,0,162,163,5,35,0,0,163,164,3,16,8,0,164,165,5,47,0,0,165,170,
	1,0,0,0,166,170,5,23,0,0,167,170,5,25,0,0,168,170,5,26,0,0,169,158,1,0,
	0,0,169,166,1,0,0,0,169,167,1,0,0,0,169,168,1,0,0,0,170,31,1,0,0,0,171,
	172,5,48,0,0,172,173,3,16,8,0,173,174,5,35,0,0,174,175,3,16,8,0,175,176,
	5,35,0,0,176,177,3,16,8,0,177,178,5,35,0,0,178,179,3,16,8,0,179,180,5,47,
	0,0,180,183,1,0,0,0,181,183,5,24,0,0,182,171,1,0,0,0,182,181,1,0,0,0,183,
	33,1,0,0,0,184,186,5,39,0,0,185,187,3,36,18,0,186,185,1,0,0,0,186,187,1,
	0,0,0,187,188,1,0,0,0,188,189,5,40,0,0,189,35,1,0,0,0,190,195,3,38,19,0,
	191,192,5,35,0,0,192,194,3,38,19,0,193,191,1,0,0,0,194,197,1,0,0,0,195,
	193,1,0,0,0,195,196,1,0,0,0,196,37,1,0,0,0,197,195,1,0,0,0,198,199,3,18,
	9,0,199,39,1,0,0,0,200,202,3,6,3,0,201,200,1,0,0,0,201,202,1,0,0,0,202,
	203,1,0,0,0,203,204,3,80,40,0,204,206,5,37,0,0,205,207,3,42,21,0,206,205,
	1,0,0,0,206,207,1,0,0,0,207,208,1,0,0,0,208,209,5,38,0,0,209,210,3,50,25,
	0,210,41,1,0,0,0,211,216,3,44,22,0,212,213,5,35,0,0,213,215,3,44,22,0,214,
	212,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,43,1,0,
	0,0,218,216,1,0,0,0,219,220,3,6,3,0,220,221,3,80,40,0,221,45,1,0,0,0,222,
	224,3,48,24,0,223,222,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,
	0,0,0,226,47,1,0,0,0,227,225,1,0,0,0,228,229,5,76,0,0,229,231,5,37,0,0,
	230,232,3,42,21,0,231,230,1,0,0,0,231,232,1,0,0,0,232,233,1,0,0,0,233,234,
	5,38,0,0,234,235,3,50,25,0,235,49,1,0,0,0,236,238,5,41,0,0,237,239,3,52,
	26,0,238,237,1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,241,5,42,0,0,241,
	51,1,0,0,0,242,244,3,54,27,0,243,242,1,0,0,0,244,245,1,0,0,0,245,243,1,
	0,0,0,245,246,1,0,0,0,246,53,1,0,0,0,247,317,5,34,0,0,248,249,5,10,0,0,
	249,250,3,80,40,0,250,251,5,34,0,0,251,317,1,0,0,0,252,253,5,10,0,0,253,
	254,5,9,0,0,254,317,5,34,0,0,255,256,5,12,0,0,256,257,3,80,40,0,257,258,
	5,34,0,0,258,317,1,0,0,0,259,260,5,46,0,0,260,261,3,80,40,0,261,262,5,34,
	0,0,262,317,1,0,0,0,263,264,5,13,0,0,264,265,3,64,32,0,265,266,5,34,0,0,
	266,317,1,0,0,0,267,268,5,13,0,0,268,317,5,34,0,0,269,270,3,64,32,0,270,
	271,5,34,0,0,271,317,1,0,0,0,272,273,3,4,2,0,273,274,5,34,0,0,274,317,1,
	0,0,0,275,317,3,50,25,0,276,277,5,14,0,0,277,278,5,37,0,0,278,279,3,64,
	32,0,279,280,5,38,0,0,280,281,3,54,27,0,281,317,1,0,0,0,282,283,5,14,0,
	0,283,284,5,37,0,0,284,285,3,64,32,0,285,286,5,38,0,0,286,287,3,54,27,0,
	287,288,5,15,0,0,288,289,3,54,27,0,289,317,1,0,0,0,290,291,5,16,0,0,291,
	293,5,37,0,0,292,294,3,56,28,0,293,292,1,0,0,0,293,294,1,0,0,0,294,295,
	1,0,0,0,295,296,5,34,0,0,296,297,3,64,32,0,297,298,5,34,0,0,298,299,3,56,
	28,0,299,300,5,38,0,0,300,301,3,54,27,0,301,317,1,0,0,0,302,303,5,17,0,
	0,303,304,3,54,27,0,304,305,5,18,0,0,305,306,5,37,0,0,306,307,3,64,32,0,
	307,308,5,38,0,0,308,309,5,34,0,0,309,317,1,0,0,0,310,311,5,18,0,0,311,
	312,5,37,0,0,312,313,3,64,32,0,313,314,5,38,0,0,314,315,3,54,27,0,315,317,
	1,0,0,0,316,247,1,0,0,0,316,248,1,0,0,0,316,252,1,0,0,0,316,255,1,0,0,0,
	316,259,1,0,0,0,316,263,1,0,0,0,316,267,1,0,0,0,316,269,1,0,0,0,316,272,
	1,0,0,0,316,275,1,0,0,0,316,276,1,0,0,0,316,282,1,0,0,0,316,290,1,0,0,0,
	316,302,1,0,0,0,316,310,1,0,0,0,317,55,1,0,0,0,318,323,3,64,32,0,319,320,
	5,35,0,0,320,322,3,64,32,0,321,319,1,0,0,0,322,325,1,0,0,0,323,321,1,0,
	0,0,323,324,1,0,0,0,324,57,1,0,0,0,325,323,1,0,0,0,326,331,3,64,32,0,327,
	328,5,35,0,0,328,330,3,64,32,0,329,327,1,0,0,0,330,333,1,0,0,0,331,329,
	1,0,0,0,331,332,1,0,0,0,332,59,1,0,0,0,333,331,1,0,0,0,334,335,3,62,31,
	0,335,61,1,0,0,0,336,341,3,64,32,0,337,338,5,35,0,0,338,340,3,64,32,0,339,
	337,1,0,0,0,340,343,1,0,0,0,341,339,1,0,0,0,341,342,1,0,0,0,342,63,1,0,
	0,0,343,341,1,0,0,0,344,345,6,32,-1,0,345,371,3,66,33,0,346,347,3,78,39,
	0,347,348,5,36,0,0,348,349,3,64,32,24,349,371,1,0,0,0,350,351,3,78,39,0,
	351,352,5,29,0,0,352,353,3,64,32,23,353,371,1,0,0,0,354,355,3,78,39,0,355,
	356,5,30,0,0,356,357,3,64,32,22,357,371,1,0,0,0,358,359,3,78,39,0,359,360,
	5,31,0,0,360,361,3,64,32,21,361,371,1,0,0,0,362,363,3,78,39,0,363,364,5,
	32,0,0,364,365,3,64,32,20,365,371,1,0,0,0,366,367,3,78,39,0,367,368,5,33,
	0,0,368,369,3,64,32,19,369,371,1,0,0,0,370,344,1,0,0,0,370,346,1,0,0,0,
	370,350,1,0,0,0,370,354,1,0,0,0,370,358,1,0,0,0,370,362,1,0,0,0,370,366,
	1,0,0,0,371,428,1,0,0,0,372,373,10,18,0,0,373,374,5,49,0,0,374,427,3,64,
	32,19,375,376,10,17,0,0,376,377,5,50,0,0,377,427,3,64,32,18,378,379,10,
	16,0,0,379,380,5,52,0,0,380,427,3,64,32,17,381,382,10,15,0,0,382,383,5,
	51,0,0,383,427,3,64,32,16,384,385,10,14,0,0,385,386,5,48,0,0,386,427,3,
	64,32,15,387,388,10,13,0,0,388,389,5,47,0,0,389,427,3,64,32,14,390,391,
	10,12,0,0,391,392,5,43,0,0,392,427,3,64,32,13,393,394,10,11,0,0,394,395,
	5,44,0,0,395,427,3,64,32,12,396,397,10,10,0,0,397,398,5,45,0,0,398,427,
	3,64,32,11,399,400,10,9,0,0,400,401,5,63,0,0,401,427,3,64,32,10,402,403,
	10,8,0,0,403,404,5,64,0,0,404,427,3,64,32,9,405,406,10,7,0,0,406,407,5,
	53,0,0,407,427,3,64,32,8,408,409,10,6,0,0,409,410,5,54,0,0,410,427,3,64,
	32,7,411,412,10,5,0,0,412,413,5,55,0,0,413,427,3,64,32,6,414,415,10,4,0,
	0,415,416,5,58,0,0,416,427,3,64,32,5,417,418,10,3,0,0,418,419,5,59,0,0,
	419,427,3,64,32,4,420,421,10,2,0,0,421,422,5,60,0,0,422,427,3,64,32,3,423,
	424,10,1,0,0,424,425,5,61,0,0,425,427,3,64,32,2,426,372,1,0,0,0,426,375,
	1,0,0,0,426,378,1,0,0,0,426,381,1,0,0,0,426,384,1,0,0,0,426,387,1,0,0,0,
	426,390,1,0,0,0,426,393,1,0,0,0,426,396,1,0,0,0,426,399,1,0,0,0,426,402,
	1,0,0,0,426,405,1,0,0,0,426,408,1,0,0,0,426,411,1,0,0,0,426,414,1,0,0,0,
	426,417,1,0,0,0,426,420,1,0,0,0,426,423,1,0,0,0,427,430,1,0,0,0,428,426,
	1,0,0,0,428,429,1,0,0,0,429,65,1,0,0,0,430,428,1,0,0,0,431,432,5,44,0,0,
	432,448,3,64,32,0,433,434,5,57,0,0,434,448,3,64,32,0,435,436,5,56,0,0,436,
	448,3,64,32,0,437,438,5,27,0,0,438,448,3,78,39,0,439,440,5,28,0,0,440,448,
	3,78,39,0,441,448,3,68,34,0,442,448,3,70,35,0,443,444,5,37,0,0,444,445,
	3,64,32,0,445,446,5,38,0,0,446,448,1,0,0,0,447,431,1,0,0,0,447,433,1,0,
	0,0,447,435,1,0,0,0,447,437,1,0,0,0,447,439,1,0,0,0,447,441,1,0,0,0,447,
	442,1,0,0,0,447,443,1,0,0,0,448,67,1,0,0,0,449,450,5,37,0,0,450,451,3,6,
	3,0,451,452,5,38,0,0,452,453,3,78,39,0,453,472,1,0,0,0,454,455,5,37,0,0,
	455,456,3,6,3,0,456,457,5,38,0,0,457,458,3,20,10,0,458,472,1,0,0,0,459,
	460,5,37,0,0,460,461,3,6,3,0,461,462,5,38,0,0,462,463,3,70,35,0,463,472,
	1,0,0,0,464,465,5,37,0,0,465,466,3,6,3,0,466,467,5,38,0,0,467,468,5,37,
	0,0,468,469,3,64,32,0,469,470,5,38,0,0,470,472,1,0,0,0,471,449,1,0,0,0,
	471,454,1,0,0,0,471,459,1,0,0,0,471,464,1,0,0,0,472,69,1,0,0,0,473,497,
	3,72,36,0,474,497,3,74,37,0,475,497,3,76,38,0,476,497,3,78,39,0,477,478,
	3,78,39,0,478,479,5,27,0,0,479,497,1,0,0,0,480,481,3,78,39,0,481,482,5,
	28,0,0,482,497,1,0,0,0,483,484,3,80,40,0,484,486,5,37,0,0,485,487,3,58,
	29,0,486,485,1,0,0,0,486,487,1,0,0,0,487,488,1,0,0,0,488,489,5,38,0,0,489,
	497,1,0,0,0,490,491,5,19,0,0,491,492,5,37,0,0,492,493,3,64,32,0,493,494,
	5,38,0,0,494,497,1,0,0,0,495,497,3,20,10,0,496,473,1,0,0,0,496,474,1,0,
	0,0,496,475,1,0,0,0,496,476,1,0,0,0,496,477,1,0,0,0,496,480,1,0,0,0,496,
	483,1,0,0,0,496,490,1,0,0,0,496,495,1,0,0,0,497,71,1,0,0,0,498,499,5,48,
	0,0,499,500,3,64,32,0,500,501,5,35,0,0,501,502,3,64,32,0,502,503,5,35,0,
	0,503,504,3,64,32,0,504,505,5,47,0,0,505,510,1,0,0,0,506,510,5,23,0,0,507,
	510,5,25,0,0,508,510,5,26,0,0,509,498,1,0,0,0,509,506,1,0,0,0,509,507,1,
	0,0,0,509,508,1,0,0,0,510,73,1,0,0,0,511,512,5,48,0,0,512,513,3,64,32,0,
	513,514,5,35,0,0,514,515,3,64,32,0,515,516,5,35,0,0,516,517,3,64,32,0,517,
	518,5,35,0,0,518,519,3,64,32,0,519,520,5,47,0,0,520,523,1,0,0,0,521,523,
	5,24,0,0,522,511,1,0,0,0,522,521,1,0,0,0,523,75,1,0,0,0,524,525,5,39,0,
	0,525,526,3,60,30,0,526,527,5,40,0,0,527,531,1,0,0,0,528,529,5,39,0,0,529,
	531,5,40,0,0,530,524,1,0,0,0,530,528,1,0,0,0,531,77,1,0,0,0,532,538,3,80,
	40,0,533,534,3,80,40,0,534,535,5,20,0,0,535,536,5,76,0,0,536,538,1,0,0,
	0,537,532,1,0,0,0,537,533,1,0,0,0,538,79,1,0,0,0,539,540,5,76,0,0,540,81,
	1,0,0,0,37,85,94,100,108,126,132,137,142,150,156,169,182,186,195,201,206,
	216,225,231,238,245,293,316,323,331,341,370,426,428,447,471,486,496,509,
	522,530,537];

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
	public global_variable(): Global_variableContext {
		return this.getTypedRuleContext(Global_variableContext, 0) as Global_variableContext;
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
