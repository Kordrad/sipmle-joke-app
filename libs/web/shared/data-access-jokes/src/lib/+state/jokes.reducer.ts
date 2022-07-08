import { Action, createReducer, on } from '@ngrx/store';

import * as JokesActions from './jokes.actions';
import {
  JokeCategoryInterface,
  JokeInterface,
} from '@joke/web-shared-domain-types';

export const JOKES_FEATURE_KEY = 'jokes';

export interface State {
  categories: JokeCategoryInterface[];
  categoriesError?: string | null;
  categoriesLoading: boolean;
  deleteJokeError?: string | null;
  deleteJokeLoading: boolean;
  jokes: JokeInterface[];
  jokesError?: string | null;
  jokesLoading: boolean;
  randomJoke: JokeInterface | null;
  randomJokeError?: string | null;
  randomJokeLoading: boolean;
}

export interface JokesPartialState {
  readonly [JOKES_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  categories: [],
  categoriesLoading: false,
  deleteJokeLoading: false,
  jokes: [],
  jokesLoading: false,
  randomJoke: null,
  randomJokeLoading: false,
};

const jokesReducer = createReducer(
  initialState,

  // Jokes
  on(JokesActions.getJokes, (state) => ({
    ...state,
    jokesLoading: false,
    jokesError: null,
  })),
  on(JokesActions.loadJokesSuccess, (state, { jokes }) => ({
    ...state,
    jokesLoading: true,
    jokes,
  })),
  on(JokesActions.loadJokesFailure, (state, { error }) => ({
    ...state,
    jokesError: error,
  })),

  // Random Joke
  on(JokesActions.getRandomJoke, (state) => ({
    ...state,
    randomJokeLoading: false,
    randomJokeError: null,
  })),
  on(JokesActions.loadRandomJokeSuccess, (state, { randomJoke }) => ({
    ...state,
    randomJokeLoading: true,
    randomJoke,
  })),
  on(JokesActions.loadRandomJokeFailure, (state, { error }) => ({
    ...state,
    randomJokeError: error,
  })),

  // Delete
  on(JokesActions.deleteJoke, (state) => ({
    ...state,
    deleteJokeError: null,
    deleteJokeLoading: true,
  })),
  on(JokesActions.deleteJokeSuccess, (state) => ({
    ...state,
    deleteJokeLoading: false,
  })),
  on(JokesActions.deleteJokeFailure, (state, { error }) => ({
    ...state,
    deleteJokeLoading: false,
    deleteJokeError: error,
  })),

  // Random Joke
  on(JokesActions.getCategories, (state) => ({
    ...state,
    categories: [],
    categoriesLoading: true,
  })),
  on(JokesActions.loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    categoriesLoading: false,
  })),
  on(JokesActions.loadCategoriesFailure, (state, { error }) => ({
    ...state,
    categoriesError: error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return jokesReducer(state, action);
}
