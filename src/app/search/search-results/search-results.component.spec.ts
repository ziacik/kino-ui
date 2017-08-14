import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared/shared.module';
import { SearchResultsComponent } from './search-results.component';

describe('SearchResultsComponent', () => {
	let component: SearchResultsComponent;
	let fixture: ComponentFixture<SearchResultsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [SharedModule],
			declarations: [SearchResultsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchResultsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
