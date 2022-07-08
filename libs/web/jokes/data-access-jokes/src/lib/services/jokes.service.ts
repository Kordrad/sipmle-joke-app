import {
  GuidType,
  JokeCategoryInterface,
  JokeFormInterface,
  JokeInterface,
} from '@joke/web-shared-domain-types';
import { Observable } from 'rxjs';

export abstract class JokesService {
  abstract readonly apiURL: string;
  abstract readonly endpoints: Record<string, unknown>;

  abstract getJokes$(): Observable<JokeInterface[]>;
  abstract addJoke$(joke: JokeFormInterface): Observable<void>;
  abstract getRandomJoke$(): Observable<JokeInterface>;
  abstract deleteJoke$(id: GuidType): Observable<void>;
  abstract getCategories$(): Observable<JokeCategoryInterface[]>;
}
