import { Observable } from 'rxjs';
import { Item } from '../../item/item';

export interface DiscoveryService {
	search(name: string): Observable<Item[]>;
}
