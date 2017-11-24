import { fakeAsync, tick } from '@angular/core/testing';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ItemService } from './item.service';
import { Item } from './item';
import { of } from 'rxjs/observable/of';

describe('ItemService', () => {
	let service: ItemService;
	let http: HttpClient;
	let post: jasmine.Spy;
	let item: Item;

	beforeEach(() => {
		item = { name: 'some item' } as Item;
		http = jasmine.createSpyObj('HttpClient', ['post']) as HttpClient;
		post = http.post as jasmine.Spy;
		post.and.returnValue(of());
		service = new ItemService(http);
	});

	describe('#add', () => {
		it('calls api to add an item', fakeAsync(() => {
			service.add(item);
			tick();
			expect(post).toHaveBeenCalled();
			const args = post.calls.mostRecent().args;
			expect(args[0]).toEqual('http://localhost:1337/items');
			expect(args[1]).toEqual(item);
		}));
	});
});
