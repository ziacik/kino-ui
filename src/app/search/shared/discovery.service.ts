import { Observable } from 'rxjs/Observable';
import { Item } from '../../shared/item';

export interface DiscoveryService {
	search(name: string): Observable<Item[]>;
}
