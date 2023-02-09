import { SignatureInformation, Range, DocumentSymbol, SymbolKind } from 'vscode-languageserver';
import { TextDocumentPositionParams, CompletionParams, CancellationToken, CompletionTriggerKind, SignatureHelp, Hover, Location, DocumentSymbolParams } from 'vscode-languageserver';

export interface ActionParameter {
	name: string;
	returnType?: llType;
	documentation?: string;
	description?: string; //Should be present on all but only after instantiation
}

export interface ActionMethod extends ActionParameter {
	parameters: ActionParameter[];
	lspSignature?: SignatureInformation;  //Should be present on all but only after instantiation
}


enum llType {
	float,
	integer,
	key,
	list,
	rotation,
	string,
	vector
}

export const pickles: ActionMethod[] = [
	{
		name: "isActive",
		returnType: llType.integer,
		parameters: [
			{
				name: "mc",
				returnType: llType.integer
			}
		],
	}
];

export class ActionContext {
	public static async getHoverInfo(textDocumentPosition: TextDocumentPositionParams): Promise<Hover> {
		console.log(textDocumentPosition);
		return {
			contents: {
				language: 'lsl',
				value: "externalClass.description"
			}
		};
	}
}