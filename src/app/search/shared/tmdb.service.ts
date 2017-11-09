import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { DiscoveryService } from './discovery.service';
import { Item } from "../../shared/item";
import { map } from 'rxjs/operators';
import { zip } from 'rxjs/observable/zip';

@Injectable()
export class TmdbService implements DiscoveryService {

	constructor(private http: HttpClient) {
	}

	search(name: string): Observable<Item[]> {
		const params: HttpParams = new HttpParams()
			.set('api_key', 'f647d297016fdbf28f67b9ebe0dbdd93')
			.set('query', name);

		const options = {
			params: params
		};

		let showItems = this.http.get('http://api.themoviedb.org/3/search/tv', options).pipe(
			map(data => this.showDataToItems(data))
		);

		let movieItems = this.http.get('http://api.themoviedb.org/3/search/movie', options).pipe(
			map(data => this.movieDataToItems(data))
		);

		return zip(showItems, movieItems, (s, m) => s.concat(m));
	}

	private showDataToItems(data: any): Item[] {
		return data.results.map(it => {
			// TODO the poster url static base should be read from configuration api call
			const item = new Item({
				name: it.name,
				type: 'show',
				year: this.getYearFromDate(it.first_air_date),
				posterUrl: 'https://image.tmdb.org/t/p/w500' + it.poster_path,
				rating: it.vote_average,
				detailUrl: 'https://www.themoviedb.org/tv/' + it.id
			});
			item.externalIds.add('tmdb', it.id)
			return item;
		});
	}

	private movieDataToItems(data: any): Item[] {
		return data.results.map(it => {
			// TODO the poster url static base should be read from configuration api call
			const item = new Item({
				name: it.title,
				type: 'movie',
				year: this.getYearFromDate(it.release_date),
				posterUrl: 'https://image.tmdb.org/t/p/w500' + it.poster_path,
				rating: it.vote_average,
				detailUrl: 'https://www.themoviedb.org/movie/' + it.id
			});
			item.externalIds.add('tmdb', it.id)
			return item;
		});
	}

	private getYearFromDate(date: string): number {
		if (!date) {
			return;
		}
		const parsed = /^[0-9]+/.exec(date);
		if (!parsed) {
			return;
		}
		return +(parsed[0]);
	}
}
