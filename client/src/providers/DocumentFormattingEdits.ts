
import * as vscode from 'vscode';

import {documentsMap, document} from './DocumentsMap';



export function DocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken) {
	let doc: document;
	if (documentsMap.has(document.uri.path))
		doc = documentsMap.get(document.uri.path);
	else {
		return;
	}

	const outArray = [];
	// for (let c = 1; c < doc.Tokens.tockenStream.length; c++) {
	if (token.isCancellationRequested)
		return [];

	// console.log(doc.Tokens.tockenStream[c]);

	// if(doc.Tokens.tockenStream[c].tokenClass == TokenClass.)
	// const range = new vscode.Range(
	// 	new vscode.Position(doc.Tokens.tockenStream[c - 1].range.end.row, doc.Tokens.tockenStream[c - 1].range.end.col),
	// 	new vscode.Position(doc.Tokens.tockenStream[c].range.start.row, doc.Tokens.tockenStream[c].range.start.col));

	// const Line = document.getText(range);
	// const nlines = Line.split("\n").length - 1;

	const tabSize = vscode.workspace.getConfiguration("editor", this.resource).get<number>("tabSize");
	const editorInsertSpaces = vscode.workspace.getConfiguration("editor", this.resource).get<number>("insertSpaces");

	let indent = "";
	if (editorInsertSpaces)
		for (let c = 0; c < tabSize; c++)
			indent += " ";
	else
		indent = "\t";

	// let newString = "";
	// for (let c1 = 0; c1 < nlines; c1++)
	// 	newString += "\n";

	// for (let c1 = 0; c1 < doc.Tokens.tockenStream[c].level; c1++) {
	// 	newString += indent;

	// }
	// outArray.unshift(vscode.TextEdit.replace(range, newString));


	// vscode.TextEdit.insert(firstLine.range.start, '42\n');
	// }
	// for(let c = 0; c < document.lineCount; c++)
	// {

	// }



	return outArray;
	// const firstLine = document.lineAt(0);
	// if (firstLine.text !== '42') {
	// 	return [vscode.TextEdit.insert(firstLine.range.start, '42\n')];
	// }
}
