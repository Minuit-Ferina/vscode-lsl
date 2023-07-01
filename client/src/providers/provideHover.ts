

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
