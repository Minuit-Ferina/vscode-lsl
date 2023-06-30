import * as vscode from 'vscode';

import { Functions } from '../Functions';
import { Constants } from '../Constants';
import { Events } from '../Events';
import { Types } from '../Types';

export const list = new vscode.CompletionList;


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


export function getFunctionSignature(fn: object): string {
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


// export function generate_list(uri: string) {
// 	const doc = documentsMap.get(uri);
// 	if (!doc)
// 		return;
// 	doc.CompletionList = new vscode.CompletionList();
// 	const _list = doc.CompletionList;

// 	// doc.parser = visit(doc.document.getText());
// 	for (const e of doc.parser.completionList) {

// 		const e1 = new vscode.CompletionItem(
// 			e
// 		);
// 		e1.insertText = e;
// 		e1.sortText = e;

// 		_list.items.push(e1);
// 	}
// }

export function countLines(text: string): number {
	let n = 0;
	for (const e of text) {
		if (e === "\n")
			n++;
	}
	return n;
}


export function stripUndefined(arr) {
	if (Array.isArray(arr))
		return arr.reduce(function (result, item) {
			if (item !== undefined)
				result.push(Array.isArray(item) && !item.length ? stripUndefined(item) : item);
			return result;
		}, []);
	else
		return arr;
}

export class Position {
	row: number;
	col: number;
	constructor(row: number, col: number) {
		this.row = row;
		this.col = col;
	}
	static fromVSPosition(position: vscode.Position): Position {
		return new Position(position.line, position.character);
	}
}
export class Range {
	start: Position;
	end: Position;
	constructor(start: Position, end: Position) {
		this.start = start;
		this.end = end;
	}
	static fromVSRange(range: vscode.Range): Range {
		return new Range(Position.fromVSPosition(range.start), Position.fromVSPosition(range.end));
	}
	toVSCodeRange(): vscode.Range {
		return new vscode.Range(
			new vscode.Position(this.start.row, this.start.col),
			new vscode.Position(this.end.row, this.end.col)
		);
	}
}
