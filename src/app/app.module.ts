import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module'
import { SearchModule } from './search/search.module';

import { SearchResultsComponent } from './search/search-results/search-results.component';

const appRoutes: Routes = [
	{ path: 'search', component: SearchResultsComponent }
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		SharedModule,
		SearchModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
