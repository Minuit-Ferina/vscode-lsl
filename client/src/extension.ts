/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as os from 'os';

import * as vscode from 'vscode';

import * as lsl from './lslParce';

import { CompletionItems } from './providers/provideCompletionItems';
import { provideHover } from './providers/provideHover';
import { provideSignatureHelp } from './providers/provideSignatureHelp';
import { providerDocumentSymbols } from './providers/providerDocumentSymbols';

import * as semanticProvider from './providers/DocumentSemanticTokensProvider';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

import {outputChannel} from './providers/common';

let client: LanguageClient;

export async function activate(context: vscode.ExtensionContext) {
	return vscode.window.withProgress({
		location: vscode.ProgressLocation.Window,
		title: "LSL Tools starting",
		cancellable: false,

	}, async (progress, token) => {
		token.onCancellationRequested(() => {
			console.log("User canceled the long running operation");
			outputChannel.appendLine("User canceled the long running operation");
		});
		// progress.report({message: "activate"});

		await lsl.init();

		context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(async function (textEditor) {
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

		context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(async function (event) {
			if (event.document.languageId === "lsl") {
				return lsl.onDidChangeTextDocument(event);
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

		semanticProvider.register();

		vscode.languages.registerHoverProvider({ language: 'lsl', scheme: 'file' }, {
			async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
				return provideHover(document, position, token);
			}
		});

		vscode.languages.registerDocumentSymbolProvider({ language: 'lsl', scheme: 'file' }, {
			async provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken) {
				return providerDocumentSymbols(document, token);
			}
		});

		vscode.languages.registerCompletionItemProvider({ language: 'lsl', scheme: 'file' }, {
			async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

				// outputChannel.appendLine("provideCompletionItems");
				// outputChannel.show(true);

				return CompletionItems(document, position, token, context);
			}
		});

		vscode.languages.registerSignatureHelpProvider({ language: 'lsl', scheme: 'file' }, {
			async provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
				return provideSignatureHelp(document, position, token);
			}
		},
			'(', ',');

		const p = new Promise<void>(resolve => {
			setTimeout(() => {
				resolve();
			}, 5);
		});
		return p;
	}
	);
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
