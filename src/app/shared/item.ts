import { ExternalIdMap } from './external-id-map';

export class Item {
	name: string;
	type: string;
	year: number;
	no: number;
	posterUrl: string;
	detailUrl: string;
	externalIds: ExternalIdMap;
	rating: number;

	constructor(data: any) {
		this.externalIds = new ExternalIdMap();
		Object.assign(this, data);
	}
}
