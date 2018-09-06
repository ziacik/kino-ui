import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemModule } from '../item.module';
import { ItemCardComponent } from './item-card.component';
import { ItemService } from '../item.service';
import { Item } from '../item';

describe('ItemCardComponent', () => {
	let component: ItemCardComponent;
	let fixture: ComponentFixture<ItemCardComponent>;
	let item: Item;
	let itemService: ItemService;

	beforeEach(async(() => {
		itemService = { add: jest.fn() } as any;
		TestBed.configureTestingModule({
			imports: [ItemModule],
			providers: [{ provide: ItemService, useValue: itemService }]
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

	describe('#add', () => {
		it('uses item service to add an item via api', () => {
			component.add();
			expect(itemService.add).toHaveBeenCalledWith(item);
		});
	});
});
