import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared.module';
import { ItemCardComponent } from './item-card.component';
import { Item } from '../item';

describe('ItemCardComponent', () => {
	let component: ItemCardComponent;
	let fixture: ComponentFixture<ItemCardComponent>;
	let item: Item;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [SharedModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		item = { name: 'Some Title' } as Item;
		fixture = TestBed.createComponent(ItemCardComponent);
		component = fixture.componentInstance;
		component.item = item;
		fixture.detectChanges();
	});

	it('displays title of item', () => {
		expect(fixture.nativeElement.textContent).toContain('Some Title');
	});
});
