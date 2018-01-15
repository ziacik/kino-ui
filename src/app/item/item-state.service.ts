import { Injectable, Inject } from '@angular/core';
import { Item } from './item';
import { SOCKET_TOKEN } from '../socket.token';

@Injectable()
export class ItemStateService {
	private registry = {};


	constructor(@Inject(SOCKET_TOKEN) private socket: any) {
		socket.on('item-state', itemState => {
			this.registry[itemState.item] = itemState.state;
		});
	}

	getStateFor(item: Item): string {
		return this.registry[item._id];
	}
}
