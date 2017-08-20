export class Resource {
	type: string;
	title: string;

	constructor(data: Resource[]) {
		Object.assign(this, data);
	}
}
