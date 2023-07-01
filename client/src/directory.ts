export class Directory
{
	data: Map<string, object>;
	constructor(data) {
		this.data = new Map<string, object>;
		data.forEach(element => {
			this.data.set(element["name"], element);
		});
	}
	getFromName(name: string): object {
		return this.data.get(name);
	}
	exist(name: string) {
		return this.data.has(name);
	}
}
