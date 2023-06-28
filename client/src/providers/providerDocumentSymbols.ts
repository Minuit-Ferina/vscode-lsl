
import * as vscode from 'vscode';
import { documentsMap, document } from './DocumentsMap';

// import { getDocumentSymboles } from './ExtractVariablesAndFunctionsVisitor';


export async function providerDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]> {
	let doc: document;

	if (documentsMap.has(document.uri.path))
		doc = documentsMap.get(document.uri.path);
	else {
		// await diag(document.getText(), document.uri);
		doc = documentsMap.get(document.uri.path);
	}
	const ret = doc.parser.getDocumentSymboles(doc.parser.tree);
	return ret;
}






