import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { SearchService } from './search.service';
import { Resource } from '../../shared/resource';
import { TvdbService } from './tvdb.service';

fdescribe('SearchService', () => {
	let service: SearchService;
	let tvdbService;
	let resources: Resource[];

	beforeEach(() => {
		resources = [new Resource(), new Resource(), new Resource()];
		tvdbService = {
			APIKEY: 'apikey',
			searchShow: jasmine.createSpy('searchShow').and.returnValue(Observable.of(resources))
		};
		TestBed.configureTestingModule({
			providers: [
				SearchService,
				{ provide: TvdbService, useValue: tvdbService }
			]
		});
		service = TestBed.get(SearchService);
	});

	it('search searches for a show via tvdb service', fakeAsync(() => {
		let results: Resource[];
		service.search('some thing').subscribe(it => results = it);
		tick();
		expect(tvdbService.searchShow).toHaveBeenCalledWith('some thing');
		expect(results).toEqual(resources);
	}));
});
