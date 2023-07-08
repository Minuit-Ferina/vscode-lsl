import * as vscode from 'vscode';
import { documentsMap, document } from './providers/DocumentsMap';

import { ExtractVariablesAndFunctionsVisitor } from './providers/ExtractVariablesAndFunctionsVisitor';
import { outputChannel } from './providers/common';

export const lslDiagnostics = vscode.languages.createDiagnosticCollection("lsl");

let includePath: Array<string> = [];

export const final_list = new vscode.CompletionList;

export async function diag(code: string, uri: vscode.Uri, range?: vscode.Range) {
	lslDiagnostics.delete(uri);

	const inc = includePath.slice();
	inc.unshift("./");
	inc.unshift(uri.path.substring(1, uri.path.lastIndexOf('/')) + "/");

	let doc: document;
	if (documentsMap.has(uri.path)) {
		doc = documentsMap.get(uri.path);
		// doc.parser = visit(doc.document.getText());
	}
	else {
		doc = {
			Diagnostic: [],
			isTokenized: false,
			IncludedDoc: [],
			Uri: uri,
			// tree: Parse(code),
			parser: new ExtractVariablesAndFunctionsVisitor()
			// isParsing: true
		};
		// return;
		doc.parser.lslerror.uri = uri.toString();
		documentsMap.set(uri.path, doc);
	}


	doc.parser.llparse(code)
		.then((data) => {

			// outputChannel.appendLine("-");

			doc.Diagnostic = [];
			// vscode.workspace.textDocuments.find(e => e.uri === uri).isDirty = true;
			// outputChannel.appendLine("-");

			for (const k of documentsMap) {
				lslDiagnostics.set(k[1].Uri, k[1].Diagnostic);
			}
			// outputChannel.appendLine("-");

			// console.log("parsed");
			doc.parser.parsingTimer = undefined;
			// outputChannel.appendLine("-");

		});

	// doc.isParsing = true;
	// doc.parser = new ExtractVariablesAndFunctionsVisitor();

	// if (range === undefined) {
	// .then((_tockens: code) => {
	// generate_list(uri.path);
	// }
	/*
		doc.parser.lslerror.errorList.forEach(e => {
	
			const startT = doc.parser.tokens["tokens"][e.offendingSymbol.tokenIndex];
			const endT = doc.parser.tokens["tokens"][e.offendingSymbol.tokenIndex];
			console.log(startT, endT);
			const range = new vscode.Range(
				e.offendingSymbol.line - 1,
				e.offendingSymbol.column,
				endT.line - 1,
				endT.column);
			const diagnostic = new vscode.Diagnostic(range, e.msg,
				vscode.DiagnosticSeverity.Error);
			// diagnostic.code = 102;
	
			doc.Diagnostic.push(diagnostic);
	
		});
	*/

	// parce the tockenStream
	// for (let c = 0; c < doc.Tokens.tockenStream.length; c++) {
	// 	const tocken = doc.Tokens.tockenStream[c];

	// 	if (tocken.tokenClass === TokenClass.PREPRO) {
	// 		if (doc.Tokens.tockenStream[c + 1].data === "include"
	// 			&& doc.Tokens.tockenStream[c + 2].tokenClass === TokenClass.STRING_LITERAL) {

	// 			const tocken_1 = doc.Tokens.tockenStream[c + 2];
	// 			const incfile = tocken_1.data;

	// 			// check in current file directory 
	// 			const e = uri.path;
	// 			const p = e.substring(1, 1 + e.lastIndexOf("/"));
	// 			const _includePath = includePath.slice();
	// 			_includePath.unshift(p);
	// 			// check in include directories
	// 			if (incfile == '') {
	// 				const range = new vscode.Range(
	// 					doc.Tokens.tockenStream[c + 2].range.start.row,
	// 					doc.Tokens.tockenStream[c + 2].range.start.col,
	// 					doc.Tokens.tockenStream[c + 2].range.end.row,
	// 					doc.Tokens.tockenStream[c + 2].range.end.col);
	// 				const diagnostic = new vscode.Diagnostic(range, `include file no specified`,
	// 					vscode.DiagnosticSeverity.Error);
	// 				// diagnostic.code = 102;

	// 				doc.Diagnostic.push(diagnostic);
	// 			}
	// 			else if (fs.existsSync(p + incfile)) {
	// 				const t = vscode.Uri.file(p + incfile);
	// 				doc.IncludedDoc.push(t.path);

	// 				if (!documentsMap.has(t.path)) {
	// 					if (!vscode.workspace.getWorkspaceFolder(t))
	// 						diag((await vscode.workspace.fs.readFile(t)).toString(), t);
	// 				}
	// 				// console.log(p + incfile);
	// 			}
	// 			else {
	// 				let error = true;
	// 				for (let c2 = 0; c2 < _includePath.length; c2++) {
	// 					const pncp = _includePath[c2];
	// 					const fullpath = pncp + incfile;
	// 					if (fs.existsSync(pncp + incfile)) {
	// 						const t = vscode.Uri.file(pncp + "/" + incfile);
	// 						doc.IncludedDoc.push(t.path);

	// 						if (!documentsMap.has(t.path)) {
	// 							if (!vscode.workspace.getWorkspaceFolder(t))
	// 								diag((await vscode.workspace.fs.readFile(t)).toString(), t);
	// 						}
	// 						error = false;
	// 						continue;

	// 						// let t: string = t.path;
	// 						// console.log(pncp + incfile);
	// 					}
	// 				}
	// 				if (error) {
	// 					const range = new vscode.Range(
	// 						doc.Tokens.tockenStream[c + 2].range.start.row,
	// 						doc.Tokens.tockenStream[c + 2].range.start.col,
	// 						doc.Tokens.tockenStream[c + 2].range.end.row,
	// 						doc.Tokens.tockenStream[c + 2].range.end.col);
	// 					const diagnostic = new vscode.Diagnostic(range, `include file not found (${doc.Tokens.tockenStream[c + 2].data})`,
	// 						vscode.DiagnosticSeverity.Error);
	// 					// diagnostic.code = 102;

	// 					doc.Diagnostic.push(diagnostic);
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	// }
	// );
}

