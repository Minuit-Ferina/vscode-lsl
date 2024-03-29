import * as vscode from 'vscode';

import { documentsMap } from './DocumentsMap';
import { list, Position } from './common';

const IncTrack: Array<string> = [];


export function CompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionList<vscode.CompletionItem>> | vscode.CompletionItem[] {
	// IncTrack = [];
	const doc = documentsMap.get(document.uri.path);

	const returnList = new vscode.CompletionList();
	// doc.parser.cancelToken = token;
	{
		const ret = doc.parser.getR(Position.fromVSPosition(position));
		for (const e of ret) {
			if (token.isCancellationRequested)
				break;

			// ret.forEach(e => {
			if (e.nodeType === "variable_declaration" || e.nodeType === "function_parameter") {
				const kind = vscode.CompletionItemKind.Variable;
				const t = new vscode.CompletionItem(e.name,
					kind);
				returnList.items.push(t);
			}
		}
	}
	{
		// doc.parser.getDocumentSymboles(document.getText());
		const ret = doc.parser.Symbols;
		for (const e of ret) {
			if (token.isCancellationRequested)
				break;

			if (e.nodeType === "global_function") {
				const kind = vscode.CompletionItemKind.Function;
				const t = new vscode.CompletionItem(e.name,
					kind);
				returnList.items.push(t);
			}
			if (e.nodeType === "state") {
				const kind = vscode.CompletionItemKind.Class;
				const t = new vscode.CompletionItem(e.name,
					kind);
				returnList.items.push(t);
			}
			if (e.nodeType === "label_declaration") {
				const kind = vscode.CompletionItemKind.Reference;
				const t = new vscode.CompletionItem(e.name,
					kind);
				returnList.items.push(t);
			}
		}
	}

	IncTrack.push(document.uri.path);

	return returnList.items.concat(list.items);
}
