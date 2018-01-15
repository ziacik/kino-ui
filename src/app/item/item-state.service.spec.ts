import { TestBed, inject } from '@angular/core/testing';

import { ItemStateService } from './item-state.service';
import { Item } from './item';
import { EventEmitter } from 'events';

describe('ItemStateService', () => {
	let service: ItemStateService;
	let socket: EventEmitter;

	beforeEach(() => {
		socket = new EventEmitter();
		service = new ItemStateService(socket);
	});

	it('returns empty state if there is no state registered for item', () => {
		const unregisteredItem = {} as Item;
		const state = service.getStateFor(unregisteredItem);
		expect(state).toBeFalsy();
	});

	it('registers new state for an item when socket receives an item-state message', () => {
		const itemStateMessage = {
			item: 'some-item-id',
			state: 'some-state'
		};
		const someItem: Item = new Item({_id: 'some-item-id'});
		socket.emit('item-state', itemStateMessage);
		const state = service.getStateFor(someItem);
		expect(state).toEqual('some-state');
	});
});