export async function onDidOpenTextDocument(document: vscode.TextDocument) {
	await diag(document.getText(), document.uri);
	// generate_list(document.uri.path);
}

export async function onDidChangeTextDocument(event: vscode.TextDocumentChangeEvent) {
	if (event.contentChanges.length == 1)
		if (event.contentChanges[0].text.length === 0)
			return;
	//////////////////////////////////////////////77
	//TODO: make this function cancellable

	// if (event.contentChanges.length <= 0)
	// 	return;
	/*
		const _event = event;
		for (const e of event.contentChanges) {
			const rowLen = countLines(e.text);
			// const endPos = _event.document.positionAt(_event.document.offsetAt(new vscode.Position(e.range.end.line + rowLen + 1, 0)) - 1);
			const range = new vscode.Range(new vscode.Position(e.range.start.line, 0), new vscode.Position(e.range.end.line + rowLen, 99999999));
			const lines = _event.document.getText(range);
	
			// move this into a cancellable worker
	
			let doc: document;
			if (documentsMap.has(_event.document.uri.path))
				doc = documentsMap.get(_event.document.uri.path);
			else {
				return;
			}
	
			// 		doc.Worker = new Worker(__dirname + '/lsl-diag.js', {
			// doc.Worker = new Worker('diag(lines, _event.document.uri, e.range)', {
			// 	eval: true,
			// 	env: SHARE_ENV,
			// 	workerData: {
			// 		code: lines,
			// 		uri: _event.document.uri,
			// 		range: e.range
			// 	}
			// });
	
			if (!doc.isParsing) {
				doc.isParsing = true;
				diag(lines, _event.document.uri, e.range);
			}
		}
		*/
	// let doc: document;
	if (documentsMap.has(event.document.uri.path)) {
		const doc = documentsMap.get(event.document.uri.path);
		// if (!doc.isParsing) {
		// doc.isParsing = true;

		// if (doc.isParsing) {
		// doc.parser.cancel().then(() => {
		// 	diag(event.document.getText(), event.document.uri);
		// });
		// console.log("running");
		// return;
		// }
		// else {
			doc.parser.isUptodate = false;
		// if (event.contentChanges)
		// 	for (const e of event.contentChanges) {
		// 		if (e.text.search(/\n| /) || (e.rangeLength > 0 && e.text == ""))
		// 			doc.parser.isUptodate = false;
		// 	}
		// else
		// 	return;

		if (doc.parser.parsingTimer) {
			clearTimeout(doc.parser.parsingTimer);
			// console.log("postpone parse");
			outputChannel.appendLine("postpone parse");
		}
		else
			diag(event.document.getText(), event.document.uri);
		doc.parser.parsingTimer = setTimeout(() => {
			// console.log("parse");
			// outputChannel.appendLine("parse");
			diag(event.document.getText(), event.document.uri);
		},
			1000);
		return;
		// }
	}
	return;

	// }
}

