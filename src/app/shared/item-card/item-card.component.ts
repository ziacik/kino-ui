import { Component, OnInit, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item';
import { Torrent } from '../../torrent/torrent';
import { TorrentService } from '../../torrent/torrent.service';

@Component({
	selector: 'app-item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
	@Input() item: Item;
	torrent: Torrent;

	constructor( @Inject("TorrentServices") private torrentServices: TorrentService[]) { }

	ngOnInit() {
		this.findTorrent();
	}

	findTorrent() {
		return this.torrentServices[0].search(this.item).subscribe(torrent => this.torrent = torrent);
	}
}
