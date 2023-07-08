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
	public static readonly Switch = 19;
	public static readonly Case = 20;
	public static readonly Break = 21;
	public static readonly Print = 22;
	public static readonly Dot = 23;
	public static readonly IntegerTrue = 24;
	public static readonly IntegerFalse = 25;
	public static readonly ZeroVector = 26;
	public static readonly ZeroRotation = 27;
	public static readonly TouchInvalidVector = 28;
	public static readonly TouchInvalidTexcoord = 29;
	public static readonly PlusPlus = 30;
	public static readonly MinusMinus = 31;
	public static readonly PlusAssign = 32;
	public static readonly MinusAssign = 33;
	public static readonly StarAssign = 34;
	public static readonly DivAssign = 35;
	public static readonly ModAssign = 36;
	public static readonly Semi = 37;
	public static readonly Comma = 38;
	public static readonly Assign = 39;
	public static readonly LeftParen = 40;
	public static readonly RightParen = 41;
	public static readonly LeftBracket = 42;
	public static readonly RightBracket = 43;
	public static readonly LeftBrace = 44;
	public static readonly RightBrace = 45;
	public static readonly Plus = 46;
	public static readonly Minus = 47;
	public static readonly Asterisk = 48;
	public static readonly At = 49;
	public static readonly Greater = 50;
	public static readonly Less = 51;
	public static readonly EQ = 52;
	public static readonly NEQ = 53;
	public static readonly GreaterEqual = 54;
	public static readonly LessEqual = 55;
	public static readonly And = 56;
	public static readonly Or = 57;
	public static readonly Caret = 58;
	public static readonly Tilde = 59;
	public static readonly Not = 60;
	public static readonly AndAnd = 61;
	public static readonly OrOr = 62;
	public static readonly LeftShift = 63;
	public static readonly RightShift = 64;
	public static readonly StringConstant = 65;
	public static readonly Slash = 66;
	public static readonly Mod = 67;
	public static readonly HexIntegerLiteral = 68;
	public static readonly BinaryIntegerLiteral = 69;
	public static readonly StringLiteral = 70;
	public static readonly FloatingConstant = 71;
	public static readonly DigitSequence = 72;
	public static readonly MultiLineMacro = 73;
	public static readonly Directive = 74;
	public static readonly Whitespace = 75;
	public static readonly Newline = 76;
	public static readonly BlockComment = 77;
	public static readonly LineComment = 78;
	public static readonly Identifier = 79;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_lscript_program = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_typename = 2;
	public static readonly RULE_llstates = 3;
	public static readonly RULE_default_state = 4;
	public static readonly RULE_llstate = 5;
	public static readonly RULE_global_variable = 6;
	public static readonly RULE_simple_assignable = 7;
	public static readonly RULE_simple_assignable_no_list = 8;
	public static readonly RULE_constant = 9;
	public static readonly RULE_fp_constant = 10;
	public static readonly RULE_integer_constant = 11;
	public static readonly RULE_numericLiteral = 12;
	public static readonly RULE_special_constant = 13;
	public static readonly RULE_vector_constant = 14;
	public static readonly RULE_quaternion_constant = 15;
	public static readonly RULE_list_constant = 16;
	public static readonly RULE_list_entries = 17;
	public static readonly RULE_list_entry = 18;
	public static readonly RULE_global_function = 19;
	public static readonly RULE_function_parameters = 20;
	public static readonly RULE_function_parameter = 21;
	public static readonly RULE_state_body = 22;
	public static readonly RULE_event = 23;
	public static readonly RULE_compound_statement = 24;
	public static readonly RULE_statement = 25;
	public static readonly RULE_jump_label = 26;
	public static readonly RULE_iterable = 27;
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
                                                            "'while'", "'switch'", 
                                                            "'case'", "'break'", 
                                                            "'print'", "'.'", 
                                                            "'TRUE'", "'FALSE'", 
                                                            "'ZERO_Vector'", 
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
                                                             "While", "Switch", 
                                                             "Case", "Break", 
                                                             "Print", "Dot", 
                                                             "IntegerTrue", 
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
		"lscript_program", "declaration", "typename", "llstates", "default_state", 
		"llstate", "global_variable", "simple_assignable", "simple_assignable_no_list", 
		"constant", "fp_constant", "integer_constant", "numericLiteral", "special_constant", 
		"vector_constant", "quaternion_constant", "list_constant", "list_entries", 
		"list_entry", "global_function", "function_parameters", "function_parameter", 
		"state_body", "event", "compound_statement", "statement", "jump_label", 
		"iterable", "forexpressionlist", "funcexpressionlist", "listexpressionlist", 
		"nextlistexpressionlist", "expression", "unaryexpression", "typecast", 
		"unarypostfixexpression", "vector_initializer", "quaternion_initializer", 
		"list_initializer", "lvalue", "identifier",
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
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4285495294) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2428523689) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1039) !== 0)) {
				{
				this.state = 86;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 82;
					this.global_function();
					}
					break;
				case 2:
					{
					this.state = 83;
					this.default_state();
					}
					break;
				case 3:
					{
					this.state = 84;
					this.llstate();
					}
					break;
				case 4:
					{
					this.state = 85;
					this.statement();
					}
					break;
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 91;
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
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LSLParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 93;
			this.typename();
			this.state = 94;
			this.match(LSLParser.Identifier);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 95;
				this.match(LSLParser.Assign);
				this.state = 96;
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
		this.enterRule(localctx, 4, LSLParser.RULE_typename);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 99;
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
		this.enterRule(localctx, 6, LSLParser.RULE_llstates);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this.default_state();
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 102;
				this.llstate();
				}
				}
				this.state = 107;
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
	public default_state(): Default_stateContext {
		let localctx: Default_stateContext = new Default_stateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LSLParser.RULE_default_state);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.match(LSLParser.StateDefault);
			{
			this.state = 109;
			this.match(LSLParser.LeftBrace);
			this.state = 110;
			this.state_body();
			this.state = 111;
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
		this.enterRule(localctx, 10, LSLParser.RULE_llstate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.match(LSLParser.State);
			this.state = 114;
			this.match(LSLParser.Identifier);
			{
			this.state = 115;
			this.match(LSLParser.LeftBrace);
			this.state = 116;
			this.state_body();
			this.state = 117;
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
		this.enterRule(localctx, 12, LSLParser.RULE_global_variable);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this.typename();
			this.state = 120;
			this.identifier();
			this.state = 125;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 121;
					this.match(LSLParser.Assign);
					this.state = 122;
					this.simple_assignable();
					}
					}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
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
	public simple_assignable(): Simple_assignableContext {
		let localctx: Simple_assignableContext = new Simple_assignableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LSLParser.RULE_simple_assignable);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 51:
			case 65:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 79:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 128;
				this.simple_assignable_no_list();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 129;
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
		this.enterRule(localctx, 16, LSLParser.RULE_simple_assignable_no_list);
		try {
			this.state = 135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 79:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 132;
				this.match(LSLParser.Identifier);
				}
				break;
			case 24:
			case 25:
			case 65:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 133;
				this.constant();
				}
				break;
			case 26:
			case 27:
			case 28:
			case 29:
			case 51:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 134;
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
		this.enterRule(localctx, 18, LSLParser.RULE_constant);
		try {
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
			case 25:
			case 68:
			case 69:
			case 70:
			case 72:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 137;
				this.integer_constant();
				}
				break;
			case 71:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 138;
				this.fp_constant();
				}
				break;
			case 65:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 139;
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
		this.enterRule(localctx, 20, LSLParser.RULE_fp_constant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
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
		this.enterRule(localctx, 22, LSLParser.RULE_integer_constant);
		try {
			this.state = 148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 70:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 144;
				this.match(LSLParser.StringLiteral);
				}
				break;
			case 68:
			case 69:
			case 72:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 145;
				this.numericLiteral();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 146;
				this.match(LSLParser.IntegerTrue);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 147;
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
		this.enterRule(localctx, 24, LSLParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			_la = this._input.LA(1);
			if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 19) !== 0))) {
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
		this.enterRule(localctx, 26, LSLParser.RULE_special_constant);
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 152;
				this.vector_constant();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 153;
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
		this.enterRule(localctx, 28, LSLParser.RULE_vector_constant);
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 156;
				this.match(LSLParser.Less);
				this.state = 157;
				this.simple_assignable();
				this.state = 158;
				this.match(LSLParser.Comma);
				this.state = 159;
				this.simple_assignable();
				this.state = 160;
				this.match(LSLParser.Comma);
				this.state = 161;
				this.simple_assignable();
				this.state = 162;
				this.match(LSLParser.Greater);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 164;
				this.match(LSLParser.ZeroVector);
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 165;
				this.match(LSLParser.TouchInvalidVector);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 166;
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
		this.enterRule(localctx, 30, LSLParser.RULE_quaternion_constant);
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 169;
				this.match(LSLParser.Less);
				this.state = 170;
				this.simple_assignable();
				this.state = 171;
				this.match(LSLParser.Comma);
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
				this.match(LSLParser.Greater);
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 179;
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
		this.enterRule(localctx, 32, LSLParser.RULE_list_constant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.match(LSLParser.LeftBracket);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1056964608) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 272515073) !== 0)) {
				{
				this.state = 183;
				this.list_entries();
				}
			}

			this.state = 186;
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
		this.enterRule(localctx, 34, LSLParser.RULE_list_entries);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			this.list_entry();
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 189;
				this.match(LSLParser.Comma);
				this.state = 190;
				this.list_entry();
				}
				}
				this.state = 195;
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
		this.enterRule(localctx, 36, LSLParser.RULE_list_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
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
		this.enterRule(localctx, 38, LSLParser.RULE_global_function);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 198;
				this.typename();
				}
			}

			this.state = 201;
			this.identifier();
			this.state = 202;
			this.match(LSLParser.LeftParen);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 203;
				this.function_parameters();
				}
			}

			this.state = 206;
			this.match(LSLParser.RightParen);
			this.state = 207;
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
		this.enterRule(localctx, 40, LSLParser.RULE_function_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 209;
			this.function_parameter();
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 210;
				this.match(LSLParser.Comma);
				this.state = 211;
				this.function_parameter();
				}
				}
				this.state = 216;
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
		this.enterRule(localctx, 42, LSLParser.RULE_function_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 217;
			this.typename();
			this.state = 218;
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
		this.enterRule(localctx, 44, LSLParser.RULE_state_body);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===79) {
				{
				{
				this.state = 220;
				this.event();
				}
				}
				this.state = 225;
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
		this.enterRule(localctx, 46, LSLParser.RULE_event);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			this.match(LSLParser.Identifier);
			this.state = 227;
			this.match(LSLParser.LeftParen);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 228;
				this.function_parameters();
				}
			}

			this.state = 231;
			this.match(LSLParser.RightParen);
			this.state = 232;
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
		this.enterRule(localctx, 48, LSLParser.RULE_compound_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 234;
			this.match(LSLParser.LeftBrace);
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4285494782) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2428523689) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1039) !== 0)) {
				{
				{
				this.state = 235;
				this.statement();
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 241;
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LSLParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 243;
				this.match(LSLParser.Semi);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 244;
				this.declaration();
				this.state = 246;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 245;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 248;
				this.match(LSLParser.State);
				this.state = 249;
				this.identifier();
				this.state = 251;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 250;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 253;
				this.match(LSLParser.State);
				this.state = 254;
				this.match(LSLParser.StateDefault);
				this.state = 256;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 255;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 258;
				this.match(LSLParser.Jump);
				this.state = 259;
				this.identifier();
				this.state = 261;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 260;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 263;
				this.jump_label();
				this.state = 265;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 264;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 267;
				this.match(LSLParser.Return);
				this.state = 268;
				this.expression(0);
				this.state = 270;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 269;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 272;
				this.match(LSLParser.Return);
				this.state = 274;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 273;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 276;
				this.match(LSLParser.Break);
				this.state = 278;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 277;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 280;
				this.expression(0);
				this.state = 282;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 281;
					this.match(LSLParser.Semi);
					}
					break;
				}
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 284;
				this.compound_statement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 285;
				this.match(LSLParser.If);
				this.state = 286;
				this.match(LSLParser.LeftParen);
				this.state = 287;
				this.expression(0);
				this.state = 288;
				this.match(LSLParser.RightParen);
				this.state = 289;
				this.statement();
				this.state = 292;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 290;
					this.match(LSLParser.Else);
					this.state = 291;
					this.statement();
					}
					break;
				}
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 294;
				this.match(LSLParser.For);
				this.state = 295;
				this.match(LSLParser.LeftParen);
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 571737085) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 1064515) !== 0)) {
					{
					this.state = 296;
					this.forexpressionlist();
					}
				}

				this.state = 299;
				this.match(LSLParser.Semi);
				this.state = 300;
				this.expression(0);
				this.state = 301;
				this.match(LSLParser.Semi);
				this.state = 302;
				this.forexpressionlist();
				this.state = 303;
				this.match(LSLParser.RightParen);
				this.state = 304;
				this.statement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 306;
				this.match(LSLParser.Do);
				this.state = 307;
				this.statement();
				this.state = 308;
				this.match(LSLParser.While);
				this.state = 309;
				this.match(LSLParser.LeftParen);
				this.state = 310;
				this.expression(0);
				this.state = 311;
				this.match(LSLParser.RightParen);
				this.state = 312;
				this.match(LSLParser.Semi);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 314;
				this.match(LSLParser.While);
				this.state = 315;
				this.match(LSLParser.LeftParen);
				this.state = 316;
				this.expression(0);
				this.state = 317;
				this.match(LSLParser.RightParen);
				this.state = 318;
				this.statement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 320;
				this.match(LSLParser.Switch);
				this.state = 321;
				this.match(LSLParser.LeftParen);
				this.state = 322;
				this.expression(0);
				this.state = 323;
				this.match(LSLParser.RightParen);
				this.state = 324;
				this.match(LSLParser.LeftBrace);
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						this.state = 331;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 20:
							{
							this.state = 325;
							this.match(LSLParser.Case);
							this.state = 326;
							this.expression(0);
							this.state = 327;
							this.statement();
							}
							break;
						case 9:
							{
							this.state = 329;
							this.match(LSLParser.StateDefault);
							this.state = 330;
							this.statement();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 335;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				}
				this.state = 336;
				this.match(LSLParser.RightBrace);
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
	public jump_label(): Jump_labelContext {
		let localctx: Jump_labelContext = new Jump_labelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LSLParser.RULE_jump_label);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 340;
			this.match(LSLParser.At);
			this.state = 341;
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
	public iterable(): IterableContext {
		let localctx: IterableContext = new IterableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LSLParser.RULE_iterable);
		let _la: number;
		try {
			let _alt: number;
			this.state = 396;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 343;
				this.match(LSLParser.If);
				this.state = 344;
				this.match(LSLParser.LeftParen);
				this.state = 345;
				this.expression(0);
				this.state = 346;
				this.match(LSLParser.RightParen);
				this.state = 347;
				this.statement();
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===15) {
					{
					this.state = 348;
					this.match(LSLParser.Else);
					this.state = 349;
					this.statement();
					}
				}

				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 352;
				this.match(LSLParser.For);
				this.state = 353;
				this.match(LSLParser.LeftParen);
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 571737085) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 1064515) !== 0)) {
					{
					this.state = 354;
					this.forexpressionlist();
					}
				}

				this.state = 357;
				this.match(LSLParser.Semi);
				this.state = 358;
				this.expression(0);
				this.state = 359;
				this.match(LSLParser.Semi);
				this.state = 360;
				this.forexpressionlist();
				this.state = 361;
				this.match(LSLParser.RightParen);
				this.state = 362;
				this.statement();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 364;
				this.match(LSLParser.Do);
				this.state = 365;
				this.statement();
				this.state = 366;
				this.match(LSLParser.While);
				this.state = 367;
				this.match(LSLParser.LeftParen);
				this.state = 368;
				this.expression(0);
				this.state = 369;
				this.match(LSLParser.RightParen);
				this.state = 370;
				this.match(LSLParser.Semi);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 372;
				this.match(LSLParser.While);
				this.state = 373;
				this.match(LSLParser.LeftParen);
				this.state = 374;
				this.expression(0);
				this.state = 375;
				this.match(LSLParser.RightParen);
				this.state = 376;
				this.statement();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 378;
				this.match(LSLParser.Switch);
				this.state = 379;
				this.match(LSLParser.LeftParen);
				this.state = 380;
				this.expression(0);
				this.state = 381;
				this.match(LSLParser.RightParen);
				this.state = 382;
				this.match(LSLParser.LeftBrace);
				this.state = 391;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						this.state = 389;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 20:
							{
							this.state = 383;
							this.match(LSLParser.Case);
							this.state = 384;
							this.expression(0);
							this.state = 385;
							this.statement();
							}
							break;
						case 9:
							{
							this.state = 387;
							this.match(LSLParser.StateDefault);
							this.state = 388;
							this.statement();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 393;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
				}
				this.state = 394;
				this.match(LSLParser.RightBrace);
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
	public forexpressionlist(): ForexpressionlistContext {
		let localctx: ForexpressionlistContext = new ForexpressionlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, LSLParser.RULE_forexpressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 398;
			this.expression(0);
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 399;
				this.match(LSLParser.Comma);
				this.state = 400;
				this.expression(0);
				}
				}
				this.state = 405;
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
			this.state = 406;
			this.expression(0);
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 407;
				this.match(LSLParser.Comma);
				this.state = 408;
				this.expression(0);
				}
				}
				this.state = 413;
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
			this.state = 414;
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
			this.state = 416;
			this.expression(0);
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===38) {
				{
				{
				this.state = 417;
				this.match(LSLParser.Comma);
				this.state = 418;
				this.expression(0);
				}
				}
				this.state = 423;
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
			this.state = 450;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 425;
				this.unaryexpression();
				}
				break;
			case 2:
				{
				this.state = 426;
				this.lvalue();
				this.state = 427;
				this.match(LSLParser.Assign);
				this.state = 428;
				this.expression(24);
				}
				break;
			case 3:
				{
				this.state = 430;
				this.lvalue();
				this.state = 431;
				this.match(LSLParser.PlusAssign);
				this.state = 432;
				this.expression(23);
				}
				break;
			case 4:
				{
				this.state = 434;
				this.lvalue();
				this.state = 435;
				this.match(LSLParser.MinusAssign);
				this.state = 436;
				this.expression(22);
				}
				break;
			case 5:
				{
				this.state = 438;
				this.lvalue();
				this.state = 439;
				this.match(LSLParser.StarAssign);
				this.state = 440;
				this.expression(21);
				}
				break;
			case 6:
				{
				this.state = 442;
				this.lvalue();
				this.state = 443;
				this.match(LSLParser.DivAssign);
				this.state = 444;
				this.expression(20);
				}
				break;
			case 7:
				{
				this.state = 446;
				this.lvalue();
				this.state = 447;
				this.match(LSLParser.ModAssign);
				this.state = 448;
				this.expression(19);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 508;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 506;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 452;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 453;
						this.match(LSLParser.EQ);
						this.state = 454;
						this.expression(19);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 455;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 456;
						this.match(LSLParser.NEQ);
						this.state = 457;
						this.expression(18);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 458;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 459;
						this.match(LSLParser.LessEqual);
						this.state = 460;
						this.expression(17);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 461;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 462;
						this.match(LSLParser.GreaterEqual);
						this.state = 463;
						this.expression(16);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 464;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 465;
						this.match(LSLParser.Less);
						this.state = 466;
						this.expression(15);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 467;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 468;
						this.match(LSLParser.Greater);
						this.state = 469;
						this.expression(14);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 470;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 471;
						this.match(LSLParser.Plus);
						this.state = 472;
						this.expression(13);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 473;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 474;
						this.match(LSLParser.Minus);
						this.state = 475;
						this.expression(12);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 476;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 477;
						this.match(LSLParser.Asterisk);
						this.state = 478;
						this.expression(11);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 479;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 480;
						this.match(LSLParser.Slash);
						this.state = 481;
						this.expression(10);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 482;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 483;
						this.match(LSLParser.Mod);
						this.state = 484;
						this.expression(9);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 485;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 486;
						this.match(LSLParser.And);
						this.state = 487;
						this.expression(8);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 488;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 489;
						this.match(LSLParser.Or);
						this.state = 490;
						this.expression(7);
						}
						break;
					case 14:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 491;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 492;
						this.match(LSLParser.Caret);
						this.state = 493;
						this.expression(6);
						}
						break;
					case 15:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 494;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 495;
						this.match(LSLParser.AndAnd);
						this.state = 496;
						this.expression(5);
						}
						break;
					case 16:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 497;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 498;
						this.match(LSLParser.OrOr);
						this.state = 499;
						this.expression(4);
						}
						break;
					case 17:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 500;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 501;
						this.match(LSLParser.LeftShift);
						this.state = 502;
						this.expression(3);
						}
						break;
					case 18:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 503;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 504;
						this.match(LSLParser.RightShift);
						this.state = 505;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
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
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 511;
				this.match(LSLParser.Minus);
				this.state = 512;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 513;
				this.match(LSLParser.Not);
				this.state = 514;
				this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 515;
				this.match(LSLParser.Tilde);
				this.state = 516;
				this.expression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 517;
				this.match(LSLParser.PlusPlus);
				this.state = 518;
				this.lvalue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 519;
				this.match(LSLParser.MinusMinus);
				this.state = 520;
				this.lvalue();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 521;
				this.typecast();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 522;
				this.unarypostfixexpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 523;
				this.match(LSLParser.LeftParen);
				this.state = 524;
				this.expression(0);
				this.state = 525;
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
			this.state = 551;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 529;
				this.match(LSLParser.LeftParen);
				this.state = 530;
				this.typename();
				this.state = 531;
				this.match(LSLParser.RightParen);
				this.state = 532;
				this.lvalue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 534;
				this.match(LSLParser.LeftParen);
				this.state = 535;
				this.typename();
				this.state = 536;
				this.match(LSLParser.RightParen);
				this.state = 537;
				this.constant();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 539;
				this.match(LSLParser.LeftParen);
				this.state = 540;
				this.typename();
				this.state = 541;
				this.match(LSLParser.RightParen);
				this.state = 542;
				this.unarypostfixexpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 544;
				this.match(LSLParser.LeftParen);
				this.state = 545;
				this.typename();
				this.state = 546;
				this.match(LSLParser.RightParen);
				this.state = 547;
				this.match(LSLParser.LeftParen);
				this.state = 548;
				this.expression(0);
				this.state = 549;
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
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 553;
				this.vector_initializer();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 554;
				this.quaternion_initializer();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 555;
				this.list_initializer();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 556;
				this.lvalue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 557;
				this.lvalue();
				this.state = 558;
				this.match(LSLParser.PlusPlus);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 560;
				this.lvalue();
				this.state = 561;
				this.match(LSLParser.MinusMinus);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 563;
				this.identifier();
				this.state = 564;
				this.match(LSLParser.LeftParen);
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 571737085) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 1064515) !== 0)) {
					{
					this.state = 565;
					this.funcexpressionlist();
					}
				}

				this.state = 568;
				this.match(LSLParser.RightParen);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 570;
				this.match(LSLParser.Print);
				this.state = 571;
				this.match(LSLParser.LeftParen);
				this.state = 572;
				this.expression(0);
				this.state = 573;
				this.match(LSLParser.RightParen);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 575;
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
			this.state = 589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 578;
				this.match(LSLParser.Less);
				this.state = 579;
				this.expression(0);
				this.state = 580;
				this.match(LSLParser.Comma);
				this.state = 581;
				this.expression(0);
				this.state = 582;
				this.match(LSLParser.Comma);
				this.state = 583;
				this.expression(0);
				this.state = 584;
				this.match(LSLParser.Greater);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 586;
				this.match(LSLParser.ZeroVector);
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 587;
				this.match(LSLParser.TouchInvalidVector);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 588;
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
			this.state = 602;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 591;
				this.match(LSLParser.Less);
				this.state = 592;
				this.expression(0);
				this.state = 593;
				this.match(LSLParser.Comma);
				this.state = 594;
				this.expression(0);
				this.state = 595;
				this.match(LSLParser.Comma);
				this.state = 596;
				this.expression(0);
				this.state = 597;
				this.match(LSLParser.Comma);
				this.state = 598;
				this.expression(0);
				this.state = 599;
				this.match(LSLParser.Greater);
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 601;
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
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 604;
				this.match(LSLParser.LeftBracket);
				this.state = 605;
				this.listexpressionlist();
				this.state = 606;
				this.match(LSLParser.RightBracket);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 608;
				this.match(LSLParser.LeftBracket);
				this.state = 609;
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
			this.state = 617;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 612;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 613;
				this.identifier();
				this.state = 614;
				this.match(LSLParser.Dot);
				this.state = 615;
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
			this.state = 619;
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

	public static readonly _serializedATN: number[] = [4,1,79,622,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,1,0,1,0,1,0,1,0,5,0,87,8,0,10,0,12,0,90,9,0,1,0,1,0,1,
	1,1,1,1,1,1,1,3,1,98,8,1,1,2,1,2,1,3,1,3,5,3,104,8,3,10,3,12,3,107,9,3,
	1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,124,8,6,
	10,6,12,6,127,9,6,1,7,1,7,3,7,131,8,7,1,8,1,8,1,8,3,8,136,8,8,1,9,1,9,1,
	9,3,9,141,8,9,1,10,1,10,1,11,1,11,1,11,1,11,3,11,149,8,11,1,12,1,12,1,13,
	1,13,3,13,155,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
	14,3,14,168,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	3,15,181,8,15,1,16,1,16,3,16,185,8,16,1,16,1,16,1,17,1,17,1,17,5,17,192,
	8,17,10,17,12,17,195,9,17,1,18,1,18,1,19,3,19,200,8,19,1,19,1,19,1,19,3,
	19,205,8,19,1,19,1,19,1,19,1,20,1,20,1,20,5,20,213,8,20,10,20,12,20,216,
	9,20,1,21,1,21,1,21,1,22,5,22,222,8,22,10,22,12,22,225,9,22,1,23,1,23,1,
	23,3,23,230,8,23,1,23,1,23,1,23,1,24,1,24,5,24,237,8,24,10,24,12,24,240,
	9,24,1,24,1,24,1,25,1,25,1,25,3,25,247,8,25,1,25,1,25,1,25,3,25,252,8,25,
	1,25,1,25,1,25,3,25,257,8,25,1,25,1,25,1,25,3,25,262,8,25,1,25,1,25,3,25,
	266,8,25,1,25,1,25,1,25,3,25,271,8,25,1,25,1,25,3,25,275,8,25,1,25,1,25,
	3,25,279,8,25,1,25,1,25,3,25,283,8,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
	1,25,3,25,293,8,25,1,25,1,25,1,25,3,25,298,8,25,1,25,1,25,1,25,1,25,1,25,
	1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
	25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,332,
	8,25,10,25,12,25,335,9,25,1,25,1,25,3,25,339,8,25,1,26,1,26,1,26,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,3,27,351,8,27,1,27,1,27,1,27,3,27,356,8,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
	1,27,1,27,1,27,5,27,390,8,27,10,27,12,27,393,9,27,1,27,1,27,3,27,397,8,
	27,1,28,1,28,1,28,5,28,402,8,28,10,28,12,28,405,9,28,1,29,1,29,1,29,5,29,
	410,8,29,10,29,12,29,413,9,29,1,30,1,30,1,31,1,31,1,31,5,31,420,8,31,10,
	31,12,31,423,9,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,3,32,451,8,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,
	32,507,8,32,10,32,12,32,510,9,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,
	1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,528,8,33,1,34,1,34,1,34,1,
	34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
	1,34,1,34,1,34,1,34,3,34,552,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,35,3,35,567,8,35,1,35,1,35,1,35,1,35,1,35,1,35,
	1,35,1,35,3,35,577,8,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,
	36,1,36,3,36,590,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
	1,37,3,37,603,8,37,1,38,1,38,1,38,1,38,1,38,1,38,3,38,611,8,38,1,39,1,39,
	1,39,1,39,1,39,3,39,618,8,39,1,40,1,40,1,40,3,125,333,391,1,64,41,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,66,68,70,72,74,76,78,80,0,2,1,0,1,8,2,0,68,69,72,72,696,
	0,88,1,0,0,0,2,93,1,0,0,0,4,99,1,0,0,0,6,101,1,0,0,0,8,108,1,0,0,0,10,113,
	1,0,0,0,12,119,1,0,0,0,14,130,1,0,0,0,16,135,1,0,0,0,18,140,1,0,0,0,20,
	142,1,0,0,0,22,148,1,0,0,0,24,150,1,0,0,0,26,154,1,0,0,0,28,167,1,0,0,0,
	30,180,1,0,0,0,32,182,1,0,0,0,34,188,1,0,0,0,36,196,1,0,0,0,38,199,1,0,
	0,0,40,209,1,0,0,0,42,217,1,0,0,0,44,223,1,0,0,0,46,226,1,0,0,0,48,234,
	1,0,0,0,50,338,1,0,0,0,52,340,1,0,0,0,54,396,1,0,0,0,56,398,1,0,0,0,58,
	406,1,0,0,0,60,414,1,0,0,0,62,416,1,0,0,0,64,450,1,0,0,0,66,527,1,0,0,0,
	68,551,1,0,0,0,70,576,1,0,0,0,72,589,1,0,0,0,74,602,1,0,0,0,76,610,1,0,
	0,0,78,617,1,0,0,0,80,619,1,0,0,0,82,87,3,38,19,0,83,87,3,8,4,0,84,87,3,
	10,5,0,85,87,3,50,25,0,86,82,1,0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,
	1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,91,1,0,0,0,90,88,1,
	0,0,0,91,92,5,0,0,1,92,1,1,0,0,0,93,94,3,4,2,0,94,97,5,79,0,0,95,96,5,39,
	0,0,96,98,3,64,32,0,97,95,1,0,0,0,97,98,1,0,0,0,98,3,1,0,0,0,99,100,7,0,
	0,0,100,5,1,0,0,0,101,105,3,8,4,0,102,104,3,10,5,0,103,102,1,0,0,0,104,
	107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,7,1,0,0,0,107,105,1,0,0,
	0,108,109,5,9,0,0,109,110,5,44,0,0,110,111,3,44,22,0,111,112,5,45,0,0,112,
	9,1,0,0,0,113,114,5,10,0,0,114,115,5,79,0,0,115,116,5,44,0,0,116,117,3,
	44,22,0,117,118,5,45,0,0,118,11,1,0,0,0,119,120,3,4,2,0,120,125,3,80,40,
	0,121,122,5,39,0,0,122,124,3,14,7,0,123,121,1,0,0,0,124,127,1,0,0,0,125,
	126,1,0,0,0,125,123,1,0,0,0,126,13,1,0,0,0,127,125,1,0,0,0,128,131,3,16,
	8,0,129,131,3,32,16,0,130,128,1,0,0,0,130,129,1,0,0,0,131,15,1,0,0,0,132,
	136,5,79,0,0,133,136,3,18,9,0,134,136,3,26,13,0,135,132,1,0,0,0,135,133,
	1,0,0,0,135,134,1,0,0,0,136,17,1,0,0,0,137,141,3,22,11,0,138,141,3,20,10,
	0,139,141,5,65,0,0,140,137,1,0,0,0,140,138,1,0,0,0,140,139,1,0,0,0,141,
	19,1,0,0,0,142,143,5,71,0,0,143,21,1,0,0,0,144,149,5,70,0,0,145,149,3,24,
	12,0,146,149,5,24,0,0,147,149,5,25,0,0,148,144,1,0,0,0,148,145,1,0,0,0,
	148,146,1,0,0,0,148,147,1,0,0,0,149,23,1,0,0,0,150,151,7,1,0,0,151,25,1,
	0,0,0,152,155,3,28,14,0,153,155,3,30,15,0,154,152,1,0,0,0,154,153,1,0,0,
	0,155,27,1,0,0,0,156,157,5,51,0,0,157,158,3,14,7,0,158,159,5,38,0,0,159,
	160,3,14,7,0,160,161,5,38,0,0,161,162,3,14,7,0,162,163,5,50,0,0,163,168,
	1,0,0,0,164,168,5,26,0,0,165,168,5,28,0,0,166,168,5,29,0,0,167,156,1,0,
	0,0,167,164,1,0,0,0,167,165,1,0,0,0,167,166,1,0,0,0,168,29,1,0,0,0,169,
	170,5,51,0,0,170,171,3,14,7,0,171,172,5,38,0,0,172,173,3,14,7,0,173,174,
	5,38,0,0,174,175,3,14,7,0,175,176,5,38,0,0,176,177,3,14,7,0,177,178,5,50,
	0,0,178,181,1,0,0,0,179,181,5,27,0,0,180,169,1,0,0,0,180,179,1,0,0,0,181,
	31,1,0,0,0,182,184,5,42,0,0,183,185,3,34,17,0,184,183,1,0,0,0,184,185,1,
	0,0,0,185,186,1,0,0,0,186,187,5,43,0,0,187,33,1,0,0,0,188,193,3,36,18,0,
	189,190,5,38,0,0,190,192,3,36,18,0,191,189,1,0,0,0,192,195,1,0,0,0,193,
	191,1,0,0,0,193,194,1,0,0,0,194,35,1,0,0,0,195,193,1,0,0,0,196,197,3,16,
	8,0,197,37,1,0,0,0,198,200,3,4,2,0,199,198,1,0,0,0,199,200,1,0,0,0,200,
	201,1,0,0,0,201,202,3,80,40,0,202,204,5,40,0,0,203,205,3,40,20,0,204,203,
	1,0,0,0,204,205,1,0,0,0,205,206,1,0,0,0,206,207,5,41,0,0,207,208,3,48,24,
	0,208,39,1,0,0,0,209,214,3,42,21,0,210,211,5,38,0,0,211,213,3,42,21,0,212,
	210,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,41,1,0,
	0,0,216,214,1,0,0,0,217,218,3,4,2,0,218,219,3,80,40,0,219,43,1,0,0,0,220,
	222,3,46,23,0,221,220,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,
	0,0,0,224,45,1,0,0,0,225,223,1,0,0,0,226,227,5,79,0,0,227,229,5,40,0,0,
	228,230,3,40,20,0,229,228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,232,
	5,41,0,0,232,233,3,48,24,0,233,47,1,0,0,0,234,238,5,44,0,0,235,237,3,50,
	25,0,236,235,1,0,0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,
	241,1,0,0,0,240,238,1,0,0,0,241,242,5,45,0,0,242,49,1,0,0,0,243,339,5,37,
	0,0,244,246,3,2,1,0,245,247,5,37,0,0,246,245,1,0,0,0,246,247,1,0,0,0,247,
	339,1,0,0,0,248,249,5,10,0,0,249,251,3,80,40,0,250,252,5,37,0,0,251,250,
	1,0,0,0,251,252,1,0,0,0,252,339,1,0,0,0,253,254,5,10,0,0,254,256,5,9,0,
	0,255,257,5,37,0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,339,1,0,0,0,258,
	259,5,12,0,0,259,261,3,80,40,0,260,262,5,37,0,0,261,260,1,0,0,0,261,262,
	1,0,0,0,262,339,1,0,0,0,263,265,3,52,26,0,264,266,5,37,0,0,265,264,1,0,
	0,0,265,266,1,0,0,0,266,339,1,0,0,0,267,268,5,13,0,0,268,270,3,64,32,0,
	269,271,5,37,0,0,270,269,1,0,0,0,270,271,1,0,0,0,271,339,1,0,0,0,272,274,
	5,13,0,0,273,275,5,37,0,0,274,273,1,0,0,0,274,275,1,0,0,0,275,339,1,0,0,
	0,276,278,5,21,0,0,277,279,5,37,0,0,278,277,1,0,0,0,278,279,1,0,0,0,279,
	339,1,0,0,0,280,282,3,64,32,0,281,283,5,37,0,0,282,281,1,0,0,0,282,283,
	1,0,0,0,283,339,1,0,0,0,284,339,3,48,24,0,285,286,5,14,0,0,286,287,5,40,
	0,0,287,288,3,64,32,0,288,289,5,41,0,0,289,292,3,50,25,0,290,291,5,15,0,
	0,291,293,3,50,25,0,292,290,1,0,0,0,292,293,1,0,0,0,293,339,1,0,0,0,294,
	295,5,16,0,0,295,297,5,40,0,0,296,298,3,56,28,0,297,296,1,0,0,0,297,298,
	1,0,0,0,298,299,1,0,0,0,299,300,5,37,0,0,300,301,3,64,32,0,301,302,5,37,
	0,0,302,303,3,56,28,0,303,304,5,41,0,0,304,305,3,50,25,0,305,339,1,0,0,
	0,306,307,5,17,0,0,307,308,3,50,25,0,308,309,5,18,0,0,309,310,5,40,0,0,
	310,311,3,64,32,0,311,312,5,41,0,0,312,313,5,37,0,0,313,339,1,0,0,0,314,
	315,5,18,0,0,315,316,5,40,0,0,316,317,3,64,32,0,317,318,5,41,0,0,318,319,
	3,50,25,0,319,339,1,0,0,0,320,321,5,19,0,0,321,322,5,40,0,0,322,323,3,64,
	32,0,323,324,5,41,0,0,324,333,5,44,0,0,325,326,5,20,0,0,326,327,3,64,32,
	0,327,328,3,50,25,0,328,332,1,0,0,0,329,330,5,9,0,0,330,332,3,50,25,0,331,
	325,1,0,0,0,331,329,1,0,0,0,332,335,1,0,0,0,333,334,1,0,0,0,333,331,1,0,
	0,0,334,336,1,0,0,0,335,333,1,0,0,0,336,337,5,45,0,0,337,339,1,0,0,0,338,
	243,1,0,0,0,338,244,1,0,0,0,338,248,1,0,0,0,338,253,1,0,0,0,338,258,1,0,
	0,0,338,263,1,0,0,0,338,267,1,0,0,0,338,272,1,0,0,0,338,276,1,0,0,0,338,
	280,1,0,0,0,338,284,1,0,0,0,338,285,1,0,0,0,338,294,1,0,0,0,338,306,1,0,
	0,0,338,314,1,0,0,0,338,320,1,0,0,0,339,51,1,0,0,0,340,341,5,49,0,0,341,
	342,3,80,40,0,342,53,1,0,0,0,343,344,5,14,0,0,344,345,5,40,0,0,345,346,
	3,64,32,0,346,347,5,41,0,0,347,350,3,50,25,0,348,349,5,15,0,0,349,351,3,
	50,25,0,350,348,1,0,0,0,350,351,1,0,0,0,351,397,1,0,0,0,352,353,5,16,0,
	0,353,355,5,40,0,0,354,356,3,56,28,0,355,354,1,0,0,0,355,356,1,0,0,0,356,
	357,1,0,0,0,357,358,5,37,0,0,358,359,3,64,32,0,359,360,5,37,0,0,360,361,
	3,56,28,0,361,362,5,41,0,0,362,363,3,50,25,0,363,397,1,0,0,0,364,365,5,
	17,0,0,365,366,3,50,25,0,366,367,5,18,0,0,367,368,5,40,0,0,368,369,3,64,
	32,0,369,370,5,41,0,0,370,371,5,37,0,0,371,397,1,0,0,0,372,373,5,18,0,0,
	373,374,5,40,0,0,374,375,3,64,32,0,375,376,5,41,0,0,376,377,3,50,25,0,377,
	397,1,0,0,0,378,379,5,19,0,0,379,380,5,40,0,0,380,381,3,64,32,0,381,382,
	5,41,0,0,382,391,5,44,0,0,383,384,5,20,0,0,384,385,3,64,32,0,385,386,3,
	50,25,0,386,390,1,0,0,0,387,388,5,9,0,0,388,390,3,50,25,0,389,383,1,0,0,
	0,389,387,1,0,0,0,390,393,1,0,0,0,391,392,1,0,0,0,391,389,1,0,0,0,392,394,
	1,0,0,0,393,391,1,0,0,0,394,395,5,45,0,0,395,397,1,0,0,0,396,343,1,0,0,
	0,396,352,1,0,0,0,396,364,1,0,0,0,396,372,1,0,0,0,396,378,1,0,0,0,397,55,
	1,0,0,0,398,403,3,64,32,0,399,400,5,38,0,0,400,402,3,64,32,0,401,399,1,
	0,0,0,402,405,1,0,0,0,403,401,1,0,0,0,403,404,1,0,0,0,404,57,1,0,0,0,405,
	403,1,0,0,0,406,411,3,64,32,0,407,408,5,38,0,0,408,410,3,64,32,0,409,407,
	1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,411,412,1,0,0,0,412,59,1,0,0,0,
	413,411,1,0,0,0,414,415,3,62,31,0,415,61,1,0,0,0,416,421,3,64,32,0,417,
	418,5,38,0,0,418,420,3,64,32,0,419,417,1,0,0,0,420,423,1,0,0,0,421,419,
	1,0,0,0,421,422,1,0,0,0,422,63,1,0,0,0,423,421,1,0,0,0,424,425,6,32,-1,
	0,425,451,3,66,33,0,426,427,3,78,39,0,427,428,5,39,0,0,428,429,3,64,32,
	24,429,451,1,0,0,0,430,431,3,78,39,0,431,432,5,32,0,0,432,433,3,64,32,23,
	433,451,1,0,0,0,434,435,3,78,39,0,435,436,5,33,0,0,436,437,3,64,32,22,437,
	451,1,0,0,0,438,439,3,78,39,0,439,440,5,34,0,0,440,441,3,64,32,21,441,451,
	1,0,0,0,442,443,3,78,39,0,443,444,5,35,0,0,444,445,3,64,32,20,445,451,1,
	0,0,0,446,447,3,78,39,0,447,448,5,36,0,0,448,449,3,64,32,19,449,451,1,0,
	0,0,450,424,1,0,0,0,450,426,1,0,0,0,450,430,1,0,0,0,450,434,1,0,0,0,450,
	438,1,0,0,0,450,442,1,0,0,0,450,446,1,0,0,0,451,508,1,0,0,0,452,453,10,
	18,0,0,453,454,5,52,0,0,454,507,3,64,32,19,455,456,10,17,0,0,456,457,5,
	53,0,0,457,507,3,64,32,18,458,459,10,16,0,0,459,460,5,55,0,0,460,507,3,
	64,32,17,461,462,10,15,0,0,462,463,5,54,0,0,463,507,3,64,32,16,464,465,
	10,14,0,0,465,466,5,51,0,0,466,507,3,64,32,15,467,468,10,13,0,0,468,469,
	5,50,0,0,469,507,3,64,32,14,470,471,10,12,0,0,471,472,5,46,0,0,472,507,
	3,64,32,13,473,474,10,11,0,0,474,475,5,47,0,0,475,507,3,64,32,12,476,477,
	10,10,0,0,477,478,5,48,0,0,478,507,3,64,32,11,479,480,10,9,0,0,480,481,
	5,66,0,0,481,507,3,64,32,10,482,483,10,8,0,0,483,484,5,67,0,0,484,507,3,
	64,32,9,485,486,10,7,0,0,486,487,5,56,0,0,487,507,3,64,32,8,488,489,10,
	6,0,0,489,490,5,57,0,0,490,507,3,64,32,7,491,492,10,5,0,0,492,493,5,58,
	0,0,493,507,3,64,32,6,494,495,10,4,0,0,495,496,5,61,0,0,496,507,3,64,32,
	5,497,498,10,3,0,0,498,499,5,62,0,0,499,507,3,64,32,4,500,501,10,2,0,0,
	501,502,5,63,0,0,502,507,3,64,32,3,503,504,10,1,0,0,504,505,5,64,0,0,505,
	507,3,64,32,2,506,452,1,0,0,0,506,455,1,0,0,0,506,458,1,0,0,0,506,461,1,
	0,0,0,506,464,1,0,0,0,506,467,1,0,0,0,506,470,1,0,0,0,506,473,1,0,0,0,506,
	476,1,0,0,0,506,479,1,0,0,0,506,482,1,0,0,0,506,485,1,0,0,0,506,488,1,0,
	0,0,506,491,1,0,0,0,506,494,1,0,0,0,506,497,1,0,0,0,506,500,1,0,0,0,506,
	503,1,0,0,0,507,510,1,0,0,0,508,506,1,0,0,0,508,509,1,0,0,0,509,65,1,0,
	0,0,510,508,1,0,0,0,511,512,5,47,0,0,512,528,3,64,32,0,513,514,5,60,0,0,
	514,528,3,64,32,0,515,516,5,59,0,0,516,528,3,64,32,0,517,518,5,30,0,0,518,
	528,3,78,39,0,519,520,5,31,0,0,520,528,3,78,39,0,521,528,3,68,34,0,522,
	528,3,70,35,0,523,524,5,40,0,0,524,525,3,64,32,0,525,526,5,41,0,0,526,528,
	1,0,0,0,527,511,1,0,0,0,527,513,1,0,0,0,527,515,1,0,0,0,527,517,1,0,0,0,
	527,519,1,0,0,0,527,521,1,0,0,0,527,522,1,0,0,0,527,523,1,0,0,0,528,67,
	1,0,0,0,529,530,5,40,0,0,530,531,3,4,2,0,531,532,5,41,0,0,532,533,3,78,
	39,0,533,552,1,0,0,0,534,535,5,40,0,0,535,536,3,4,2,0,536,537,5,41,0,0,
	537,538,3,18,9,0,538,552,1,0,0,0,539,540,5,40,0,0,540,541,3,4,2,0,541,542,
	5,41,0,0,542,543,3,70,35,0,543,552,1,0,0,0,544,545,5,40,0,0,545,546,3,4,
	2,0,546,547,5,41,0,0,547,548,5,40,0,0,548,549,3,64,32,0,549,550,5,41,0,
	0,550,552,1,0,0,0,551,529,1,0,0,0,551,534,1,0,0,0,551,539,1,0,0,0,551,544,
	1,0,0,0,552,69,1,0,0,0,553,577,3,72,36,0,554,577,3,74,37,0,555,577,3,76,
	38,0,556,577,3,78,39,0,557,558,3,78,39,0,558,559,5,30,0,0,559,577,1,0,0,
	0,560,561,3,78,39,0,561,562,5,31,0,0,562,577,1,0,0,0,563,564,3,80,40,0,
	564,566,5,40,0,0,565,567,3,58,29,0,566,565,1,0,0,0,566,567,1,0,0,0,567,
	568,1,0,0,0,568,569,5,41,0,0,569,577,1,0,0,0,570,571,5,22,0,0,571,572,5,
	40,0,0,572,573,3,64,32,0,573,574,5,41,0,0,574,577,1,0,0,0,575,577,3,18,
	9,0,576,553,1,0,0,0,576,554,1,0,0,0,576,555,1,0,0,0,576,556,1,0,0,0,576,
	557,1,0,0,0,576,560,1,0,0,0,576,563,1,0,0,0,576,570,1,0,0,0,576,575,1,0,
	0,0,577,71,1,0,0,0,578,579,5,51,0,0,579,580,3,64,32,0,580,581,5,38,0,0,
	581,582,3,64,32,0,582,583,5,38,0,0,583,584,3,64,32,0,584,585,5,50,0,0,585,
	590,1,0,0,0,586,590,5,26,0,0,587,590,5,28,0,0,588,590,5,29,0,0,589,578,
	1,0,0,0,589,586,1,0,0,0,589,587,1,0,0,0,589,588,1,0,0,0,590,73,1,0,0,0,
	591,592,5,51,0,0,592,593,3,64,32,0,593,594,5,38,0,0,594,595,3,64,32,0,595,
	596,5,38,0,0,596,597,3,64,32,0,597,598,5,38,0,0,598,599,3,64,32,0,599,600,
	5,50,0,0,600,603,1,0,0,0,601,603,5,27,0,0,602,591,1,0,0,0,602,601,1,0,0,
	0,603,75,1,0,0,0,604,605,5,42,0,0,605,606,3,60,30,0,606,607,5,43,0,0,607,
	611,1,0,0,0,608,609,5,42,0,0,609,611,5,43,0,0,610,604,1,0,0,0,610,608,1,
	0,0,0,611,77,1,0,0,0,612,618,3,80,40,0,613,614,3,80,40,0,614,615,5,23,0,
	0,615,616,5,79,0,0,616,618,1,0,0,0,617,612,1,0,0,0,617,613,1,0,0,0,618,
	79,1,0,0,0,619,620,5,79,0,0,620,81,1,0,0,0,53,86,88,97,105,125,130,135,
	140,148,154,167,180,184,193,199,204,214,223,229,238,246,251,256,261,265,
	270,274,278,282,292,297,331,333,338,350,355,389,391,396,403,411,421,450,
	506,508,527,551,566,576,589,602,610,617];

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
	public global_function_list(): Global_functionContext[] {
		return this.getTypedRuleContexts(Global_functionContext) as Global_functionContext[];
	}
	public global_function(i: number): Global_functionContext {
		return this.getTypedRuleContext(Global_functionContext, i) as Global_functionContext;
	}
	public default_state_list(): Default_stateContext[] {
		return this.getTypedRuleContexts(Default_stateContext) as Default_stateContext[];
	}
	public default_state(i: number): Default_stateContext {
		return this.getTypedRuleContext(Default_stateContext, i) as Default_stateContext;
	}
	public llstate_list(): LlstateContext[] {
		return this.getTypedRuleContexts(LlstateContext) as LlstateContext[];
	}
	public llstate(i: number): LlstateContext {
		return this.getTypedRuleContext(LlstateContext, i) as LlstateContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
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
	public Assign_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Assign);
	}
	public Assign(i: number): TerminalNode {
		return this.getToken(LSLParser.Assign, i);
	}
	public simple_assignable_list(): Simple_assignableContext[] {
		return this.getTypedRuleContexts(Simple_assignableContext) as Simple_assignableContext[];
	}
	public simple_assignable(i: number): Simple_assignableContext {
		return this.getTypedRuleContext(Simple_assignableContext, i) as Simple_assignableContext;
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
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
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
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public State(): TerminalNode {
		return this.getToken(LSLParser.State, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public StateDefault_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.StateDefault);
	}
	public StateDefault(i: number): TerminalNode {
		return this.getToken(LSLParser.StateDefault, i);
	}
	public Jump(): TerminalNode {
		return this.getToken(LSLParser.Jump, 0);
	}
	public jump_label(): Jump_labelContext {
		return this.getTypedRuleContext(Jump_labelContext, 0) as Jump_labelContext;
	}
	public Return(): TerminalNode {
		return this.getToken(LSLParser.Return, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Break(): TerminalNode {
		return this.getToken(LSLParser.Break, 0);
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
	public Switch(): TerminalNode {
		return this.getToken(LSLParser.Switch, 0);
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(LSLParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(LSLParser.RightBrace, 0);
	}
	public Case_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Case);
	}
	public Case(i: number): TerminalNode {
		return this.getToken(LSLParser.Case, i);
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


export class Jump_labelContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public At(): TerminalNode {
		return this.getToken(LSLParser.At, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_jump_label;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterJump_label) {
	 		listener.enterJump_label(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitJump_label) {
	 		listener.exitJump_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitJump_label) {
			return visitor.visitJump_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterableContext extends ParserRuleContext {
	constructor(parser?: LSLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(LSLParser.If, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(LSLParser.LeftParen, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
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
	public Semi_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Semi);
	}
	public Semi(i: number): TerminalNode {
		return this.getToken(LSLParser.Semi, i);
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
	public Switch(): TerminalNode {
		return this.getToken(LSLParser.Switch, 0);
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(LSLParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(LSLParser.RightBrace, 0);
	}
	public Case_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.Case);
	}
	public Case(i: number): TerminalNode {
		return this.getToken(LSLParser.Case, i);
	}
	public StateDefault_list(): TerminalNode[] {
	    	return this.getTokens(LSLParser.StateDefault);
	}
	public StateDefault(i: number): TerminalNode {
		return this.getToken(LSLParser.StateDefault, i);
	}
    public get ruleIndex(): number {
    	return LSLParser.RULE_iterable;
	}
	public enterRule(listener: LSLParserListener): void {
	    if(listener.enterIterable) {
	 		listener.enterIterable(this);
		}
	}
	public exitRule(listener: LSLParserListener): void {
	    if(listener.exitIterable) {
	 		listener.exitIterable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LSLParserVisitor<Result>): Result {
		if (visitor.visitIterable) {
			return visitor.visitIterable(this);
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
