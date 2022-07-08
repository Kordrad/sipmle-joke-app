import {
  GuidType,
  JokeCategoryInterface,
  JokeFormInterface,
  JokeInterface,
} from '@joke/web-shared-domain-types';
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

// Add Joke
export const addJoke = createAction(
  '[Jokes/API] Add Joke',
  props<{ joke: JokeFormInterface; getNewJokes?: boolean }>(),
);
export const addJokeSuccess = createAction(
  '[Jokes/API] Add Joke Success',
  props<{ getNewJokes?: boolean }>(),
);
export const addJokeFailure = createAction(
  '[Jokes/API] Add Joke Failure',
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

// Get Categories
export const getCategories = createAction('[Jokes Page] Get Categories');
export const loadCategoriesSuccess = createAction(
  '[Jokes/API] Load Categories Success',
  props<{ categories: JokeCategoryInterface[] }>(),
);
export const loadCategoriesFailure = createAction(
  '[Jokes/API] Load Categories Failure',
  props<{ error: string }>(),
);
