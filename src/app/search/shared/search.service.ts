import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../shared/item';

@Injectable()
export class SearchService {

	constructor(private http: HttpClient) {
	}

	search(query: string): Observable<Item[]> {
		return this.http.get<Item[]>('http://localhost:3000/api/items/discovery', {
			params: new HttpParams().set('query', query)
		});
	}
}
