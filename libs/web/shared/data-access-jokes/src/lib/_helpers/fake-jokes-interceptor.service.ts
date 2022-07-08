import {
  GuidType,
  JokeCategoryInterface,
  JokeFormInterface,
  JokeInterface,
} from '@joke/web-shared-domain-types';
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

import categoriesMock from '../mock/categories';
import jokesMock from '../mock/jokes';

// Only for demo
localStorage.setItem('categories', JSON.stringify(categoriesMock));
localStorage.setItem('jokes', JSON.stringify(jokesMock));

const enum Methods {
  Get = 'GET',
  Delete = 'DELETE',
  Post = 'POST',
}

@Injectable()
export class FakeJokesInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const { url, method, body } = req;
    const jokes: JokeInterface[] = JSON.parse(
      localStorage.getItem('jokes') ?? '[]',
    );
    const categories: JokeCategoryInterface[] = JSON.parse(
      localStorage.getItem('categories') ?? '[]',
    );

    function handleRoute() {
      switch (true) {
        case url.endsWith('/categories') && method === Methods.Get:
          return _getCategories();
        case url.endsWith('/joke') && method === Methods.Post:
          return _addJoke();
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

    function ok<T>(b?: T): Observable<HttpEvent<T>> {
      return of(new HttpResponse<T>({ status: 200, body: b }));
    }

    function error(message = '') {
      return throwError(() => message);
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return urlParts[urlParts.length - 1];
    }

    function provideCategory(joke: JokeInterface): JokeInterface {
      return {
        ...joke,
        category:
          categories.find(({ id }) => joke.category === id)?.name ?? 'Unknown',
      };
    }

    function getUniqueId(parts: number): GuidType {
      const stringArr = [];
      for (let i = 0; i < parts; i++) {
        // eslint-disable-next-line no-bitwise
        const S4 = (((1 + Math.random()) * 0x10000) | 0)
          .toString(16)
          .substring(1);
        stringArr.push(S4);
      }
      return stringArr.join('-') as GuidType;
    }

    function _addJoke(): Observable<HttpEvent<void>> {
      localStorage.setItem(
        'jokes',
        JSON.stringify([
          ...jokes,
          {
            id: getUniqueId(5),
            ...(body as JokeFormInterface),
          } as JokeInterface,
        ]),
      );
      return ok();
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
      return ok<JokeInterface>(provideCategory(jokeRandom()));
    }

    function _getJokes(): Observable<HttpEvent<JokeInterface[]>> {
      const jokeWithCategory = jokes.map((joke) => provideCategory(joke));
      return ok<JokeInterface[]>(jokeWithCategory);
    }

    function _getCategories(): Observable<HttpEvent<JokeCategoryInterface[]>> {
      return ok<JokeCategoryInterface[]>(categories);
    }
  }
}
