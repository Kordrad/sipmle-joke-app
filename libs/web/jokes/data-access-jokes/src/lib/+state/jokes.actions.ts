import { GuidType, JokeInterface } from '@joke/web-jokes-domain-types';
import { createAction, props } from '@ngrx/store';

// Jokes
export const getJokes = createAction('[Jokes Page] Get Jokes');
export const loadJokesSuccess = createAction(
  '[Jokes/API] Load Jokes Success',
  props<{ jokes: JokeInterface[] }>(),
);
export const loadJokesFailure = createAction(
  '[Jokes/API] Load Jokes Failure',
  props<{ error: string }>(),
);

// Random Joke
export const getRandomJoke = createAction('[Jokes Page] Get Random Joke');
export const loadRandomJokeSuccess = createAction(
  '[Jokes/API] Load Random Joke Success',
  props<{ randomJoke: JokeInterface }>(),
);
export const loadRandomJokeFailure = createAction(
  '[Jokes/API] Load Random Jokes Failure',
  props<{ error: string }>(),
);

// Delete Joke
export const deleteJoke = createAction(
  '[Jokes/API] Delete Random Joke',
  props<{ id: GuidType }>(),
);
export const deleteJokeSuccess = createAction(
  '[Jokes/API] Delete Random Joke Success',
);
export const deleteJokeFailure = createAction(
  '[Jokes/API] Delete Random Joke Failure',
  props<{ error: string }>(),
);
