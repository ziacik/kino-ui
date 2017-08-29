import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TpbService } from './tpb.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [
		{ provide: 'TorrentServices', useClass: TpbService, multi: true }
	]
})
export class TorrentModule { }
