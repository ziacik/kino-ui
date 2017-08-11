import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module'
import { SearchModule } from './search/search.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		SharedModule,
		SearchModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
