/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as os from 'os';

import * as vscode from 'vscode';

import * as lsl from './lslParce';
import * as semanticProvider from './DocumentSemanticTokensProvider';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

let outputChannel: vscode.OutputChannel;

export async function activate(context: vscode.ExtensionContext) {

	outputChannel = vscode.window.createOutputChannel("LSL-Tool");


	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(function (textEditor) {
		// outputChannel.appendLine("onDidChangeConfiguration");
		// outputChannel.show(true);
		lsl.onDidChangeConfiguration(textEditor);
	}));


	context.subscriptions.push(lsl.lslDiagnostics);

	context.subscriptions.push(vscode.workspace.onDidChangeWorkspaceFolders(async function (event) {
		if (event.added[0].name === "lsl") {
			console.log("");
		}
	}));

	context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(async function (event) {
		if (event.languageId === "lsl") {
			// outputChannel.appendLine("onDidChangeTextDocument");
			// outputChannel.show(true);
			lsl.onDidOpenTextDocument(event);
		}

	}));

	context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(function (event) {
		if (event.document.languageId === "lsl") {
			// outputChannel.appendLine("onDidChangeTextDocument");
			// outputChannel.show(true);

			// const index = lineOfText.text.indexOf(EMOJI);
			// const range = new vscode.Range(2, index, 2, index + 2);

			// const diagnostics: vscode.Diagnostic[] = [];
			// const diagnostic = new vscode.Diagnostic(range, "When you say 'emoji', do you want to find out more?",
			// 	vscode.DiagnosticSeverity.Information);

			// diagnostics.push(diagnostic);
			// diagnostic.code = 102;
			// lslDiagnostics.set(textEditor.document.uri, diagnostics);

			// outputChannel.appendLine("reason: " + event.reason.toString());
			// outputChannel.show(true);

			lsl.onDidChangeTextDocument(event);
		}
	}));

	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'lsl' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
		},
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'languageServerExample',
		'Language Server Example',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	// client.start();

	// semanticProvider.register();

	vscode.languages.registerHoverProvider("lsl", {
		async provideHover(document, position) {
			return lsl.provideHover(document, position);
		}
	});

	vscode.languages.registerDocumentSymbolProvider("lsl", {
		provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken) {
			return lsl.provideDocumentSymbols(document, token);
		}
	});

	vscode.languages.registerCompletionItemProvider("lsl", {
		async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

			// outputChannel.appendLine("provideCompletionItems");
			// outputChannel.show(true);

			return lsl.CompletionItems(document);
		}
	});

	vscode.languages.registerSignatureHelpProvider('lsl', {
		async provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
			return lsl.provideSignatureHelp(document, position, token);
		}
	},
		'(', ',');

	// vscode.languages.registerInlineCompletionItemProvider("lsl", {
	// 	async provideInlineCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
	// 		const word = document.getText(
	// 			document.getWordRangeAtPosition(position)  //  /\b\w+(?=\(.*\))/
	// 		);

	// 		// const resource = document.uri;

	// 		// const line = document.lineAt(position).text;
	// 		// const lineTrimmed = line.substring(0, position.character);
	// 		// const len = lineTrimmed.length;

	// 		if (word === "defaul")
	// 			return [Object.assign({ text: "\nstate_entry()\n{\n}{\n}" })];
	// 		// return new vscode.InlineCompletionList(
	// 		// [new vscode.InlineCompletionItem("\nstate_entry()\n{\n}{\n}")]
	// 		// );
	// 	}
	// }
	// );

	lsl.init();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
