import * as vscode from 'vscode';

const tokenTypes = ['class', 'interface', 'enum', 'function', 'variable', '#define'];
const tokenModifiers = ['declaration', 'documentation'];
import { documentsMap } from './DocumentsMap';
import { Position } from './common';

const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

// import { getLocalSymbolesNode } from './ExtractVariablesAndFunctionsVisitor';


const provider: vscode.DocumentSemanticTokensProvider = {
	provideDocumentSemanticTokens(
		document: vscode.TextDocument
	): vscode.ProviderResult<vscode.SemanticTokens> {
		// analyze the document and return semantic tokens
		const doc = documentsMap.get(document.uri.path);
		const ruleIdentifierNondigit = doc.parser.lexer.ruleNames.indexOf("IdentifierNondigit");
		const ruleIdentifier = doc.parser.lexer.ruleNames.indexOf("Identifier");

		const nodes = doc.parser.tokens.tokens.filter(e => e.type === ruleIdentifierNondigit || e.type === ruleIdentifier);
		const tokensBuilder = new vscode.SemanticTokensBuilder(legend);

		for (const e of nodes) {

			let type = "";

			const ret = doc.parser.getLocalSymboles(doc.parser.tree, new Position(e.line+1, e.column));
			const t = ret.filter(e2 => e2.name === e.text
				&& (
					e2.nodeType === "variable_declaration"
					|| e2.nodeType === 'function_parameter'));
			if (t.length > 0) {
				type = "variable";
			}
			const ret2 = doc.parser.Symbols;
			const t2 = ret2.filter(e2 => e2.name === e.text
				&& (
					e2.nodeType === "global_function"
					|| e2.nodeType === "state"));
			if (t2.length > 0) {
				type = "function";
			}


			if (type != "")
				tokensBuilder.push(
					new vscode.Range(new vscode.Position(e.line, e.column), new vscode.Position(e.line, e.column + e.text.length)),
					type,
					[]
				);
			// else
			// 		console.log(e.text);
		}

		return tokensBuilder.build();
	}
};

const selector = { language: 'lsl', scheme: 'file' }; // register for all Java documents from the local file system

export function register() {
	vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);
}