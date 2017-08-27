import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../shared/item';
import { DiscoveryService } from './discovery.service';

@Injectable()
export class TvmazeService implements DiscoveryService {

	constructor(private http: HttpClient) {
	}

	search(name: string): Observable<Item[]> {
		let params: HttpParams = new HttpParams()
			.set('q', name);
		return this.http.get('http://api.tvmaze.com/search/shows', {
			params: params
		}).map(this.dataToItems);
	}

	private dataToItems(data: any): Item[] {
		return data.map(it => {
			let item = new Item({
				name: it.show.name,
				type: 'show',
				year: it.show.premiered,
				posterUrl: it.show.image && (it.show.image.original || it.show.image.medium)
			});
			Object.keys(it.show.externals).forEach(key => item.externalIds.add(key, it.show.externals[key]));
			return item;
		});
	}
}
