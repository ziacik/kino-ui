import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsGridComponent } from './items-grid/items-grid.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemService } from './item.service';
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatCardModule, MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatToolbarModule,
		MatIconModule
	],
	exports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		ItemsGridComponent,
		ItemCardComponent,
		MatSidenavModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatToolbarModule,
		MatIconModule
	],
	declarations: [
		ItemsGridComponent,
		ItemCardComponent
	],
	providers: [
		ItemService
	]
})
export class SharedModule { }
