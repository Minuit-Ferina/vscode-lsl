/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { Tokenize, StreamOfTokens, TokenClass } from './lsl-lexer/src/index';
import * as fs from 'fs';
import * as os from 'os';

import * as vscode from 'vscode';

import * as semanticProvider from './DocumentSemanticTokensProvider';
import { Functions } from './Functions';
import { Constants } from './Constants';
import { Events } from './Events';
import { State } from './State';
import { Types } from './Types';

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

			let e;

			// function functions and events
			e = Functions.filter(function (el) {
				return el.name === word;

			});
			if (e.length == 0)
				e = Events.filter(function (el) {
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
							e[0]["description"],
							'',
							paramDesc

						].join('\n')
					));
			}

			// Constants
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

			// Types
			const e3 = Types.filter(function (el) {
				return el.name === word;
			});
			if (e3.length > 0) {

				let fname = "";
				fname += e3[0]["name"];
				return new vscode.Hover(
					new vscode.MarkdownString(
						[
							'```lsl',
							fname,
							'```',
							'___',
							e3[0]["description"],
							'',
						].join('\n')
					));
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
	item.documentation = new vscode.MarkdownString(Functions[c]["description"]);
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
	item.documentation = new vscode.MarkdownString(Constants[c]["description"]);
	list.items.push(item);
}

for (let c = 0; c < Events.length; c++) {
	const item: vscode.CompletionItem = { label: Events[c]["name"] };
	item.sortText = Events[c]["name"];
	item.kind = vscode.CompletionItemKind.Event;
	item.insertText = Events[c]["name"] + "(";

	item.insertText = getFunctionSignature(Events[c]);

	item.detail = Events[c]["name"];
	item.documentation = new vscode.MarkdownString(Events[c]["description"]);
	list.items.push(item);
}

for (let c = 0; c < Types.length; c++) {
	const item: vscode.CompletionItem = { label: Types[c]["name"] };
	item.sortText = Types[c]["name"];
	item.kind = vscode.CompletionItemKind.Class;
	item.insertText = Types[c]["name"] + "";

	// item.insertText = getFunctionSignature(Types[c]);

	item.detail = Types[c]["name"];
	item.documentation = new vscode.MarkdownString(Types[c]["description"]);
	list.items.push(item);
}

{
	const item: vscode.CompletionItem = { label: "default" };
	item.sortText = "default";
	item.kind = vscode.CompletionItemKind.Class;
	item.insertText = `default
{
	state_entry()
	{
		
	}
}`;

	item.detail = "default";
	item.documentation = "default state";
	list.items.push(item);
}

{
	const item: vscode.CompletionItem = { label: "state" };
	item.sortText = "state";
	item.kind = vscode.CompletionItemKind.Class;
	item.insertText = `state Name
{
	state_entry()
	{
		
	}
}`;

	item.detail = "state definition";
	item.documentation = "state";
	list.items.push(item);
}

vscode.languages.registerCompletionItemProvider("lsl", {
	async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
		const word = document.getText(document.getWordRangeAtPosition(position));
		const _list = new vscode.CompletionList;
		const tockens: StreamOfTokens = await Tokenize(document.getText());

		
		tockens.forEach(e => {
			if (e.tokenClass == TokenClass.IDENTIFIER) {
				
				if (position.line != e.row || position.character != e.col) {
					const e1 = new vscode.CompletionItem({
						label: e.data,
					});
					e1.insertText = e.data;
					e1.sortText = e.data;
					// e1.kind = vscode.CompletionItemKind.;
					if (
						// insert word if it's not already in the list
						_list.items.filter(f => {
							return f.label == e.data;
						}).length == 0
						&&
						// insert the word if it's not the word that we are writing
						e.data != word
					) {
						_list.items.push(e1);
					}
				}
			}
		});

		return list.items.concat(_list.items);
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
