import { GuidType, JokeInterface } from '@joke/web-jokes-domain-types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JokesService } from './jokes.service';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class JokesImpService implements JokesService {
  readonly apiURL: string = environment.apiUrl;
  readonly endpoints = {
    getJokes: `${this.apiURL}/jokes`,
    getRandomJoke: `${this.apiURL}/joke/random`,
    deleteJoke: (id: GuidType) => `${this.apiURL}/joke/${id}`,
  };

  constructor(private httpClient: HttpClient) {}

  getJokes$(): Observable<JokeInterface[]> {
    return this.httpClient.get<JokeInterface[]>(this.endpoints.getJokes);
  }

  getRandomJoke$(): Observable<JokeInterface> {
    return this.httpClient.get<JokeInterface>(this.endpoints.getRandomJoke);
  }

  deleteJoke$(id: GuidType): Observable<void> {
    return this.httpClient.delete<void>(this.endpoints.deleteJoke(id));
  }
}
