import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { SharedModule } from '../../shared/shared.module';
import { SearchResultsComponent } from './search-results.component';
import { ItemsGridComponent } from '../../shared/items-grid/items-grid.component';
import { Item } from '../../shared/item';

import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../shared/search.service';
import { of } from 'rxjs/observable/of';

describe('SearchResultsComponent', () => {
	let component: SearchResultsComponent;
	let fixture: ComponentFixture<SearchResultsComponent>;
	let searchService: SearchService;
	let results: Item[];

	beforeEach(async(() => {
		const activateRoute = {
			params: of({ query: 'some query'})
		};

		results = [{ name: 'one'} as Item];

		searchService = jasmine.createSpyObj('SearchService', ['search']);
		(searchService.search as jasmine.Spy).and.returnValue(of(results));

		TestBed.configureTestingModule({
			imports: [SharedModule],
			declarations: [SearchResultsComponent],
			providers: [
				{ provide: SearchService, useValue: searchService },
				{ provide: ActivatedRoute, useValue: activateRoute }
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchResultsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('performs a search', () => {
		expect(searchService.search).toHaveBeenCalledWith('some query');
	});

	it('binds search results to items grid', () => {
		const grid: ItemsGridComponent = fixture.debugElement.query(By.directive(ItemsGridComponent)).componentInstance;
		expect(grid.items).toBe(results);
	});
});