export async function init() {
	includePath = vscode.workspace.getConfiguration("lsl").get("include_path", []);
	if (!Array.isArray(includePath))
		includePath = [];
	vscode.workspace.textDocuments.forEach(async (e) => {
	// for (const e of vscode.workspace.textDocuments) {
		if (e.languageId == "lsl")
			await diag(e.getText(), e.uri);
		// generate_list(e.uri.path);
	});

	const folders = vscode.workspace.workspaceFolders;
	if (!folders) {
		return;
	}
	for (const folder of folders) {
		const t = await vscode.workspace.fs.readDirectory(folder.uri);

		const files = await vscode.workspace.findFiles('**/*.lsl');
		for (const e of files) {
			const code = await vscode.workspace.fs.readFile(e);

			await diag(code.toString(), e);
		}
		// for (const k of documentsMap) {
		// generate_list(k[0]);
		// }

	}
}

export function DocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken) {
	let doc: document;
	if (documentsMap.has(document.uri.path))
		doc = documentsMap.get(document.uri.path);
	else {
		return;
	}

	const outArray = [];
	// for (let c = 1; c < doc.Tokens.tockenStream.length; c++) {
	if (token.isCancellationRequested)
		return [];

	// console.log(doc.Tokens.tockenStream[c]);

	// if(doc.Tokens.tockenStream[c].tokenClass == TokenClass.)
	// const range = new vscode.Range(
	// 	new vscode.Position(doc.Tokens.tockenStream[c - 1].range.end.row, doc.Tokens.tockenStream[c - 1].range.end.col),
	// 	new vscode.Position(doc.Tokens.tockenStream[c].range.start.row, doc.Tokens.tockenStream[c].range.start.col));

	// const Line = document.getText(range);
	// const nlines = Line.split("\n").length - 1;

	const tabSize = vscode.workspace.getConfiguration("editor", this.resource).get<number>("tabSize");
	const editorInsertSpaces = vscode.workspace.getConfiguration("editor", this.resource).get<number>("insertSpaces");

	let indent = "";
	if (editorInsertSpaces)
		for (let c = 0; c < tabSize; c++)
			indent += " ";
	else
		indent = "\t";

	// let newString = "";
	// for (let c1 = 0; c1 < nlines; c1++)
	// 	newString += "\n";

	// for (let c1 = 0; c1 < doc.Tokens.tockenStream[c].level; c1++) {
	// 	newString += indent;

	// }
	// outArray.unshift(vscode.TextEdit.replace(range, newString));


	// vscode.TextEdit.insert(firstLine.range.start, '42\n');
	// }
	// for(let c = 0; c < document.lineCount; c++)
	// {

	// }



	return outArray;
	// const firstLine = document.lineAt(0);
	// if (firstLine.text !== '42') {
	// 	return [vscode.TextEdit.insert(firstLine.range.start, '42\n')];
	// }
}

export function onDidChangeConfiguration(textEditor: vscode.ConfigurationChangeEvent) {
	includePath = vscode.workspace.getConfiguration("lsl").get("include_path", []);
	if (!Array.isArray(includePath))
		includePath = [];
	init();
}




