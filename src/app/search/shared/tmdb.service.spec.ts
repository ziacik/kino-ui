import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { TmdbService } from './tmdb.service';
import { Observable } from 'rxjs/Observable';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import { Item } from '../../item/item';
import { of } from 'rxjs/observable/of';

describe('TmdbService', () => {
	let httpClient: HttpClient;
	let service: TmdbService;
	let get: jasmine.Spy;

	beforeEach(() => {
		httpClient = jasmine.createSpyObj('HttpClient', ['get']);
		get = httpClient.get as jasmine.Spy;

		TestBed.configureTestingModule({
			providers: [
				TmdbService,
				{ provide: HttpClient, useValue: httpClient }
			]
		});

		service = TestBed.get(TmdbService);
		get.and.returnValues(showData(), movieData());
	});

	function showData() {
		return of({
			'page': 1,
			'results': [
				{
					'poster_path': '/jIhL6mlT7AblhbHJgEoiBIOUVl1.jpg',
					'popularity': 29.780826,
					'id': 1399,
					'backdrop_path': '/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg',
					'vote_average': 7.91,
					'overview': 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night\'s Watch, is all that stands between the realms of men and icy horrors beyond.',
					'first_air_date': '2011-04-17',
					'origin_country': [
						'US'
					],
					'genre_ids': [
						10765,
						10759,
						18
					],
					'original_language': 'en',
					'vote_count': 1172,
					'name': 'Game of Thrones',
					'original_name': 'Game of Thrones'
				}
			],
			'total_results': 1,
			'total_pages': 1
		});
	}

	function movieData() {
		return of({
			'page': 1,
			'results': [
				{
					'poster_path': '/cezWGskPY5x7GaglTTRN4Fugfb8.jpg',
					'adult': false,
					'overview': 'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
					'release_date': '2012-04-25',
					'genre_ids': [
						878,
						28,
						12
					],
					'id': 24428,
					'original_title': 'The Avengers',
					'original_language': 'en',
					'title': 'The Avengers',
					'backdrop_path': '/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg',
					'popularity': 7.353212,
					'vote_count': 8503,
					'video': false,
					'vote_average': 7.33
				}
			],
			'total_results': 1,
			'total_pages': 1
		});
	}

	it('searches for shows and movies', () => {
		service.search('something').subscribe();
		expect(get).toHaveBeenCalled();
		expect(get.calls.count()).toEqual(2);
		const firstGetArgs = get.calls.argsFor(0);
		const secondGetArgs = get.calls.argsFor(1);
		expect(firstGetArgs[0]).toEqual('http://api.themoviedb.org/3/search/tv');
		expect(firstGetArgs[1].params.toString()).toEqual('api_key=f647d297016fdbf28f67b9ebe0dbdd93&query=something');
		expect(secondGetArgs[0]).toEqual('http://api.themoviedb.org/3/search/movie');
		expect(secondGetArgs[1].params.toString()).toEqual('api_key=f647d297016fdbf28f67b9ebe0dbdd93&query=something');
	});

	it('creates show items from search results', fakeAsync(() => {
		let result;
		service.search('something').subscribe(items => result = items);
		tick();

		expect(result.length).toEqual(2);

		const show = result[0] as Item;
		expect(show.name).toEqual('Game of Thrones');
		expect(show.type).toEqual('show');
		expect(show.year).toEqual(2011);
		expect(show.posterUrl).toEqual('https://image.tmdb.org/t/p/w500/jIhL6mlT7AblhbHJgEoiBIOUVl1.jpg');
		expect(show.externalIds.get('tmdb')).toEqual('1399');
		expect(show.rating).toEqual(7.91);
		expect(show.detailUrl).toEqual('https://www.themoviedb.org/tv/1399');
	}));

	it('creates movie items from search results', fakeAsync(() => {
		let result;
		service.search('something').subscribe(items => result = items);
		tick();

		expect(result.length).toEqual(2);

		const movie = result[1] as Item;
		expect(movie.name).toEqual('The Avengers');
		expect(movie.type).toEqual('movie');
		expect(movie.year).toEqual(2012);
		expect(movie.posterUrl).toEqual('https://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg');
		expect(movie.externalIds.get('tmdb')).toEqual('24428');
		expect(movie.rating).toEqual(7.33);
		expect(movie.detailUrl).toEqual('https://www.themoviedb.org/movie/24428');
	}));
});
