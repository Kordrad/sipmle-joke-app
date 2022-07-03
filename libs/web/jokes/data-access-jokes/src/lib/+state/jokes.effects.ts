import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as JokesActions from './jokes.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs';
import { JokesService } from '../services/jokes.service';

@Injectable()
export class JokesEffects {
  getJokes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JokesActions.getJokes),
      mergeMap(() =>
        this.jokesService$.getJokes$().pipe(
          map((jokes) => JokesActions.loadJokesSuccess({ jokes })),
          catchError(async (error) => JokesActions.loadJokesFailure({ error })),
        ),
      ),
    ),
  );

  getRandomJoke$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JokesActions.getRandomJoke),
      mergeMap(() =>
        this.jokesService$.getRandomJoke$().pipe(
          map((randomJoke) =>
            JokesActions.loadRandomJokeSuccess({ randomJoke }),
          ),
          catchError(async (error) =>
            JokesActions.loadRandomJokeFailure({ error }),
          ),
        ),
      ),
    ),
  );

  deleteRandomJoke$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JokesActions.deleteJoke),
      mergeMap((payload) =>
        this.jokesService$.deleteJoke$(payload.id).pipe(
          map(() => JokesActions.deleteJokeSuccess()),
          catchError(async (error) =>
            JokesActions.deleteJokeFailure({ error }),
          ),
        ),
      ),
    ),
  );

  deleteRandomJokeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JokesActions.deleteJokeSuccess),
      switchMap(() => [JokesActions.getJokes()]),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly jokesService$: JokesService,
  ) {}
}
