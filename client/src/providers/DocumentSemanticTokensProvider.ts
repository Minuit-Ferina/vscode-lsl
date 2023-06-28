import * as vscode from 'vscode';

const tokenTypes = ['class', 'interface', 'enum', 'function', 'variable', '#define'];
const tokenModifiers = ['declaration', 'documentation'];
import { documentsMap } from './DocumentsMap';

const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

// import { getLocalSymbolesNode } from './ExtractVariablesAndFunctionsVisitor';


const provider: vscode.DocumentSemanticTokensProvider = {
	provideDocumentSemanticTokens(
		document: vscode.TextDocument
	): vscode.ProviderResult<vscode.SemanticTokens> {
		// analyze the document and return semantic tokens
		const doc = documentsMap.get(document.uri.path);
		const nodes = doc.parser.getLocalSymbolesNode(doc.parser.tree);
		const tokensBuilder = 	new vscode.SemanticTokensBuilder(legend);
		nodes.forEach(e=>{
			tokensBuilder.push(
				new vscode.Range(new vscode.Position(e.startLine, e.startColumn), new vscode.Position(e.endLine, e.endColumn)),
				e.type,
				['declaration']
			);
			
		});
		return tokensBuilder.build();		
	}
};

const selector = { language: 'lsl', scheme: 'file' }; // register for all Java documents from the local file system

export function register() {
	vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);
}