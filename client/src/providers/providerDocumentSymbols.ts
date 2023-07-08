
import * as vscode from 'vscode';
import { documentsMap, document } from './DocumentsMap';

import { SymbolsNode } from './ExtractVariablesAndFunctionsVisitor';
import { outputChannel } from './common';


export async function providerDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
	// console.log("providerDocumentSymbols");
	// outputChannel.appendLine("providerDocumentSymbols");
	let doc: document;

	if (documentsMap.has(document.uri.path))
		doc = documentsMap.get(document.uri.path);
	else {
		// await diag(document.getText(), document.uri);
		doc = documentsMap.get(document.uri.path);
	}

	// token.onCancellationRequested(() => {
	// doc.parser.cancel();
	// });
	const ret = await doc.parser.getDocumentSymboles(document.getText());

	if (ret) {
		const t = SymbolsNode2DocumentSymboles(ret, token);
		// console.log("providerDocumentSymbols done");
		// outputChannel.appendLine("providerDocumentSymbols done");
		return t;
	}
	return [];
}


function SymbolsNode2DocumentSymboles(sym: SymbolsNode, token: vscode.CancellationToken): vscode.DocumentSymbol[] {
	let kind;
	if (sym.nodeType === "default_state")
		kind = vscode.SymbolKind.Class;
	if (sym.nodeType === "state")
		kind = vscode.SymbolKind.Class;
	if (sym.nodeType === "event")
		kind = vscode.SymbolKind.Event;
	if (sym.nodeType === 'variable_declaration')
		kind = vscode.SymbolKind.Variable;
	if (sym.nodeType === 'global_function')
		kind = vscode.SymbolKind.Function;
	if (sym.nodeType === 'function_parameter')
		kind = vscode.SymbolKind.Variable;

	const out = new Array<vscode.DocumentSymbol>;
	if (kind) {
		const docSym = new vscode.DocumentSymbol(sym.name, "", kind,
			new vscode.Range(
				new vscode.Position(sym.range.start.row, sym.range.start.col),
				new vscode.Position(sym.range.end.row, sym.range.end.col)
			),
			new vscode.Range(
				new vscode.Position(sym.range.start.row, sym.range.start.col),
				new vscode.Position(sym.range.end.row, sym.range.end.col)
			));

		for (const e of sym.childrens) {
			if (token.isCancellationRequested)
				break;
			if (e) {
				const t = SymbolsNode2DocumentSymboles(e, token);
				docSym.children.push(...t);
			}
		}

		out.push(docSym);
		return out;
	}
	else {

		for (const e of sym.childrens) {
			if (token.isCancellationRequested)
				break;
			if (e) {
				const t = SymbolsNode2DocumentSymboles(e, token);
				out.push(...t);
			}
		}
		return out;
	}

}


