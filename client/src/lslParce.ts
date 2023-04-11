import * as fs from 'fs';
import { Worker } from 'worker_threads';

import * as vscode from 'vscode';

import { Tokenize, StreamOfTokens, TokenClass, code } from 'lsl-lexer';
import { Functions } from './Functions';
import { Constants } from './Constants';
import { Events } from './Events';
import { State } from './State';
import { Types } from './Types';

export const lslDiagnostics = vscode.languages.createDiagnosticCollection("lsl");

let includePath: Array<string>;




const list = new vscode.CompletionList;
export const final_list = new vscode.CompletionList;

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

interface document {
	Diagnostic: Array<vscode.Diagnostic>,
	IncludedDoc: Array<document>,
	Tokens: code
}

const documentsMap: Map<vscode.Uri, document> = new Map();

function generate_list(document: vscode.TextDocument) {
	const _list = new vscode.CompletionList();

	const doc = documentsMap.get(document.uri);

	doc.Tokens.tockenStream.forEach(e => {
		if (e.tokenClass === TokenClass.IDENTIFIER) {

			// if (event.contentChanges[0].range.start.line !== e.row || event.contentChanges[0].range.start.character !== e.col) {
			if (
				// insert word if it's not already in the list
				(list.items.filter(f => {
					return f.label.toString() === e.data.toString();
				}).length === 0)
				&&
				(_list.items.filter(f =>
					f.label.toString() === e.data.toString()
				).length === 0)
				// &&
				// insert the word if it's not the word that we are writing
				// (e.data !== word)
			) {
				const e1 = new vscode.CompletionItem(
					e.data.toString(),
				);
				e1.insertText = e.data.toString();
				e1.sortText = e.data.toString();

				_list.items.push(e1);
			}
			// }
		}
	});

	final_list.items = list.items.concat(_list.items);
}

export async function diag(code: string, uri: vscode.Uri) {

lslDiagnostics.delete(uri);

	const inc = includePath.slice();
	inc.unshift("./");
	inc.unshift(uri.path.substring(1, uri.path.lastIndexOf('/')) + "/");

	const _tockens = await Tokenize(code, {
		stopOnError: false,
		basePath: inc
	});
	// .then((_tockens: code) => {

	let doc: document;
	if (documentsMap.has(uri))
		doc = documentsMap.get(uri);
	else
		doc = { Tokens: _tockens, Diagnostic: [], IncludedDoc: [] };

	// const doc: document = { Tokens: _tockens, Diagnostic: [], IncludedDoc: [] };

	/**
	 * 'BOS_Collar/bos_collar/include/comm.include.lsl'
	 * '/h:/Mon Drive/SL/BOS_Collar/bos_collar/src/HUD/main.lsl'
	 */
	// const t = new URI('BOS_Collar/bos_collar/include/comm.include.lsl');

	// const t: vscode.Uri;
	// if (e.file !== "main") {
	// 	let path = "";
	// 	vscode.workspace.fs.stat(document.uri);
	// 	if (fs.existsSync(e.file))
	// 		path = "./";
	// 	else {
	// 		// find the correct path
	// 		for (const p of includePath) {
	// 			if (fs.existsSync(p + "/" + e.file))
	// 				path = p;
	// 		}
	// 	}

	// 	t = vscode.Uri.parse("/" + path + e.file);
	// }
	// else
	// 	t = uri;

	// doc.push(diagnostic);
	// documentsMap.set(uri, d);


	if (doc.Tokens.errors.length > 0) {
		// const diagnostics: vscode.Diagnostic[] = [];

		// documentsMap.clear();

		for (const e of doc.Tokens.errors) {

			const range = new vscode.Range(e.line - 1, 0, e.line - 1, 255);

			const diagnostic = new vscode.Diagnostic(range, e.message,
				vscode.DiagnosticSeverity.Error);
			// diagnostic.code = 102;

			doc.Diagnostic.push(diagnostic);
		}
		for (const k of documentsMap) {
			lslDiagnostics.set(k[0], k[1].Diagnostic);
		}
	}
	// }
	// );
	documentsMap.set(uri, doc);
}

export async function onDidOpenTextDocument(document: vscode.TextDocument) {
	diag(document.getText(), document.uri);
	generate_list(document);
}

export async function onDidChangeTextDocument(event: vscode.TextDocumentChangeEvent) {
	//////////////////////////////////////////////77
	if (event.contentChanges.length <= 0)
		return;

	diag(event.document.getText(), event.document.uri);

	// if (event.contentChanges[0].text.match(/[a-zA-Z0-9]/g))
	// 	return;

	////////////////////////////////	
	if (event.contentChanges[0].text === "\r\n" || event.contentChanges[0].text === "\r\n")
		generate_list(event.document);
}

export async function init() {
	includePath = vscode.workspace.getConfiguration("lsl").get("include_path");

	const folders = vscode.workspace.workspaceFolders;
	if (!folders) {
		return;
	}
	for (const folder of folders) {
		const t = await vscode.workspace.fs.readDirectory(folder.uri);

		const files = await vscode.workspace.findFiles('**/*.lsl');
		files.forEach(async e => {
			const code = await vscode.workspace.fs.readFile(e);
			diag(code.toString(), e);
		});
	}
}



export function onDidChangeConfiguration(textEditor: vscode.ConfigurationChangeEvent) {
	includePath = vscode.workspace.getConfiguration("lsl").get("include_path");
}

export async function provideHover(document: vscode.TextDocument, position: vscode.Position): Promise<vscode.ProviderResult<vscode.Hover>> {
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

export async function provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.ProviderResult<vscode.SignatureHelp>> {
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