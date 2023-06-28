

import * as vscode from 'vscode';
import { ExtractVariablesAndFunctionsVisitor } from './ExtractVariablesAndFunctionsVisitor';


export interface document {
	Diagnostic: Array<vscode.Diagnostic>,
	IncludedDoc: Array<string>,
	// Tokens: code,
	Uri: vscode.Uri,
	isTokenized: boolean,
	CompletionList?: vscode.CompletionList<vscode.CompletionItem>,
	Worker?: Worker,
	isParsing?: boolean,
	// document: vscode.TextDocument,
	parser?: ExtractVariablesAndFunctionsVisitor
	// tree: Lscript_programContext
}


export const documentsMap: Map<string, document> = new Map();
