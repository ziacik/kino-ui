export class ExternalIdMap {
	private map: Map<string, string>;

	constructor() {
		this.map = new Map<string, string>();
	}

	add(type: string, id: string) {
		if (id != null) {
			this.map[type] = id.toString();
		}
	}

	get(type: string): string {
		return this.map[type];
	}
}
