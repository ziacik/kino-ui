import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../resource';

@Component({
	selector: 'app-items-grid',
	templateUrl: './items-grid.component.html',
	styleUrls: ['./items-grid.component.css']
})
export class ItemsGridComponent implements OnInit {
	@Input() items: Resource[];

	constructor() { }

	ngOnInit() {
	}
}
