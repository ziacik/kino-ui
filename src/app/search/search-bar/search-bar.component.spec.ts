import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ItemModule } from '../../item/item.module';
import { SearchBarComponent } from './search-bar.component';

import { Router, ActivatedRouteSnapshot, ActivationEnd } from '@angular/router';
import { Subject } from 'rxjs';

describe('SearchBarComponent', () => {
	let component: SearchBarComponent;
	let fixture: ComponentFixture<SearchBarComponent>;
	let router: Router;
	let routerEvents: Subject<ActivationEnd>;

	beforeEach(async(() => {
		routerEvents = new Subject<ActivationEnd>();
		router = jasmine.createSpyObj('Router', ['navigate']);
		(router as any).events = routerEvents;
		TestBed.configureTestingModule({
			imports: [ItemModule],
			declarations: [SearchBarComponent],
			providers: [
				{ provide: Router, useValue: router }
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	function withRouterQueryParam(query: string) {
		const snapshot = new ActivatedRouteSnapshot();
		snapshot.params = {
			query: query
		};
		const activationEnd  = new ActivationEnd(snapshot);
		routerEvents.next(activationEnd);
	}

	it('input is empty if there is no query param in url', () => {
		expect(component.searchControl.value).toBeFalsy();
	});

	it('initializes the input with query param from url', () => {
		withRouterQueryParam('something');
		expect(component.searchControl.value).toEqual('something');
	});

	it('navigates to search page on search', fakeAsync(() => {
		component.searchControl.setValue('query');
		tick(1200);
		expect(router.navigate).toHaveBeenCalledWith(['/search', 'query']);
	}));

	it('navigates to search page on input', fakeAsync(() => {
		const input = fixture.debugElement.query(By.css('input')).nativeElement;
		input.value = 'something';
		input.dispatchEvent(new Event('input'));
		tick(1200);
		expect(router.navigate).toHaveBeenCalledWith(['/search', 'something']);
	}));

	it('clears the input on clear', () => {
		component.clear();
		expect(component.searchControl.value).toBeFalsy();
	});

	it('does not show a clear button if search control is empty', () => {
		const clearButtons = fixture.debugElement.queryAll(By.css('button.clear'));
		expect(clearButtons.length).toBe(0);
	});

	it('clears the input on clicking clear', () => {
		component.searchControl.setValue('something');
		fixture.detectChanges();
		const clearButton = fixture.debugElement.query(By.css('button.clear'));
		clearButton.triggerEventHandler('click', null);
		fixture.detectChanges();
		expect(component.searchControl.value).toBeFalsy();
	});
});
