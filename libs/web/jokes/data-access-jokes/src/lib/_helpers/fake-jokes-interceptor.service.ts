import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {
  Observable,
  delay,
  dematerialize,
  materialize,
  mergeMap,
  of,
  throwError,
} from 'rxjs';
import { Injectable } from '@angular/core';
import { JokeInterface } from '@joke/web-jokes-domain-types';

import jokesMock from '../mock/jokes';
// Only for demo
localStorage.setItem('jokes', JSON.stringify(jokesMock));

const enum Methods {
  Get = 'GET',
  Delete = 'DELETE',
}

@Injectable()
export class FakeJokesInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const { url, method } = req;
    const jokes: JokeInterface[] = JSON.parse(
      localStorage.getItem('jokes') ?? '[]',
    );

    function handleRoute() {
      switch (true) {
        case url.match(/\/joke\/.+/i) && method === Methods.Delete:
          return _deleteJoke();
        case url.endsWith('/joke/random') && method === Methods.Get:
          return _getRandomJoke();
        case url.endsWith('/jokes') && method === Methods.Get:
          return _getJokes();
        default:
          // pass through any requests not handled above
          return next.handle(req);
      }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function ok<T>(body?: unknown): Observable<HttpEvent<T>> {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return of(new HttpResponse<T>({ status: 200, body }));
    }

    function error(message = '') {
      return throwError(() => message);
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return urlParts[urlParts.length - 1];
    }

    function _deleteJoke(): Observable<HttpEvent<void | Error>> {
      const listWithDeletedElement = jokes.filter(
        ({ id }) => id !== idFromUrl(),
      );

      if (listWithDeletedElement.length === jokes.length) {
        return error('Joke not found');
      }

      localStorage.setItem('jokes', JSON.stringify(listWithDeletedElement));

      return ok();
    }
    function _getRandomJoke(): Observable<HttpEvent<JokeInterface>> {
      const jokeRandom = () => jokes[Math.floor(Math.random() * jokes.length)];
      return ok<JokeInterface>(jokeRandom());
    }
    function _getJokes(): Observable<HttpEvent<JokeInterface[]>> {
      return ok<JokeInterface[]>(jokes);
    }
  }
}