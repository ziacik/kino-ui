import { TestBed, async } from '@angular/core/testing';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

/// See https://github.com/angular/angular/issues/12295
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [AppModule],
			providers: [{provide: APP_BASE_HREF, useValue: '/'}]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it(`should have as title 'app'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('app');
	}));
});
