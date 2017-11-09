import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../shared/item';
import { DiscoveryService } from './discovery.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {

	constructor( @Inject('DiscoveryServices') private services: DiscoveryService[]) {
	}

	search(name: string): Observable<Item[]> {
		return forkJoin(this.services.map(service => service.search(name))).pipe(
			map(items => [].concat.apply([], items))
		);
	}
}
