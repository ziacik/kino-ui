import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { SearchService } from './search.service';
import { Item } from '../../shared/item';

import { HttpClient } from '@angular/common/http';

describe('SearchService', () => {
	let service: SearchService;
	let items: Item[];
	let http: HttpClient;
	let get: jasmine.Spy;
	let item: Item;

	beforeEach(() => {
		item = {} as Item;
		http = jasmine.createSpyObj('Http', ['get']);
		get = http.get as jasmine.Spy;
		get.and.returnValue(Observable.of([item]));

		TestBed.configureTestingModule({
			providers: [
				SearchService,
				{ provide: HttpClient, useValue: http }
			]
		});
		service = TestBed.get(SearchService);
	});

	it('search calls discovery api and returns items', fakeAsync(() => {
		let results: Item[];
		service.search('some thing').subscribe(it => results = it);
		tick();
		expect(get).toHaveBeenCalled();
		expect(get.calls.mostRecent().args[0]).toEqual('http://localhost:3000/api/items/discovery');
		expect(get.calls.mostRecent().args[1].params.toString()).toEqual('query=some%20thing');
		expect(results).toEqual([item]);
	}));
});
