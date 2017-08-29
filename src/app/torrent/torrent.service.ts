import { Item } from '../shared/item';
import { Torrent } from './torrent';
import { Observable } from 'rxjs';

export interface TorrentService {
	search(forItem: Item): Observable<Torrent>;
}
