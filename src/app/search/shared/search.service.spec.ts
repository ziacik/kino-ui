import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { SearchService } from './search.service';
import { Resource } from '../../shared/resource';

import { HttpClient } from '@angular/common/http';

describe('SearchService', () => {
	let service: SearchService;
	let resources: Resource[];
	let http: HttpClient;
	let get: jasmine.Spy;
	let resource: Resource;

	beforeEach(() => {
		resource = {} as Resource;
		http = jasmine.createSpyObj('Http', ['get']);
		get = http.get as jasmine.Spy;
		get.and.returnValue(Observable.of([resource]));

		TestBed.configureTestingModule({
			providers: [
				SearchService,
				{ provide: HttpClient, useValue: http }
			]
		});
		service = TestBed.get(SearchService);
	});

	it('search calls discovery api and returns resources', fakeAsync(() => {
		let results: Resource[];
		service.search('some thing').subscribe(it => results = it);
		tick();
		expect(get).toHaveBeenCalled();
		expect(get.calls.mostRecent().args[0]).toEqual('http://localhost:3000/api/resources/discovery');
		expect(get.calls.mostRecent().args[1].params.toString()).toEqual('query=some%20thing');
		expect(results).toEqual([resource]);
	}));
});
