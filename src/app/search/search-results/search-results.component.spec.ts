import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ItemModule } from '../../item/item.module';
import { SearchResultsComponent } from './search-results.component';
import { ItemsGridComponent } from '../../item/items-grid/items-grid.component';
import { Item } from '../../item/item';

import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../shared/search.service';

describe('SearchResultsComponent', () => {
	let fixture: ComponentFixture<SearchResultsComponent>;
	let searchService: SearchService;
	let results: Item[];

	beforeEach(async(() => {
		const activateRoute = {
			params: of({ query: 'some query' })
		};

		results = [{ name: 'one' } as Item];

		const search = jest.fn().mockReturnValue(of(results));
		searchService = { search: search } as any;

		TestBed.configureTestingModule({
			imports: [ItemModule],
			declarations: [SearchResultsComponent],
			providers: [
				{ provide: SearchService, useValue: searchService },
				{ provide: ActivatedRoute, useValue: activateRoute }
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchResultsComponent);
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
