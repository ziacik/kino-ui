import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './shared/search.service';
import { TvmazeService } from './shared/tvmaze.service';

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
	],
	providers: [
		SearchService,
		{ provide: 'DiscoveryServices', useClass: TvmazeService, multi: true }
	]
})
export class SearchModule { }
