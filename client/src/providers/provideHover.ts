

import * as vscode from 'vscode';

import { document, documentsMap } from './DocumentsMap';
import { Range, Position } from './common';

import { Functions } from '../Functions';
import { Constants } from '../Constants';
import { Events } from '../Events';
import { Types } from '../Types';


export async function provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.ProviderResult<vscode.Hover>> {
	let doc: document;
	if (documentsMap.has(document.uri.path))
		doc = documentsMap.get(document.uri.path);
	else {
		// await diag(document.getText(), document.uri);
		doc = documentsMap.get(document.uri.path);
	}

	const word = document.getText(
		document.getWordRangeAtPosition(position)  //  /\b\w+(?=\(.*\))/
	);

	let e;

	// function functions and events
	e = Functions.getFromName(word);
	if (!e)
		e = Events.getFromName(word);

	if (e) {
		const ret = new vscode.MarkdownString();
		let paramDesc = "";
		let param = "";
		for (let c = 0; c < e.param.length; c++) {
			paramDesc += "_@param_ ";
			paramDesc += e.param[c]["type"];
			paramDesc += " `" + e.param[c].name + "`";
			paramDesc += " — " + e.param[c].description + "\n\n";

			param += e.param[c]["type"] + " " + e.param[c].name;
			param += c == e.param.length - 1 ? "" : ", ";
		}
		let fname = e["returnType"];
		fname += e["returnType"] == "" ? "" : " ";
		fname += e["name"];
		fname += "( " + param + " )";
		return new vscode.Hover(
			new vscode.MarkdownString(
				[
					'```lsl',
					fname,
					'```',

					'___',
					e["description"],
					'',
					paramDesc

				].join('\n')
			));
	}

	// Constants
	const e2 = Constants.getFromName(word);
	if (e2) {

		let fname = "";
		fname += e2["type"];
		fname += " ";
		fname += e2["name"];
		fname += " = ";
		fname += e2["value"];
		return new vscode.Hover(
			new vscode.MarkdownString(
				[
					'```lsl',
					fname,
					'```',
					'___',
					e2["description"],
					'',
				].join('\n')
			));
	}

	// Types
	const e3 = Types.getFromName(word);
	if (e3) {

		let fname = "";
		fname += e3["name"];
		return new vscode.Hover(
			new vscode.MarkdownString(
				[
					'```lsl',
					fname,
					'```',
					'___',
					e3["description"],
					'',
				].join('\n')
			));
	}

	// identifier not in static list, try to lookup with the parser

	const ret = doc.parser.getLocalSymboles(document.getText(), Position.fromVSPosition(position));
	const t = ret.filter(e => e.name === word
		&& (
			e.nodeType === "variable_declaration"
			|| e.nodeType === 'function_parameter'));
	if (t.length > 0) {
		return new vscode.Hover(
			new vscode.MarkdownString(
				[
					'```lsl',
					t[0].signature,
					'```',
					'___',
					"",
					'',
				].join('\n')
			));
	}

	const ret2 = doc.parser.Symbols;
	const t2 = ret2.filter(e => e.name === word
		&& (
			e.nodeType === "global_function"
			|| e.nodeType === "state"));
	if (t2.length > 0) {
		return new vscode.Hover(
			new vscode.MarkdownString(
				[
					'```lsl',
					t2[0].signature,
					'```',
					'___',
					"",
					'',
				].join('\n')
			));
	}

	return null;
}
