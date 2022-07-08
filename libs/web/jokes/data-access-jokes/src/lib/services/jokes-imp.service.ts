import {
  GuidType,
  JokeCategoryInterface,
  JokeFormInterface,
  JokeInterface,
} from '@joke/web-shared-domain-types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JokesService } from './jokes.service';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class JokesImpService implements JokesService {
  readonly apiURL: string = environment.apiUrl;
  readonly endpoints = {
    addJoke: `${this.apiURL}/joke`,
    getJokes: `${this.apiURL}/jokes`,
    getRandomJoke: `${this.apiURL}/joke/random`,
    deleteJoke: (id: GuidType) => `${this.apiURL}/joke/${id}`,
    getCategories: `${this.apiURL}/categories`,
  };

  constructor(private httpClient: HttpClient) {}

  addJoke$(joke: JokeFormInterface): Observable<void> {
    return this.httpClient.post<void>(this.endpoints.addJoke, joke);
  }

  getJokes$(): Observable<JokeInterface[]> {
    return this.httpClient.get<JokeInterface[]>(this.endpoints.getJokes);
  }

  getRandomJoke$(): Observable<JokeInterface> {
    return this.httpClient.get<JokeInterface>(this.endpoints.getRandomJoke);
  }

  deleteJoke$(id: GuidType): Observable<void> {
    return this.httpClient.delete<void>(this.endpoints.deleteJoke(id));
  }

  getCategories$(): Observable<JokeCategoryInterface[]> {
    return this.httpClient.get<JokeCategoryInterface[]>(
      this.endpoints.getCategories,
    );
  }
}
