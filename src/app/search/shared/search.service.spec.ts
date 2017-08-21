import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { SearchService } from './search.service';
import { Resource } from '../../shared/resource';

fdescribe('SearchService', () => {
	let service: SearchService;
	let resources: Resource[];

	beforeEach(() => {
		resources = [];
		TestBed.configureTestingModule({
			providers: [
				SearchService
			]
		});
		service = TestBed.get(SearchService);
	});

	it('search searches for a show via tvdb service', fakeAsync(() => {
		let results: Resource[];
		service.search('some thing').subscribe(it => results = it);
		tick();
		expect(results).toEqual(resources);
	}));
});
