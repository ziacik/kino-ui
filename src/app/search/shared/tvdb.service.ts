import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../../shared/resource';

import * as Tvdb from 'node-tvdb';

@Injectable()
export class TvdbService {
	public APIKEY: string = '3B61F18B2D8AD7AB';

	private tvdb: any;

	constructor() {
	}

	searchShow(query: string): Observable<Resource[]> {
		return Observable.fromPromise(this.getTvdb().getSeriesByName(query)).map(this.createShowResources);
	}

	getTvdb(): any {
		if (this.tvdb == null) {
			this.tvdb = new Tvdb('3B61F18B2D8AD7AB');
		}
		return this.tvdb;
	}

	setTvdb(tvdb: any) {
		this.tvdb = tvdb;
	}

	private createShowResources(fromData: any[]): Resource[] {
		return fromData.map(one => {
			let resource: Resource = new Resource();
			resource.type = 'show';
			resource.title = one.seriesName;
			return resource;
		});
	}
}
