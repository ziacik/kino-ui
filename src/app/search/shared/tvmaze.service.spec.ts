import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TvmazeService } from './tvmaze.service';
import { Item } from '../../shared/item';

describe('TvmazeService', () => {
	let service: TvmazeService;
	let http: HttpClient;
	let get: jasmine.Spy;

	beforeEach(() => {
		http = jasmine.createSpyObj('HttpClient', ['get']);
		get = http.get as jasmine.Spy;
		get.and.returnValue(Observable.of([{
			"show": {
				"id": 161,
				"url": "http://www.tvmaze.com/shows/161/dexter",
				"name": "Dexter",
				"language": "English",
				"genres": [
					"Horror",
					"Thriller"
				],
				"status": "Ended",
				"runtime": 50,
				"premiered": "2006-10-01",
				"officialSite": "http://www.sho.com/sho/dexter/home",
				"rating": {
					"average": 8.5
				},
				"network": {
					"id": 9,
					"name": "Showtime",
					"country": {
						"name": "United States",
						"code": "US",
						"timezone": "America/New_York"
					}
				},
				"externals": {
					"tvrage": 7926,
					"thetvdb": 79349,
					"imdb": "tt0773262"
				},
				"image": {
					"medium": "some-image"
				},
				"summary": "A summary"
			}
		}]))
		service = new TvmazeService(http);
	});

	it('search calls the tvmaze api and converts results to items', fakeAsync(() => {
		let results: Item[];
		service.search('something').subscribe(it => results = it);
		tick();
		expect(get).toHaveBeenCalled();
		expect(get.calls.mostRecent().args[0].toString()).toEqual('http://api.tvmaze.com/search/shows');
		expect(get.calls.mostRecent().args[1].params.toString()).toEqual('q=something');
		expect(results.length).toBe(1);
		let result = results[0];
		expect(result.name).toEqual('Dexter');
		expect(result.type).toEqual('show');
		expect(result.posterUrl).toEqual('some-image');
		expect(result.externalIds.get('tvrage')).toEqual('7926');
		expect(result.externalIds.get('thetvdb')).toEqual('79349');
		expect(result.externalIds.get('imdb')).toEqual('tt0773262');
	}));
});
