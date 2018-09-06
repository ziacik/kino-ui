import { fakeAsync, tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ItemService } from './item.service';
import { Item } from './item';
import { of } from 'rxjs';

describe('ItemService', () => {
	let service: ItemService;
	let http: HttpClient;
	let post;
	let item: Item;

	beforeEach(() => {
		item = { name: 'some item' } as Item;
		post = jest.fn().mockReturnValue(of());
		http = { post: post } as HttpClient;
		service = new ItemService(http);
	});

	describe('#add', () => {
		it('calls api to add an item', fakeAsync(() => {
			service.add(item);
			tick();
			expect(post).toHaveBeenCalled();
			const args = post.mock.calls.pop();
			expect(args[0]).toEqual('http://localhost:1337/items');
			expect(args[1]).toEqual(item);
		}));
	});
});
