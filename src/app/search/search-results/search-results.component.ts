import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Resource } from '../../shared/resource';
import { SearchService } from '../shared/search.service';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
	results: Observable<Resource[]>;

	constructor(private route: ActivatedRoute, private searchService: SearchService) { }

	ngOnInit() {
		this.results = this.route.params
			.debounceTime(1000)
			.distinctUntilChanged()
			.switchMap(params => this.searchService.search(params['query']));
	}
}
