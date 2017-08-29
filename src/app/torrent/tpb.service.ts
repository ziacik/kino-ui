import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TorrentService } from './torrent.service';
import { Item } from '../shared/item';
import { Torrent } from './torrent';
import PirateBay from 'thepiratebay'

@Injectable()
export class TpbService implements TorrentService {

	constructor() { }

	search(forItem: Item): Observable<Torrent> {
		PirateBay.search('Wolverine').then(console.log).catch(console.error);
		
		return Observable.fromPromise(PirateBay.search(forItem.name))
		.map((results: any[]) => {
			if (!results.length) {
				return null;
			}
			let torrent = new Torrent();
			torrent.link = results[0].link;
			return torrent;
		})
	}
}
