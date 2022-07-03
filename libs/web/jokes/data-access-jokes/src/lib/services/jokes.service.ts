import { GuidType, JokeInterface } from '@joke/web-jokes-domain-types';
import { Observable } from 'rxjs';

export abstract class JokesService {
  abstract readonly apiURL: string;
  abstract readonly endpoints: Record<string, unknown>;

  abstract getJokes$(): Observable<JokeInterface[]>;
  abstract getRandomJoke$(): Observable<JokeInterface>;
  abstract deleteJoke$(id: GuidType): Observable<void>;
  // @Todo: add new method to push new joke
}
