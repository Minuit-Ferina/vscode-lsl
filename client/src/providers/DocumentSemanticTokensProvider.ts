import * as vscode from 'vscode';

const tokenTypes = ['label', 'event', 'class', 'interface', 'enum', 'function', 'variable', '#define'];
const tokenModifiers = ['declaration', 'documentation'];
import { documentsMap } from './DocumentsMap';
import { Position, outputChannel } from './common';

import { Functions } from '../Functions';
import { Events } from '../Events';

const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

// import { getLocalSymbolesNode } from './ExtractVariablesAndFunctionsVisitor';


const provider: vscode.DocumentSemanticTokensProvider = {
	async provideDocumentSemanticTokens(
		document: vscode.TextDocument,
		token: vscode.CancellationToken
	) {
		// analyze the document and return semantic tokens
		// console.log("provideDocumentSemanticTokens");
		// outputChannel.appendLine("provideDocumentSemanticTokens");
		const doc = documentsMap.get(document.uri.path);
		await doc.parser.getDocumentSymboles(document.getText());
		const nodes = doc.parser.tokens.filter(
			e => e.type === doc.parser.lexerRulesNames.indexOf("IdentifierNondigit")
				|| e.type === doc.parser.lexerRulesNames.indexOf("Identifier")
				|| e.type === doc.parser.lexerRulesNames.indexOf("State")
		);
		const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
		for (const e of nodes) {
			if (token.isCancellationRequested)
				break;

			let type = "";
			// doc.parser.cancelToken = token;
			// token.onCancellationRequested(() => {
			// doc.parser.cancel();
			// });

			// search in the LSL builtin functions
			if (Functions.exist(e.text)) {
				type = 'function';
			}
			else if (Events.exist(e.text)) {
				type = 'event';
			}
			else {
				const localSymboles = doc.parser.getL(e.tokenIndex, e.tokenIndex);
				const t = localSymboles.filter(e2 => e2.name === e.text
					&& (
						e2.nodeType === "variable_declaration"
						|| e2.nodeType === 'function_parameter'));
				if (t.length > 0) {
					type = "variable";
				}
				else {
					const ret2 = doc.parser.Symbols;
					const t2 = ret2.filter(e2 => e2.name === e.text
						&& (
							e2.nodeType === "global_function"));
					if (t2.length > 0) {
						type = "function";
					}
					else {
						const t3 = ret2.filter(e2 => e2.name === e.text
							&& (
								e2.nodeType === "label_declaration"));
						if (t3.length > 0) {
							type = "label";
						}
						else {

							const t3 = ret2.filter(e2 => e2.name === e.text
								&& (
									e2.nodeType === "state"));
							if (t3.length > 0) {
								type = "class";
							}

							else if (e.type === doc.parser.lexerRulesNames.indexOf("State"))
								type = "class";

						}
					}
				}
			}

			if (type != "") {
				tokensBuilder.push(
					new vscode.Range(new vscode.Position(e.line - 1, e.column), new vscode.Position(e.line - 1, e.column + e.text.length)),
					type,
					[]
				);
			}
			// else
			// outputChannel.appendLine(e.text);
		}
		// console.log("provideDocumentSemanticTokens done");
		// outputChannel.appendLine("provideDocumentSemanticTokens done");
		if(!token.isCancellationRequested)
			return tokensBuilder.build();
	}
};

const selector = { language: 'lsl', scheme: 'file' }; // register for all Java documents from the local file system

export function register() {
	vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);
}