import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../../shared/resource';
import { TvdbService } from './tvdb.service';

@Injectable()
export class SearchService {

	constructor(private tvdbService: TvdbService) {
	}

	search(query: string): Observable<Resource[]> {
		return this.tvdbService.searchShow(query);
	}
}
