import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
	selector: 'app-item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
	@Input() item: Item;

	constructor(private itemService: ItemService) { }

	ngOnInit() {
	}

	add() {
		this.itemService.add(this.item);
	}
}
