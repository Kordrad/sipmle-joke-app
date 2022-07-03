import { Action, createReducer, on } from '@ngrx/store';

import * as JokesActions from './jokes.actions';
import { JokeInterface } from '@joke/web-jokes-domain-types';

export const JOKES_FEATURE_KEY = 'jokes';

export interface State {
  jokes: JokeInterface[];
  jokesLoading: boolean;
  jokesError?: string | null;
  randomJoke: JokeInterface | null;
  randomJokeLoading: boolean;
  randomJokeError?: string | null;
  deleteJokeError?: string | null;
}

export interface JokesPartialState {
  readonly [JOKES_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
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

  on(JokesActions.deleteJoke, (state) => ({
    ...state,
    deleteJokeError: null,
  })),
  on(JokesActions.deleteJokeFailure, (state, { error }) => ({
    ...state,
    deleteJokeError: error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return jokesReducer(state, action);
}
