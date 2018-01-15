import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsGridComponent } from './items-grid/items-grid.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemService } from './item.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatCardModule, MatButtonModule, MatInputModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemStateService } from './item-state.service';
import { SOCKET_TOKEN } from '../socket.token';
import * as io from 'socket.io-client';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
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
		ReactiveFormsModule,
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
		ItemService,
		ItemStateService,
		{
			provide: SOCKET_TOKEN,
			useFactory: () => io('http://localhost:1337')
		}
	]
})
export class ItemModule { }
