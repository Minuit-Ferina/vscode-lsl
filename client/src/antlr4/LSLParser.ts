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
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 535787518) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 2428523689) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1039) !== 0)) {
				{
				this.state = 85;
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
					this.llstates();
					}
					break;
				case 3:
					{
					this.state = 84;
					this.statements();
					}
					break;
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
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
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 92;
				this.global_function();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 93;
				this.llstates();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 94;
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
			this.state = 97;
			this.typename();
			this.state = 98;
			this.match(LSLParser.Identifier);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 99;
				this.match(LSLParser.Assign);
				this.state = 100;
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
			this.state = 103;
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
			this.state = 105;
			this.default_state();
			this.state = 109;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 106;
					this.llstate();
					}
					}
				}
				this.state = 111;
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
	public default_state(): Default_stateContext {
		let localctx: Default_stateContext = new Default_stateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LSLParser.RULE_default_state);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 112;
			this.match(LSLParser.StateDefault);
			{
			this.state = 113;
			this.match(LSLParser.LeftBrace);
			this.state = 114;
			this.state_body();
			this.state = 115;
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
			this.state = 117;
			this.match(LSLParser.State);
			this.state = 118;
			this.match(LSLParser.Identifier);
			{
			this.state = 119;
			this.match(LSLParser.LeftBrace);
			this.state = 120;
			this.state_body();
			this.state = 121;
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
			this.state = 123;
			this.typename();
			this.state = 124;
			this.identifier();
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 125;
				this.match(LSLParser.Assign);
				this.state = 126;
				this.simple_assignable();
				}
			}

			this.state = 129;
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
			this.state = 133;
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
				this.state = 131;
				this.simple_assignable_no_list();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 132;
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
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 76:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 135;
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
				this.state = 136;
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
				this.state = 137;
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
			this.state = 143;
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
				this.state = 140;
				this.integer_constant();
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 141;
				this.fp_constant();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 142;
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
			this.state = 145;
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
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 67:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 147;
				this.match(LSLParser.StringLiteral);
				}
				break;
			case 65:
			case 66:
			case 69:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 148;
				this.numericLiteral();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 149;
				this.match(LSLParser.IntegerTrue);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 150;
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
			this.state = 153;
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
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 155;
				this.vector_constant();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 156;
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
			this.state = 170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 159;
				this.match(LSLParser.Less);
				this.state = 160;
				this.simple_assignable();
				this.state = 161;
				this.match(LSLParser.Comma);
				this.state = 162;
				this.simple_assignable();
				this.state = 163;
				this.match(LSLParser.Comma);
				this.state = 164;
				this.simple_assignable();
				this.state = 165;
				this.match(LSLParser.Greater);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 167;
				this.match(LSLParser.ZeroVector);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 168;
				this.match(LSLParser.TouchInvalidVector);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 169;
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
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 172;
				this.match(LSLParser.Less);
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
				this.match(LSLParser.Comma);
				this.state = 179;
				this.simple_assignable();
				this.state = 180;
				this.match(LSLParser.Greater);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 182;
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
			this.state = 185;
			this.match(LSLParser.LeftBracket);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 132120576) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 272515073) !== 0)) {
				{
				this.state = 186;
				this.list_entries();
				}
			}

			this.state = 189;
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
			this.state = 191;
			this.list_entry();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 192;
				this.match(LSLParser.Comma);
				this.state = 193;
				this.list_entry();
				}
				}
				this.state = 198;
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
			this.state = 199;
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
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 201;
				this.typename();
				}
			}

			this.state = 204;
			this.identifier();
			this.state = 205;
			this.match(LSLParser.LeftParen);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 206;
				this.function_parameters();
				}
			}

			this.state = 209;
			this.match(LSLParser.RightParen);
			this.state = 210;
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
			this.state = 212;
			this.function_parameter();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 213;
				this.match(LSLParser.Comma);
				this.state = 214;
				this.function_parameter();
				}
				}
				this.state = 219;
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
			this.state = 220;
			this.typename();
			this.state = 221;
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
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===76) {
				{
				{
				this.state = 223;
				this.event();
				}
				}
				this.state = 228;
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
			this.state = 229;
			this.match(LSLParser.Identifier);
			this.state = 230;
			this.match(LSLParser.LeftParen);
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 510) !== 0)) {
				{
				this.state = 231;
				this.function_parameters();
				}
			}

			this.state = 234;
			this.match(LSLParser.RightParen);
			this.state = 235;
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
			this.state = 237;
			this.match(LSLParser.LeftBrace);
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 535787006) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 2428523689) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 1039) !== 0)) {
				{
				this.state = 238;
				this.statements();
				}
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
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LSLParser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 244;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 243;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 246;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
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
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 248;
				this.match(LSLParser.Semi);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 249;
				this.match(LSLParser.State);
				this.state = 250;
				this.identifier();
				this.state = 251;
				this.match(LSLParser.Semi);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 253;
				this.match(LSLParser.State);
				this.state = 254;
				this.match(LSLParser.StateDefault);
				this.state = 255;
				this.match(LSLParser.Semi);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 256;
				this.match(LSLParser.Jump);
				this.state = 257;
				this.identifier();
				this.state = 258;
				this.match(LSLParser.Semi);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 260;
				this.match(LSLParser.At);
				this.state = 261;
				this.identifier();
				this.state = 262;
				this.match(LSLParser.Semi);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 264;
				this.match(LSLParser.Return);
				this.state = 265;
				this.expression(0);
				this.state = 266;
				this.match(LSLParser.Semi);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 268;
				this.match(LSLParser.Return);
				this.state = 269;
				this.match(LSLParser.Semi);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 270;
				this.expression(0);
				this.state = 271;
				this.match(LSLParser.Semi);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 273;
				this.declaration();
				this.state = 274;
				this.match(LSLParser.Semi);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 276;
				this.compound_statement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 277;
				this.match(LSLParser.If);
				this.state = 278;
				this.match(LSLParser.LeftParen);
				this.state = 279;
				this.expression(0);
				this.state = 280;
				this.match(LSLParser.RightParen);
				this.state = 281;
				this.statement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 283;
				this.match(LSLParser.If);
				this.state = 284;
				this.match(LSLParser.LeftParen);
				this.state = 285;
				this.expression(0);
				this.state = 286;
				this.match(LSLParser.RightParen);
				this.state = 287;
				this.statement();
				this.state = 288;
				this.match(LSLParser.Else);
				this.state = 289;
				this.statement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 291;
				this.match(LSLParser.For);
				this.state = 292;
				this.match(LSLParser.LeftParen);
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 571737085) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1064515) !== 0)) {
					{
					this.state = 293;
					this.forexpressionlist();
					}
				}

				this.state = 296;
				this.match(LSLParser.Semi);
				this.state = 297;
				this.expression(0);
				this.state = 298;
				this.match(LSLParser.Semi);
				this.state = 299;
				this.forexpressionlist();
				this.state = 300;
				this.match(LSLParser.RightParen);
				this.state = 301;
				this.statement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 303;
				this.match(LSLParser.Do);
				this.state = 304;
				this.statement();
				this.state = 305;
				this.match(LSLParser.While);
				this.state = 306;
				this.match(LSLParser.LeftParen);
				this.state = 307;
				this.expression(0);
				this.state = 308;
				this.match(LSLParser.RightParen);
				this.state = 309;
				this.match(LSLParser.Semi);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 311;
				this.match(LSLParser.While);
				this.state = 312;
				this.match(LSLParser.LeftParen);
				this.state = 313;
				this.expression(0);
				this.state = 314;
				this.match(LSLParser.RightParen);
				this.state = 315;
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
			this.state = 319;
			this.expression(0);
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 320;
				this.match(LSLParser.Comma);
				this.state = 321;
				this.expression(0);
				}
				}
				this.state = 326;
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
			this.state = 327;
			this.expression(0);
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 328;
				this.match(LSLParser.Comma);
				this.state = 329;
				this.expression(0);
				}
				}
				this.state = 334;
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
			this.state = 335;
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
			this.state = 337;
			this.expression(0);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 338;
				this.match(LSLParser.Comma);
				this.state = 339;
				this.expression(0);
				}
				}
				this.state = 344;
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
			this.state = 371;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 346;
				this.unaryexpression();
				}
				break;
			case 2:
				{
				this.state = 347;
				this.lvalue();
				this.state = 348;
				this.match(LSLParser.Assign);
				this.state = 349;
				this.expression(24);
				}
				break;
			case 3:
				{
				this.state = 351;
				this.lvalue();
				this.state = 352;
				this.match(LSLParser.PlusAssign);
				this.state = 353;
				this.expression(23);
				}
				break;
			case 4:
				{
				this.state = 355;
				this.lvalue();
				this.state = 356;
				this.match(LSLParser.MinusAssign);
				this.state = 357;
				this.expression(22);
				}
				break;
			case 5:
				{
				this.state = 359;
				this.lvalue();
				this.state = 360;
				this.match(LSLParser.StarAssign);
				this.state = 361;
				this.expression(21);
				}
				break;
			case 6:
				{
				this.state = 363;
				this.lvalue();
				this.state = 364;
				this.match(LSLParser.DivAssign);
				this.state = 365;
				this.expression(20);
				}
				break;
			case 7:
				{
				this.state = 367;
				this.lvalue();
				this.state = 368;
				this.match(LSLParser.ModAssign);
				this.state = 369;
				this.expression(19);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 429;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 427;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 373;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 374;
						this.match(LSLParser.EQ);
						this.state = 375;
						this.expression(19);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 376;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 377;
						this.match(LSLParser.NEQ);
						this.state = 378;
						this.expression(18);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 379;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 380;
						this.match(LSLParser.LessEqual);
						this.state = 381;
						this.expression(17);
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 382;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 383;
						this.match(LSLParser.GreaterEqual);
						this.state = 384;
						this.expression(16);
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 385;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 386;
						this.match(LSLParser.Less);
						this.state = 387;
						this.expression(15);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 388;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 389;
						this.match(LSLParser.Greater);
						this.state = 390;
						this.expression(14);
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 391;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 392;
						this.match(LSLParser.Plus);
						this.state = 393;
						this.expression(13);
						}
						break;
					case 8:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 394;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 395;
						this.match(LSLParser.Minus);
						this.state = 396;
						this.expression(12);
						}
						break;
					case 9:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 397;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 398;
						this.match(LSLParser.Asterisk);
						this.state = 399;
						this.expression(11);
						}
						break;
					case 10:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 400;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 401;
						this.match(LSLParser.Slash);
						this.state = 402;
						this.expression(10);
						}
						break;
					case 11:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 403;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 404;
						this.match(LSLParser.Mod);
						this.state = 405;
						this.expression(9);
						}
						break;
					case 12:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 406;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 407;
						this.match(LSLParser.And);
						this.state = 408;
						this.expression(8);
						}
						break;
					case 13:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 409;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 410;
						this.match(LSLParser.Or);
						this.state = 411;
						this.expression(7);
						}
						break;
					case 14:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 412;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 413;
						this.match(LSLParser.Caret);
						this.state = 414;
						this.expression(6);
						}
						break;
					case 15:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 415;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 416;
						this.match(LSLParser.AndAnd);
						this.state = 417;
						this.expression(5);
						}
						break;
					case 16:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 418;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 419;
						this.match(LSLParser.OrOr);
						this.state = 420;
						this.expression(4);
						}
						break;
					case 17:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 421;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 422;
						this.match(LSLParser.LeftShift);
						this.state = 423;
						this.expression(3);
						}
						break;
					case 18:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LSLParser.RULE_expression);
						this.state = 424;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 425;
						this.match(LSLParser.RightShift);
						this.state = 426;
						this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
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
			this.state = 448;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 432;
				this.match(LSLParser.Minus);
				this.state = 433;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 434;
				this.match(LSLParser.Not);
				this.state = 435;
				this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 436;
				this.match(LSLParser.Tilde);
				this.state = 437;
				this.expression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 438;
				this.match(LSLParser.PlusPlus);
				this.state = 439;
				this.lvalue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 440;
				this.match(LSLParser.MinusMinus);
				this.state = 441;
				this.lvalue();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 442;
				this.typecast();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 443;
				this.unarypostfixexpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 444;
				this.match(LSLParser.LeftParen);
				this.state = 445;
				this.expression(0);
				this.state = 446;
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
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 450;
				this.match(LSLParser.LeftParen);
				this.state = 451;
				this.typename();
				this.state = 452;
				this.match(LSLParser.RightParen);
				this.state = 453;
				this.lvalue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 455;
				this.match(LSLParser.LeftParen);
				this.state = 456;
				this.typename();
				this.state = 457;
				this.match(LSLParser.RightParen);
				this.state = 458;
				this.constant();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 460;
				this.match(LSLParser.LeftParen);
				this.state = 461;
				this.typename();
				this.state = 462;
				this.match(LSLParser.RightParen);
				this.state = 463;
				this.unarypostfixexpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 465;
				this.match(LSLParser.LeftParen);
				this.state = 466;
				this.typename();
				this.state = 467;
				this.match(LSLParser.RightParen);
				this.state = 468;
				this.match(LSLParser.LeftParen);
				this.state = 469;
				this.expression(0);
				this.state = 470;
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
			this.state = 497;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 474;
				this.vector_initializer();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 475;
				this.quaternion_initializer();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 476;
				this.list_initializer();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 477;
				this.lvalue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 478;
				this.lvalue();
				this.state = 479;
				this.match(LSLParser.PlusPlus);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 481;
				this.lvalue();
				this.state = 482;
				this.match(LSLParser.MinusMinus);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 484;
				this.identifier();
				this.state = 485;
				this.match(LSLParser.LeftParen);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 571737085) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1064515) !== 0)) {
					{
					this.state = 486;
					this.funcexpressionlist();
					}
				}

				this.state = 489;
				this.match(LSLParser.RightParen);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 491;
				this.match(LSLParser.Print);
				this.state = 492;
				this.match(LSLParser.LeftParen);
				this.state = 493;
				this.expression(0);
				this.state = 494;
				this.match(LSLParser.RightParen);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 496;
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
			this.state = 510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 499;
				this.match(LSLParser.Less);
				this.state = 500;
				this.expression(0);
				this.state = 501;
				this.match(LSLParser.Comma);
				this.state = 502;
				this.expression(0);
				this.state = 503;
				this.match(LSLParser.Comma);
				this.state = 504;
				this.expression(0);
				this.state = 505;
				this.match(LSLParser.Greater);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 507;
				this.match(LSLParser.ZeroVector);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 508;
				this.match(LSLParser.TouchInvalidVector);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 509;
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
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 512;
				this.match(LSLParser.Less);
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
				this.match(LSLParser.Comma);
				this.state = 519;
				this.expression(0);
				this.state = 520;
				this.match(LSLParser.Greater);
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 522;
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
			this.state = 531;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 525;
				this.match(LSLParser.LeftBracket);
				this.state = 526;
				this.listexpressionlist();
				this.state = 527;
				this.match(LSLParser.RightBracket);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 529;
				this.match(LSLParser.LeftBracket);
				this.state = 530;
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
			this.state = 538;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 533;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 534;
				this.identifier();
				this.state = 535;
				this.match(LSLParser.Dot);
				this.state = 536;
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
			this.state = 540;
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

	public static readonly _serializedATN: number[] = [4,1,76,543,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,1,0,1,0,1,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,1,0,1,1,1,
	1,1,1,3,1,96,8,1,1,2,1,2,1,2,1,2,3,2,102,8,2,1,3,1,3,1,4,1,4,5,4,108,8,
	4,10,4,12,4,111,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,
	1,7,1,7,3,7,128,8,7,1,7,1,7,1,8,1,8,3,8,134,8,8,1,9,1,9,1,9,3,9,139,8,9,
	1,10,1,10,1,10,3,10,144,8,10,1,11,1,11,1,12,1,12,1,12,1,12,3,12,152,8,12,
	1,13,1,13,1,14,1,14,3,14,158,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,3,15,171,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
	1,16,1,16,1,16,3,16,184,8,16,1,17,1,17,3,17,188,8,17,1,17,1,17,1,18,1,18,
	1,18,5,18,195,8,18,10,18,12,18,198,9,18,1,19,1,19,1,20,3,20,203,8,20,1,
	20,1,20,1,20,3,20,208,8,20,1,20,1,20,1,20,1,21,1,21,1,21,5,21,216,8,21,
	10,21,12,21,219,9,21,1,22,1,22,1,22,1,23,5,23,225,8,23,10,23,12,23,228,
	9,23,1,24,1,24,1,24,3,24,233,8,24,1,24,1,24,1,24,1,25,1,25,3,25,240,8,25,
	1,25,1,25,1,26,4,26,245,8,26,11,26,12,26,246,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,295,8,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,318,8,27,1,28,1,28,1,28,5,28,323,
	8,28,10,28,12,28,326,9,28,1,29,1,29,1,29,5,29,331,8,29,10,29,12,29,334,
	9,29,1,30,1,30,1,31,1,31,1,31,5,31,341,8,31,10,31,12,31,344,9,31,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,372,8,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,428,8,32,10,32,12,32,
	431,9,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,
	33,1,33,1,33,1,33,3,33,449,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
	1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,
	34,473,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
	1,35,3,35,488,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,498,8,35,
	1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,511,8,36,1,
	37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,524,8,37,1,38,
	1,38,1,38,1,38,1,38,1,38,3,38,532,8,38,1,39,1,39,1,39,1,39,1,39,3,39,539,
	8,39,1,40,1,40,1,40,0,1,64,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
	80,0,2,1,0,1,8,2,0,65,66,69,69,598,0,87,1,0,0,0,2,95,1,0,0,0,4,97,1,0,0,
	0,6,103,1,0,0,0,8,105,1,0,0,0,10,112,1,0,0,0,12,117,1,0,0,0,14,123,1,0,
	0,0,16,133,1,0,0,0,18,138,1,0,0,0,20,143,1,0,0,0,22,145,1,0,0,0,24,151,
	1,0,0,0,26,153,1,0,0,0,28,157,1,0,0,0,30,170,1,0,0,0,32,183,1,0,0,0,34,
	185,1,0,0,0,36,191,1,0,0,0,38,199,1,0,0,0,40,202,1,0,0,0,42,212,1,0,0,0,
	44,220,1,0,0,0,46,226,1,0,0,0,48,229,1,0,0,0,50,237,1,0,0,0,52,244,1,0,
	0,0,54,317,1,0,0,0,56,319,1,0,0,0,58,327,1,0,0,0,60,335,1,0,0,0,62,337,
	1,0,0,0,64,371,1,0,0,0,66,448,1,0,0,0,68,472,1,0,0,0,70,497,1,0,0,0,72,
	510,1,0,0,0,74,523,1,0,0,0,76,531,1,0,0,0,78,538,1,0,0,0,80,540,1,0,0,0,
	82,86,3,40,20,0,83,86,3,8,4,0,84,86,3,52,26,0,85,82,1,0,0,0,85,83,1,0,0,
	0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,
	89,87,1,0,0,0,90,91,5,0,0,1,91,1,1,0,0,0,92,96,3,40,20,0,93,96,3,8,4,0,
	94,96,3,52,26,0,95,92,1,0,0,0,95,93,1,0,0,0,95,94,1,0,0,0,96,3,1,0,0,0,
	97,98,3,6,3,0,98,101,5,76,0,0,99,100,5,36,0,0,100,102,3,64,32,0,101,99,
	1,0,0,0,101,102,1,0,0,0,102,5,1,0,0,0,103,104,7,0,0,0,104,7,1,0,0,0,105,
	109,3,10,5,0,106,108,3,12,6,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,
	0,0,0,109,110,1,0,0,0,110,9,1,0,0,0,111,109,1,0,0,0,112,113,5,9,0,0,113,
	114,5,41,0,0,114,115,3,46,23,0,115,116,5,42,0,0,116,11,1,0,0,0,117,118,
	5,10,0,0,118,119,5,76,0,0,119,120,5,41,0,0,120,121,3,46,23,0,121,122,5,
	42,0,0,122,13,1,0,0,0,123,124,3,6,3,0,124,127,3,80,40,0,125,126,5,36,0,
	0,126,128,3,16,8,0,127,125,1,0,0,0,127,128,1,0,0,0,128,129,1,0,0,0,129,
	130,5,34,0,0,130,15,1,0,0,0,131,134,3,18,9,0,132,134,3,34,17,0,133,131,
	1,0,0,0,133,132,1,0,0,0,134,17,1,0,0,0,135,139,5,76,0,0,136,139,3,20,10,
	0,137,139,3,28,14,0,138,135,1,0,0,0,138,136,1,0,0,0,138,137,1,0,0,0,139,
	19,1,0,0,0,140,144,3,24,12,0,141,144,3,22,11,0,142,144,5,62,0,0,143,140,
	1,0,0,0,143,141,1,0,0,0,143,142,1,0,0,0,144,21,1,0,0,0,145,146,5,68,0,0,
	146,23,1,0,0,0,147,152,5,67,0,0,148,152,3,26,13,0,149,152,5,21,0,0,150,
	152,5,22,0,0,151,147,1,0,0,0,151,148,1,0,0,0,151,149,1,0,0,0,151,150,1,
	0,0,0,152,25,1,0,0,0,153,154,7,1,0,0,154,27,1,0,0,0,155,158,3,30,15,0,156,
	158,3,32,16,0,157,155,1,0,0,0,157,156,1,0,0,0,158,29,1,0,0,0,159,160,5,
	48,0,0,160,161,3,16,8,0,161,162,5,35,0,0,162,163,3,16,8,0,163,164,5,35,
	0,0,164,165,3,16,8,0,165,166,5,47,0,0,166,171,1,0,0,0,167,171,5,23,0,0,
	168,171,5,25,0,0,169,171,5,26,0,0,170,159,1,0,0,0,170,167,1,0,0,0,170,168,
	1,0,0,0,170,169,1,0,0,0,171,31,1,0,0,0,172,173,5,48,0,0,173,174,3,16,8,
	0,174,175,5,35,0,0,175,176,3,16,8,0,176,177,5,35,0,0,177,178,3,16,8,0,178,
	179,5,35,0,0,179,180,3,16,8,0,180,181,5,47,0,0,181,184,1,0,0,0,182,184,
	5,24,0,0,183,172,1,0,0,0,183,182,1,0,0,0,184,33,1,0,0,0,185,187,5,39,0,
	0,186,188,3,36,18,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,
	190,5,40,0,0,190,35,1,0,0,0,191,196,3,38,19,0,192,193,5,35,0,0,193,195,
	3,38,19,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,
	0,197,37,1,0,0,0,198,196,1,0,0,0,199,200,3,18,9,0,200,39,1,0,0,0,201,203,
	3,6,3,0,202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,205,3,80,40,
	0,205,207,5,37,0,0,206,208,3,42,21,0,207,206,1,0,0,0,207,208,1,0,0,0,208,
	209,1,0,0,0,209,210,5,38,0,0,210,211,3,50,25,0,211,41,1,0,0,0,212,217,3,
	44,22,0,213,214,5,35,0,0,214,216,3,44,22,0,215,213,1,0,0,0,216,219,1,0,
	0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,43,1,0,0,0,219,217,1,0,0,0,220,
	221,3,6,3,0,221,222,3,80,40,0,222,45,1,0,0,0,223,225,3,48,24,0,224,223,
	1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,47,1,0,0,0,
	228,226,1,0,0,0,229,230,5,76,0,0,230,232,5,37,0,0,231,233,3,42,21,0,232,
	231,1,0,0,0,232,233,1,0,0,0,233,234,1,0,0,0,234,235,5,38,0,0,235,236,3,
	50,25,0,236,49,1,0,0,0,237,239,5,41,0,0,238,240,3,52,26,0,239,238,1,0,0,
	0,239,240,1,0,0,0,240,241,1,0,0,0,241,242,5,42,0,0,242,51,1,0,0,0,243,245,
	3,54,27,0,244,243,1,0,0,0,245,246,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,
	0,247,53,1,0,0,0,248,318,5,34,0,0,249,250,5,10,0,0,250,251,3,80,40,0,251,
	252,5,34,0,0,252,318,1,0,0,0,253,254,5,10,0,0,254,255,5,9,0,0,255,318,5,
	34,0,0,256,257,5,12,0,0,257,258,3,80,40,0,258,259,5,34,0,0,259,318,1,0,
	0,0,260,261,5,46,0,0,261,262,3,80,40,0,262,263,5,34,0,0,263,318,1,0,0,0,
	264,265,5,13,0,0,265,266,3,64,32,0,266,267,5,34,0,0,267,318,1,0,0,0,268,
	269,5,13,0,0,269,318,5,34,0,0,270,271,3,64,32,0,271,272,5,34,0,0,272,318,
	1,0,0,0,273,274,3,4,2,0,274,275,5,34,0,0,275,318,1,0,0,0,276,318,3,50,25,
	0,277,278,5,14,0,0,278,279,5,37,0,0,279,280,3,64,32,0,280,281,5,38,0,0,
	281,282,3,54,27,0,282,318,1,0,0,0,283,284,5,14,0,0,284,285,5,37,0,0,285,
	286,3,64,32,0,286,287,5,38,0,0,287,288,3,54,27,0,288,289,5,15,0,0,289,290,
	3,54,27,0,290,318,1,0,0,0,291,292,5,16,0,0,292,294,5,37,0,0,293,295,3,56,
	28,0,294,293,1,0,0,0,294,295,1,0,0,0,295,296,1,0,0,0,296,297,5,34,0,0,297,
	298,3,64,32,0,298,299,5,34,0,0,299,300,3,56,28,0,300,301,5,38,0,0,301,302,
	3,54,27,0,302,318,1,0,0,0,303,304,5,17,0,0,304,305,3,54,27,0,305,306,5,
	18,0,0,306,307,5,37,0,0,307,308,3,64,32,0,308,309,5,38,0,0,309,310,5,34,
	0,0,310,318,1,0,0,0,311,312,5,18,0,0,312,313,5,37,0,0,313,314,3,64,32,0,
	314,315,5,38,0,0,315,316,3,54,27,0,316,318,1,0,0,0,317,248,1,0,0,0,317,
	249,1,0,0,0,317,253,1,0,0,0,317,256,1,0,0,0,317,260,1,0,0,0,317,264,1,0,
	0,0,317,268,1,0,0,0,317,270,1,0,0,0,317,273,1,0,0,0,317,276,1,0,0,0,317,
	277,1,0,0,0,317,283,1,0,0,0,317,291,1,0,0,0,317,303,1,0,0,0,317,311,1,0,
	0,0,318,55,1,0,0,0,319,324,3,64,32,0,320,321,5,35,0,0,321,323,3,64,32,0,
	322,320,1,0,0,0,323,326,1,0,0,0,324,322,1,0,0,0,324,325,1,0,0,0,325,57,
	1,0,0,0,326,324,1,0,0,0,327,332,3,64,32,0,328,329,5,35,0,0,329,331,3,64,
	32,0,330,328,1,0,0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,333,1,0,0,0,333,
	59,1,0,0,0,334,332,1,0,0,0,335,336,3,62,31,0,336,61,1,0,0,0,337,342,3,64,
	32,0,338,339,5,35,0,0,339,341,3,64,32,0,340,338,1,0,0,0,341,344,1,0,0,0,
	342,340,1,0,0,0,342,343,1,0,0,0,343,63,1,0,0,0,344,342,1,0,0,0,345,346,
	6,32,-1,0,346,372,3,66,33,0,347,348,3,78,39,0,348,349,5,36,0,0,349,350,
	3,64,32,24,350,372,1,0,0,0,351,352,3,78,39,0,352,353,5,29,0,0,353,354,3,
	64,32,23,354,372,1,0,0,0,355,356,3,78,39,0,356,357,5,30,0,0,357,358,3,64,
	32,22,358,372,1,0,0,0,359,360,3,78,39,0,360,361,5,31,0,0,361,362,3,64,32,
	21,362,372,1,0,0,0,363,364,3,78,39,0,364,365,5,32,0,0,365,366,3,64,32,20,
	366,372,1,0,0,0,367,368,3,78,39,0,368,369,5,33,0,0,369,370,3,64,32,19,370,
	372,1,0,0,0,371,345,1,0,0,0,371,347,1,0,0,0,371,351,1,0,0,0,371,355,1,0,
	0,0,371,359,1,0,0,0,371,363,1,0,0,0,371,367,1,0,0,0,372,429,1,0,0,0,373,
	374,10,18,0,0,374,375,5,49,0,0,375,428,3,64,32,19,376,377,10,17,0,0,377,
	378,5,50,0,0,378,428,3,64,32,18,379,380,10,16,0,0,380,381,5,52,0,0,381,
	428,3,64,32,17,382,383,10,15,0,0,383,384,5,51,0,0,384,428,3,64,32,16,385,
	386,10,14,0,0,386,387,5,48,0,0,387,428,3,64,32,15,388,389,10,13,0,0,389,
	390,5,47,0,0,390,428,3,64,32,14,391,392,10,12,0,0,392,393,5,43,0,0,393,
	428,3,64,32,13,394,395,10,11,0,0,395,396,5,44,0,0,396,428,3,64,32,12,397,
	398,10,10,0,0,398,399,5,45,0,0,399,428,3,64,32,11,400,401,10,9,0,0,401,
	402,5,63,0,0,402,428,3,64,32,10,403,404,10,8,0,0,404,405,5,64,0,0,405,428,
	3,64,32,9,406,407,10,7,0,0,407,408,5,53,0,0,408,428,3,64,32,8,409,410,10,
	6,0,0,410,411,5,54,0,0,411,428,3,64,32,7,412,413,10,5,0,0,413,414,5,55,
	0,0,414,428,3,64,32,6,415,416,10,4,0,0,416,417,5,58,0,0,417,428,3,64,32,
	5,418,419,10,3,0,0,419,420,5,59,0,0,420,428,3,64,32,4,421,422,10,2,0,0,
	422,423,5,60,0,0,423,428,3,64,32,3,424,425,10,1,0,0,425,426,5,61,0,0,426,
	428,3,64,32,2,427,373,1,0,0,0,427,376,1,0,0,0,427,379,1,0,0,0,427,382,1,
	0,0,0,427,385,1,0,0,0,427,388,1,0,0,0,427,391,1,0,0,0,427,394,1,0,0,0,427,
	397,1,0,0,0,427,400,1,0,0,0,427,403,1,0,0,0,427,406,1,0,0,0,427,409,1,0,
	0,0,427,412,1,0,0,0,427,415,1,0,0,0,427,418,1,0,0,0,427,421,1,0,0,0,427,
	424,1,0,0,0,428,431,1,0,0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,65,1,0,
	0,0,431,429,1,0,0,0,432,433,5,44,0,0,433,449,3,64,32,0,434,435,5,57,0,0,
	435,449,3,64,32,0,436,437,5,56,0,0,437,449,3,64,32,0,438,439,5,27,0,0,439,
	449,3,78,39,0,440,441,5,28,0,0,441,449,3,78,39,0,442,449,3,68,34,0,443,
	449,3,70,35,0,444,445,5,37,0,0,445,446,3,64,32,0,446,447,5,38,0,0,447,449,
	1,0,0,0,448,432,1,0,0,0,448,434,1,0,0,0,448,436,1,0,0,0,448,438,1,0,0,0,
	448,440,1,0,0,0,448,442,1,0,0,0,448,443,1,0,0,0,448,444,1,0,0,0,449,67,
	1,0,0,0,450,451,5,37,0,0,451,452,3,6,3,0,452,453,5,38,0,0,453,454,3,78,
	39,0,454,473,1,0,0,0,455,456,5,37,0,0,456,457,3,6,3,0,457,458,5,38,0,0,
	458,459,3,20,10,0,459,473,1,0,0,0,460,461,5,37,0,0,461,462,3,6,3,0,462,
	463,5,38,0,0,463,464,3,70,35,0,464,473,1,0,0,0,465,466,5,37,0,0,466,467,
	3,6,3,0,467,468,5,38,0,0,468,469,5,37,0,0,469,470,3,64,32,0,470,471,5,38,
	0,0,471,473,1,0,0,0,472,450,1,0,0,0,472,455,1,0,0,0,472,460,1,0,0,0,472,
	465,1,0,0,0,473,69,1,0,0,0,474,498,3,72,36,0,475,498,3,74,37,0,476,498,
	3,76,38,0,477,498,3,78,39,0,478,479,3,78,39,0,479,480,5,27,0,0,480,498,
	1,0,0,0,481,482,3,78,39,0,482,483,5,28,0,0,483,498,1,0,0,0,484,485,3,80,
	40,0,485,487,5,37,0,0,486,488,3,58,29,0,487,486,1,0,0,0,487,488,1,0,0,0,
	488,489,1,0,0,0,489,490,5,38,0,0,490,498,1,0,0,0,491,492,5,19,0,0,492,493,
	5,37,0,0,493,494,3,64,32,0,494,495,5,38,0,0,495,498,1,0,0,0,496,498,3,20,
	10,0,497,474,1,0,0,0,497,475,1,0,0,0,497,476,1,0,0,0,497,477,1,0,0,0,497,
	478,1,0,0,0,497,481,1,0,0,0,497,484,1,0,0,0,497,491,1,0,0,0,497,496,1,0,
	0,0,498,71,1,0,0,0,499,500,5,48,0,0,500,501,3,64,32,0,501,502,5,35,0,0,
	502,503,3,64,32,0,503,504,5,35,0,0,504,505,3,64,32,0,505,506,5,47,0,0,506,
	511,1,0,0,0,507,511,5,23,0,0,508,511,5,25,0,0,509,511,5,26,0,0,510,499,
	1,0,0,0,510,507,1,0,0,0,510,508,1,0,0,0,510,509,1,0,0,0,511,73,1,0,0,0,
	512,513,5,48,0,0,513,514,3,64,32,0,514,515,5,35,0,0,515,516,3,64,32,0,516,
	517,5,35,0,0,517,518,3,64,32,0,518,519,5,35,0,0,519,520,3,64,32,0,520,521,
	5,47,0,0,521,524,1,0,0,0,522,524,5,24,0,0,523,512,1,0,0,0,523,522,1,0,0,
	0,524,75,1,0,0,0,525,526,5,39,0,0,526,527,3,60,30,0,527,528,5,40,0,0,528,
	532,1,0,0,0,529,530,5,39,0,0,530,532,5,40,0,0,531,525,1,0,0,0,531,529,1,
	0,0,0,532,77,1,0,0,0,533,539,3,80,40,0,534,535,3,80,40,0,535,536,5,20,0,
	0,536,537,5,76,0,0,537,539,1,0,0,0,538,533,1,0,0,0,538,534,1,0,0,0,539,
	79,1,0,0,0,540,541,5,76,0,0,541,81,1,0,0,0,38,85,87,95,101,109,127,133,
	138,143,151,157,170,183,187,196,202,207,217,226,232,239,246,294,317,324,
	332,342,371,427,429,448,472,487,497,510,523,531,538];

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
	public llstates_list(): LlstatesContext[] {
		return this.getTypedRuleContexts(LlstatesContext) as LlstatesContext[];
	}
	public llstates(i: number): LlstatesContext {
		return this.getTypedRuleContext(LlstatesContext, i) as LlstatesContext;
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
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
