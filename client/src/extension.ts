/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as vscode from 'vscode';

import * as semanticProvider from './DocumentSemanticTokensProvider';
import { Functions } from './Functions';
import { Constants } from './Constants';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export async function activate(context: vscode.ExtensionContext) {
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
		provideHover(document, position) {
			const word = document.getText(
				document.getWordRangeAtPosition(position)  //  /\b\w+(?=\(.*\))/
			);

			const e = Functions.filter(function (el) {
				return el.name === word;

			});

			if (e.length > 0) {
				const ret = new vscode.MarkdownString();
				let paramDesc = "";
				let param = "";
				for (let c = 0; c < e[0].param.length; c++) {
					paramDesc += "_@param_ ";
					paramDesc += e[0].param[c]["type"];
					paramDesc += " `" + e[0].param[c].name + "`";
					paramDesc += " — " + e[0].param[c].description + "\n\n";

					param += e[0].param[c]["type"] + " " + e[0].param[c].name;
					param += c == e[0].param.length - 1 ? "" : ", ";
				}
				let fname = e[0]["returnType"];
				fname += e[0]["returnType"] == "" ? "" : " ";
				fname += e[0]["name"];
				fname += "( " + param + " )";
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
					));
			}
			else {
				const e2 = Constants.filter(function (el) {
					return el.name === word;
				});
				if (e2.length > 0) {

					let fname = "";
					fname += e2[0]["type"];
					fname += " ";
					fname += e2[0]["name"];
					fname += " = ";
					fname += e2[0]["value"];
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
						));
				}
			}




			return null;
		}
	});





}

const list = new vscode.CompletionList;

for (let c = 0; c < Functions.length; c++) {
	const item: vscode.CompletionItem = { label: Functions[c]["name"] };
	item.sortText = Functions[c]["name"];
	item.kind = vscode.CompletionItemKind.Function;
	item.insertText = Functions[c]["name"] + "";
	item.detail = getFunctionSignature(Functions[c]);
	item.documentation = Functions[c]["descrition"]
	// item.command = [moveofterinsert];
	list.items.push(item);
	item.range;
}

for (let c = 0; c < Constants.length; c++) {
	const item: vscode.CompletionItem = { label: Constants[c]["name"] };
	item.sortText = Constants[c]["name"];
	item.kind = vscode.CompletionItemKind.Constant;
	item.insertText = Constants[c]["name"] + " ";
	item.detail = Constants[c]["name"];
	item.documentation = Constants[c]["descrition"]
	list.items.push(item);
}

vscode.languages.registerCompletionItemProvider("lsl", {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
		// const word = document.getWordRangeAtPosition(position);

		return list;
	}
});

vscode.languages.registerSignatureHelpProvider('lsl', {
	provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {

		const resource = document.uri;

		const line = document.lineAt(position).text;
		const lineTrimmed = line.substring(0, position.character);
		const len = lineTrimmed.length;

		// borrowed from https://github.com/maziac/binary-file-viewer/blob/main/src/completionprovider.ts
		// Remove hyphens (everything in between ' and ")
		let modLine = '';
		let k = 0;
		while (k < len) {
			const char = lineTrimmed.substring(k, k + 1);
			if (char == "'" || char == '"') {
				do {
					k++;
					if (k >= len)
						break;
					const nChar = lineTrimmed.substring(k, k + 1);
					if (nChar == char)
						break;
				} while (k < len);
				k++;
				continue;
			}
			modLine += char;
			k++;
		}


		// Search reverse for first unclosed bracket (
		let i = modLine.length - 1;
		let bracketCount = 0;
		while (i >= 0) {
			const char = modLine.substring(i, i + 1);
			if (char == '(') {
				if (bracketCount == 0)
					break;
				bracketCount--;
			}
			else if (char == ')') {
				bracketCount++;
			}
			i--;
		}

		// Get the word before the bracket
		const beforeLine = modLine.substring(0, i).trimEnd();	// without bracket
		//console.log('SignatureProvider : provideSignatureHelp : beforeLine', beforeLine);

		// Get the function name
		const matchLast = /[\w.]+$/g.exec(beforeLine);
		if (!matchLast)
			return undefined;
		const funcName = matchLast[0];
		//console.log('SignatureProvider : provideSignatureHelp : funcName', funcName);

		// Get the number of parameters
		const afterLine = modLine.substring(i + 1);
		const countColons = afterLine.split(',').length - 1;


		const e = Functions.filter(function (el) {
			return el.name === funcName;

		});

		const ret: vscode.SignatureHelp = {
			activeSignature: 0,
			activeParameter: countColons,
			signatures: []
		};

		if (e.length > 0) {
			const a = e[0];
			const signature = getFunctionSignature(a);

			const param = [];

			for (const e of a.param) {
				param.push(
					{
						label: `${e["type"]} ${e["name"]}`,
						documentation: e["description"]
					}
				);
			}


			ret.signatures = [{
				label: signature,
				parameters: param
			}];
		}

		return ret;

	}
},
	'(', ',');


function getFunctionSignature(fn: object): string {
	let ret = `${fn["returnType"]}`;
	if (fn["returnType"] != "")
		ret += " ";
	ret += `${fn["name"]}(`;
	for (let c = 0; c < fn["param"].length; c++) {
		ret += `${fn["param"][c]["type"]} ${fn["param"][c]["name"]}`;
		if (c < fn["param"].length - 1)
			ret += ", ";
	}
	ret += `)`;
	return ret;
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
