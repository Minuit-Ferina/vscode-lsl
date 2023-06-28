import * as vscode from 'vscode';

import { documentsMap } from './DocumentsMap';

const IncTrack: Array<string> = [];


export function CompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionList<vscode.CompletionItem>> | vscode.CompletionItem[] {
	// IncTrack = [];
	const doc = documentsMap.get(document.uri.path);

	//	if (context.triggerKind != 0)
	//		console.log("d");
	// if (!doc || !doc.CompletionList)
	// 	return list;

	// let returnList = list.items.concat(doc.CompletionList.items);
	// IncTrack.push(document.uri.path);

	// returnList = returnList.concat(getDocCompletionList(document.uri.path, token));

	// const unique = [...new Set(returnList)];
	// return unique;

	const ret = doc.parser.getLocalSymboles(doc.parser.tree, position);
	return [];
}


function getDocCompletionList(uri: string, token: vscode.CancellationToken): Array<vscode.CompletionItem> {
	const doc = documentsMap.get(uri);

	const returnList = new vscode.CompletionList();

	if (!IncTrack.includes(doc.Uri.path))
		returnList.items = returnList.items.concat(doc.CompletionList.items);

	for (const e of doc.IncludedDoc) {
		if (token.isCancellationRequested)
			return [];

		if (!IncTrack.includes(e))
			returnList.items = returnList.items.concat(getDocCompletionList(e, token));
	}

	return returnList.items;
}