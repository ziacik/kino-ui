import { ExternalIdMap } from './external-id-map';

export class Item {
	name: string;
	type: string;
	year: number;
	posterUrl: string;
	externalIds: ExternalIdMap;

	constructor(data: any) {
		Object.assign(this, data);
	}
}
