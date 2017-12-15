import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item } from './item';

@Injectable()
export class ItemService {

	constructor(private http: HttpClient) { }

	add(item: Item) {
		this.http.post('http://localhost:1337/items', item).subscribe();
	}
}
