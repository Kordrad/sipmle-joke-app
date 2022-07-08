import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as JokesActions from './jokes.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs';
import { JokesService } from '../services/jokes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@joke/web-jokes-ui-snackbar';

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

  addJoke$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JokesActions.addJoke),
      mergeMap((payload) =>
        this.jokesService$.addJoke$(payload.joke).pipe(
          map(() => {
            this.snackBar.openFromComponent(SnackbarComponent, {
              data: {
                title: 'Sukces',
                message: 'Żart został pomyślnie dodany.',
              },
              duration: 50000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'success',
            });
            return JokesActions.addJokeSuccess();
          }),
          catchError(async (error) => {
            this.snackBar.openFromComponent(SnackbarComponent, {
              data: {
                title: 'Coś poszło nie tak',
                message: error,
              },
              duration: 5000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'fail',
            });
            return JokesActions.addJokeFailure({ error });
          }),
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

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JokesActions.getCategories),
      mergeMap(() =>
        this.jokesService$.getCategories$().pipe(
          map((categories) =>
            JokesActions.loadCategoriesSuccess({ categories }),
          ),
          catchError(async (error) =>
            JokesActions.loadRandomJokeFailure({ error }),
          ),
        ),
      ),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly jokesService$: JokesService,
    private readonly snackBar: MatSnackBar,
  ) {}
}
