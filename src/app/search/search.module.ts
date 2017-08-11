import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		SearchBarComponent,
		SearchResultsComponent
	],
	exports: [
		SearchBarComponent
	]
})
export class SearchModule { }
