



		// vscode.languages.registerDocumentFormattingEditProvider('lsl', {
		// 	provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.TextEdit[] {
		// 		return lsl.DocumentFormattingEdits(document, options, token);
		// 	}
		// });

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