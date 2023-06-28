import { Token, CommonToken, ParseTreeVisitor, CharStream, CommonTokenStream, ParseTreeWalker, FileStream, ParseTree, TerminalNode, ErrorNode, ErrorListener, RecognitionException, Recognizer } from 'antlr4';
import LSLLexer from '../antlr4/LSLLexer';
import LSLParser, { Compound_statementContext, DeclarationContext, Default_stateContext, EventContext, Function_parameterContext, Function_parametersContext, GlobalContext, Global_functionContext, Global_variableContext, IdentifierContext, LlstateContext, Lscript_programContext, Name_typeContext } from '../antlr4/LSLParser';
import LSLVisitor, { } from '../antlr4/LSLParserVisitor';
import { error } from 'console';

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

class ExpressionNode {
    nodeType: string;
    type: string;
    name: string;
    signature: string;
    range: Range;

    constructor(name, type, signature, nodeType, range) {
        this.name = name;
        this.type = type;
        this.signature = signature;
        this.nodeType = nodeType;
        this.range = range;
    }
}

interface lslerror {
    line: number, column: number, msg: string
}

class LSLError extends ErrorListener<Token>
{
    errors: Array<lslerror>;
    constructor() {
        super();
        this.errors = new Array<lslerror>;
    }
    syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException): void {
        this.errors.push({ line: line, column: column, msg: msg });
        console.log(msg);
    }
}

export class ExtractVariablesAndFunctionsVisitor extends LSLVisitor<Array<ExpressionNode> | ExpressionNode | string> {
    level: number;
    completionList: Array<string>;
    signatureMap: Map<string, ExpressionNode>;
    symbolsList: Array<ExpressionNode>;

    errors: LSLError;

    constructor() {
        super();

        this.errors = new LSLError();

        this.completionList = new Array<string>;
        this.signatureMap = new Map<string, ExpressionNode>;
        this.symbolsList = new Array<ExpressionNode>;
    }

    visitName_type = (ctx: Name_typeContext) => {
        const type = ctx.typename().getText();
        const name = (this.visit(ctx.identifier()) as ExpressionNode).name;
        const signature = type + " " + name;
        const c = new ExpressionNode(name, type, signature, "",
            new Range(
                new Position(ctx.start.line, ctx.start.column),
                new Position(ctx.stop.line, ctx.stop.column))
        );
        return c;
    };
    visitIdentifier = (ctx: IdentifierContext): ExpressionNode => {
        const name = ctx.Identifier().getText();
        const signature = name;
        const c = new ExpressionNode(name, "", signature, "identifier",
            new Range(
                new Position(ctx.start.line, ctx.start.column),
                new Position(ctx.stop.line, ctx.stop.column))
        );
        return c;
    };
    visitFunction_parameters = (ctx: Function_parametersContext): ExpressionNode | string => {
        this.level++;
        const params = this.visitChildren(ctx) as Array<ExpressionNode>;
        let out = "";
        if (params.length > 0)
            out += params[0];
        for (let c = 2; c < params.length; c += 2) {
            out += ", " + params[c];
        }
        // c.signature = out;

        for (let c = 0; c < params.length; c += 2) {
            // console.log(e);
            const e = params[c];
            this.completionList.push(e.name);
            this.signatureMap.set(e.name, e);
            const c1 = new ExpressionNode(
                e.name, e.type, e.signature, "variable",
                e.range
            );

            this.symbolsList.push(c1);
        }
        this.level--;
        return out;
    };

    visitFunction_parameter = (ctx: Function_parameterContext) => {
        const type = ctx.name_type().typename().getText();
        const name = ctx.name_type().identifier().getText();
        const signature = type + " " + name;
        const c = new ExpressionNode(name, type, signature, "variable",
            new Range(
                new Position(ctx.start.line, ctx.start.column),
                new Position(ctx.stop.line, ctx.stop.column))
        );
        return c;
    };

    visitGlobal_function = (ctx: Global_functionContext) => {
        let paramList = "";
        if (ctx.function_parameters())
            paramList = this.visit(ctx.function_parameters())as string;


        const nodeType = "function";
        const type = (this.visit(ctx.getChild(0)) as ExpressionNode).type;
        const name = (this.visit(ctx.getChild(0)) as ExpressionNode).name;
        const signature = type + " " + name + "(" + paramList.toString() + ")";
        const c = new ExpressionNode(name, type, signature, nodeType,
            new Range(
                new Position(ctx.start.line, ctx.start.column),
                new Position(ctx.stop.line, ctx.stop.column))
        );

        console.log("global function : " + c.signature);
        this.completionList.push(c.name);
        this.signatureMap.set(c.name, c);

        this.visitChildren(ctx.compound_statement());

        // throw("error");
        return c;
    };
    visitGlobal_variable = (ctx: Global_variableContext) => {
        const nodeType = "variable";
        const type = (this.visit(ctx.name_type()) as ExpressionNode).type;
        const name = (this.visit(ctx.name_type()) as ExpressionNode).name;
        const signature = (this.visit(ctx.name_type()) as ExpressionNode).signature;
        const c = new ExpressionNode(name, type, signature, nodeType, 
            new Range(
                new Position(ctx.start.line, ctx.start.column),
                new Position(ctx.stop.line, ctx.stop.column))
            );
        this.completionList.push(c.name);
        this.signatureMap.set(c.name, c);

        console.log("global variable : " + c.signature);
        return c;
    };

    visitGlobal = (ctx: GlobalContext) => {
        this.visitChildren(ctx);
        return "";
    };
    visitLscript_program = (ctx: Lscript_programContext) => {
        this.visitChildren(ctx);
        return "";
    };

    visitDefault_state = (ctx: Default_stateContext) => {
        this.visitChildren(ctx);
        return "";
    };
    visitLlstate = (ctx: LlstateContext) => {
        this.visitChildren(ctx);
        return "";
    };

    visitDeclaration = (ctx: DeclarationContext) => {
        const type = ctx.typename().getText();
        const name = ctx.Identifier().getText();

        console.log(type + " " + name);
        return "";
    };
    visitEvent = (ctx: EventContext) => {
        const name = ctx.Identifier().getText();
        let params = "";
        if (ctx.function_parameters()) {
            const t = this.visit(ctx.function_parameters()) as ExpressionNode;
            params = t.signature;
        }
        this.visitChildren(ctx.compound_statement());
        console.log("event: " + name + "(" + params + ")");
        // const t = ctx.Identifier().getText() + "(" + (this.visit(ctx.function_parameters()) as ExpressionNode).signature + ")";
        return "";
    };


    visitErrorNode(node: ErrorNode): string | ExpressionNode | ExpressionNode[] {
        // console.log(node);
        return "";
    }

}

// export function visit(code: string): ExtractVariablesAndFunctionsVisitor {
//     const chars = new CharStream(code);
//     const lexer = new LSLLexer(chars);

//     const tokens = new CommonTokenStream(lexer);
//     const parser = new LSLParser(tokens);
//     // let error = new lslerror;
//     parser.buildParseTrees = true;

//     const t = new ExtractVariablesAndFunctionsVisitor();
//     parser.addErrorListener(t.errors);
//     const tree = parser.lscript_program();

//     t.visit(tree);
//     return t;
// }