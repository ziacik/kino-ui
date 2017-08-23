import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedModule } from '../shared.module';
import { ItemsGridComponent } from './items-grid.component';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Resource } from '../resource';

describe('ItemsGridComponent', () => {
	let component: ItemsGridComponent;
	let fixture: ComponentFixture<ItemsGridComponent>;
    let items: Resource[];

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ SharedModule ]
		}).compileComponents();
	}));

	beforeEach(() => {
        items = [{} as Resource, {} as Resource];
		fixture = TestBed.createComponent(ItemsGridComponent);
		component = fixture.componentInstance;
        component.items = items;
		fixture.detectChanges();
	});

	it('displays items as cards', () => {
		let cards: ItemCardComponent[] = fixture.debugElement.queryAll(By.directive(ItemCardComponent)).map(it => it.componentInstance);
		expect(cards.length).toBe(items.length);
		cards.forEach((card, i) => {
			expect(card.item).toBe(items[i]);
		});
	});
});
