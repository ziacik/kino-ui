import "rxjs/add/operator/mergeMap";

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasonryModule } from 'angular2-masonry';
import { ItemsGridComponent } from './items-grid/items-grid.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		MaterialModule,
		BrowserAnimationsModule,
		MasonryModule
	],
	exports: [
		CommonModule,
		BrowserModule,
		MaterialModule,
		BrowserAnimationsModule,
		MasonryModule,
		ItemsGridComponent,
		ItemCardComponent
	],
	declarations: [
		ItemsGridComponent,
		ItemCardComponent
	]
})
export class SharedModule { }
