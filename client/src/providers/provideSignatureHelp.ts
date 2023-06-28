
import * as vscode from 'vscode';

import { getFunctionSignature } from './common';
import { Functions } from '../Functions';

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
