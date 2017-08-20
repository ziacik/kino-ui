import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../../shared/resource';

@Injectable()
export class SearchService {

	constructor(private http: HttpClient) {
	}

	search(query: string): Observable<Resource[]> {
		return this.http.get<Resource[]>('http://localhost:3000/api/resources/discovery', {
			params: new HttpParams().set('query', query)
		});
	}
}
