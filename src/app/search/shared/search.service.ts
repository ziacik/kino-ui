import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../shared/item';
import { DiscoveryService } from './discovery.service';

@Injectable()
export class SearchService {

	constructor( @Inject("DiscoveryServices") private services: DiscoveryService[]) {
	}

	search(name: string): Observable<Item[]> {
		return Observable.forkJoin(this.services.map(service => service.search(name)))
			.map(items => [].concat.apply([], items));
	}
}
