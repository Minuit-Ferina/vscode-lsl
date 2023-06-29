import * as vscode from 'vscode';

import { documentsMap } from './DocumentsMap';
import { list } from './common';

const IncTrack: Array<string> = [];


export function CompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionList<vscode.CompletionItem>> | vscode.CompletionItem[] {
	// IncTrack = [];
	const doc = documentsMap.get(document.uri.path);

	const returnList = new vscode.CompletionList();
	const ret = doc.parser.getLocalSymboles(doc.parser.tree, position);

	for (const e of ret) {
		// ret.forEach(e => {
		if (e.nodeType === "variable_declaration") {
			const kind = vscode.CompletionItemKind.Variable;
			const t = new vscode.CompletionItem(e.name,
				kind);
			returnList.items.push(t);
		}
	}

	doc.parser.getDocumentSymboles(doc.parser.tree);
	const ret2 = doc.parser.Symbols;
	for (const e of ret2) {
		if (e.nodeType === "global_function_declaration") {
			const kind = vscode.CompletionItemKind.Function;
			const t = new vscode.CompletionItem(e.name,
				kind);
			returnList.items.push(t);
		}
		if (e.nodeType === "global_variable_declaration") {
			const kind = vscode.CompletionItemKind.Variable;
			const t = new vscode.CompletionItem(e.name,
				kind);
			returnList.items.push(t);
		}
		if (e.nodeType === "state_declaration") {
			const kind = vscode.CompletionItemKind.Class;
			const t = new vscode.CompletionItem(e.name,
				kind);
			returnList.items.push(t);
		}

	}

	IncTrack.push(document.uri.path);

	return returnList.items.concat(list.items);
}
