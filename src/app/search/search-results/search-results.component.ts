import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Resource } from '../../shared/resource';
import { SearchService } from '../shared/search.service';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
	private sub: any;
	results: Resource[] = [];

	constructor(private route: ActivatedRoute, private searchService: SearchService) { }

	ngOnInit() {
		this.sub = this.route.params
		.flatMap(params => this.searchService.search(params['query']))
		.subscribe(results => {
			console.log(results);

			this.results = results});
	}

}
