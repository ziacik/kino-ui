import { NgModule } from '@angular/core';
import { ItemModule } from '../item/item.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './shared/search.service';
import { TmdbService } from './shared/tmdb.service';

@NgModule({
	imports: [
		ItemModule
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
		{ provide: 'DiscoveryServices', useClass: TmdbService, multi: true }
	]
})
export class SearchModule { }
