import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { DiscoveryService } from './discovery.service';
import { SearchService } from './search.service';
import { Item } from '../../shared/item';

describe('SearchService', () => {
	let service: SearchService;
	let provider: DiscoveryService;
	let anotherProvider: DiscoveryService;
	let item: Item;
	let anotherItem: Item;

	beforeEach(() => {
		item = { name: 'one' } as Item;
		anotherItem = { name: 'two' } as Item;
		provider = {
			search: jasmine.createSpy('search').and.returnValue(Observable.of([item]))
		} as DiscoveryService;
		anotherProvider = {
			search: jasmine.createSpy('search').and.returnValue(Observable.of([anotherItem]))
		} as DiscoveryService;

		service = new SearchService([provider, anotherProvider]);
	});

	it('search passes the query to all providers and returns merged result', fakeAsync(() => {
		let results: Item[];
		service.search('something').subscribe(it => results = it);
		tick();
		expect(provider.search).toHaveBeenCalledWith('something');
		expect(anotherProvider.search).toHaveBeenCalledWith('something');
		expect(results).toEqual([item, anotherItem]);
	}));
});
