
import * as vscode from 'vscode';
import { documentsMap, document } from './DocumentsMap';

import { SymbolsNode } from './ExtractVariablesAndFunctionsVisitor';


export async function providerDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
	let doc: document;

	if (documentsMap.has(document.uri.path))
		doc = documentsMap.get(document.uri.path);
	else {
		// await diag(document.getText(), document.uri);
		doc = documentsMap.get(document.uri.path);
	}
	const ret = doc.parser.getDocumentSymboles(doc.parser.tree);

	const t = SymbolsNode2DocumentSymboles(ret);
	return t;
}


function SymbolsNode2DocumentSymboles(sym: SymbolsNode): vscode.DocumentSymbol[] {
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
		const docSym = new vscode.DocumentSymbol(sym.name, "", kind, sym.range.toVSCodeRange(), sym.range.toVSCodeRange());

		for (const e of sym.childrens) {
			const t = SymbolsNode2DocumentSymboles(e);
			docSym.children.push(...t);
		}

		out.push(docSym);
		return out;
	}
	else {

		for (const e of sym.childrens) {
			const t = SymbolsNode2DocumentSymboles(e);
			out.push(...t);
		}
		return out;
	}

}

