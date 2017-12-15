import { Observable } from 'rxjs/Observable';
import { Item } from '../../item/item';

export interface DiscoveryService {
	search(name: string): Observable<Item[]>;
}
