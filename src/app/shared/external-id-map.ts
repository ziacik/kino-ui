export class ExternalIdMap {
	constructor() {
	}

	add(type: string, id: string) {
		if (id != null) {
			this[type] = id.toString();
		}
	}

	get(type: string): string {
		return this[type];
	}
}
