import * as vscode from 'vscode';

const tokenTypes = ['event', 'class', 'interface', 'enum', 'function', 'variable', '#define'];
const tokenModifiers = ['declaration', 'documentation'];
import { documentsMap } from './DocumentsMap';
import { Position } from './common';

import { Functions } from '../Functions';
import { Events } from '../Events';

const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

// import { getLocalSymbolesNode } from './ExtractVariablesAndFunctionsVisitor';


const provider: vscode.DocumentSemanticTokensProvider = {
	provideDocumentSemanticTokens(
		document: vscode.TextDocument
	): vscode.ProviderResult<vscode.SemanticTokens> {
		// analyze the document and return semantic tokens
		const doc = documentsMap.get(document.uri.path);
		const nodes = doc.parser.tokens.tokens.filter(
			e => e.type === doc.parser.lexer.ruleNames.indexOf("IdentifierNondigit")
				|| e.type === doc.parser.lexer.ruleNames.indexOf("Identifier")
				|| e.type === doc.parser.lexer.ruleNames.indexOf("State")
		);
		const tokensBuilder = new vscode.SemanticTokensBuilder(legend);

		for (const e of nodes) {
			let type = "";

			const ret = doc.parser.getLocalSymboles(doc.parser.tree, new Position(e.line + 1, e.column));
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
					e2.nodeType === "global_function"));
			if (t2.length > 0) {
				type = "function";
			}
			const ret3 = doc.parser.Symbols;
			const t3 = ret2.filter(e2 => e2.name === e.text
				&& (
					e2.nodeType === "state"));
			if (t3.length > 0) {
				type = "class";
			}
			if (e.type === doc.parser.lexer.ruleNames.indexOf("State"))
				type = "class";

			// search in the LSL buildin functions 
			const t4 = Functions.filter(e2 => e2.name === e.text);
			if (t4.length > 0) {
				type = 'function';
			}

			// search in the LSL buildin functions 
			const t5 = Events.filter(e2 => e2.name === e.text);
			if (t5.length > 0) {
				type = 'event';
			}

			if (type != "")
				tokensBuilder.push(
					new vscode.Range(new vscode.Position(e.line - 1, e.column), new vscode.Position(e.line - 1, e.column + e.text.length)),
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