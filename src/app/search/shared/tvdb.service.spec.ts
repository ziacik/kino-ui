import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { TvdbService } from './tvdb.service';

fdescribe('TvdbService', () => {
	let service: TvdbService;
	let tvdb: any;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TvdbService]
		});

		service = TestBed.get(TvdbService);
		tvdb = {
			getSeriesByName: jasmine.createSpy('getSeriesByName').and.returnValue(Promise.resolve([{
				seriesName: 'some show'
			}, {
				seriesName: 'another show'
			}]))
		};
		service.setTvdb(tvdb);
	});

	it('search searches for shows by name and converts the result to Resources', fakeAsync(() => {
		let results: any[];
		service.searchShow('by name').subscribe(it => results = it);
		tick();
		expect(results.length).toEqual(2);
		expect(results[0].type).toEqual('show');
		expect(results[0].title).toEqual('some show');
		expect(results[1].type).toEqual('show');
		expect(results[1].title).toEqual('another show');
	}));
});
