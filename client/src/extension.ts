/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
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
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
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
	vscode.languages.registerHoverProvider("lsl", {
		provideHover(document, position) {
			const word = document.getText(
				document.getWordRangeAtPosition(position)  //  /\b\w+(?=\(.*\))/
			);

			let e = Functions.filter(function (el) {
				return el.name === word;

			})

			if (e.length > 0) {
				let ret = new vscode.MarkdownString();
				let paramDesc = "";
				let param = "";
				for (let c = 0; c < e[0].param.length; c++) {
					paramDesc += "_@param_ "
					paramDesc += e[0].param[c]["type"]
					paramDesc += " `" + e[0].param[c].name + "`"
					paramDesc += " — " + e[0].param[c].description + "\n";

					param += e[0].param[c]["type"] + " " + e[0].param[c].name;
					param += c == e[0].param.length - 1 ? "" : ", "
				}
				let fname = e[0]["returnType"]
				fname += e[0]["returnType"] == "" ? "" : " "
				fname += e[0]["name"]
				fname += "( " + param + " )"
				return new vscode.Hover(
					new vscode.MarkdownString(
						[
							'```lsl',
							fname,
							'```',

							'___',
							e[0]["descrition"],
							'',
							paramDesc

						].join('\n')
					))
			}
			else {
				let e2 = Constants.filter(function (el) {
					return el.name === word;
				})
				if (e2.length > 0) {

					let fname = "";
					fname += e2[0]["type"]
					fname += " "
					fname += e2[0]["name"]
					fname += " = "
					fname += e2[0]["value"]
					return new vscode.Hover(
						new vscode.MarkdownString(
							[
								'```lsl',
								fname,
								'```',
								'___',
								e2[0]["description"],
								'',
							].join('\n')
						))
				}
			}




			return null;
		}
	});

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
