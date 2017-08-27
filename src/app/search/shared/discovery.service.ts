import { Observable } from 'rxjs';
import { Item } from '../../shared/item';

export interface DiscoveryService {
	search(name: string): Observable<Item[]>;
}
