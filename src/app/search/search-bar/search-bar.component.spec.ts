import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';
import { SearchBarComponent } from './search-bar.component';

import { Router } from '@angular/router';

describe('SearchBarComponent', () => {
	let component: SearchBarComponent;
	let fixture: ComponentFixture<SearchBarComponent>;
	let router: Router;

	beforeEach(async(() => {
		router = jasmine.createSpyObj('Router', ['navigate']);
		TestBed.configureTestingModule({
			imports: [SharedModule],
			declarations: [SearchBarComponent],
			providers: [{ provide: Router, useValue: router }]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('navigates to search page on search', () => {
		component.onSearch('query');
		expect(router.navigate).toHaveBeenCalledWith(['/search', 'query']);
	});

	it('navigates to search page on input', () => {
		const input = fixture.debugElement.query(By.css('#search')).nativeElement;
		input.value = 'something';
		input.dispatchEvent(new Event('input'));
		expect(router.navigate).toHaveBeenCalledWith(['/search', 'something']);
	});
});
