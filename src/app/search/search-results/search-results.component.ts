import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../item/item';
import { SearchService } from '../shared/search.service';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
	results: Observable<Item[]>;

	constructor(private route: ActivatedRoute, private searchService: SearchService) { }

	ngOnInit() {
		this.results = this.route.params.pipe(
			debounceTime(1000),
			distinctUntilChanged(),
			switchMap(params => this.searchService.search(params['query']))
		);
	}
}
