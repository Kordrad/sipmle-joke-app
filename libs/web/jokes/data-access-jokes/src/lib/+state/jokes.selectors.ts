import { JOKES_FEATURE_KEY, State } from './jokes.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Lookup the 'Jokes' feature state managed by NgRx
export const getJokesState = createFeatureSelector<State>(JOKES_FEATURE_KEY);

export const getJokesLoaded = createSelector(
  getJokesState,
  (state: State) => state.jokesLoading,
);

export const getJokesError = createSelector(
  getJokesState,
  (state: State) => state.jokesError,
);

export const getAllJokes = createSelector(
  getJokesState,
  (state: State) => state.jokes,
);

export const getRandomJokeLoaded = createSelector(
  getJokesState,
  (state: State) => state.randomJokeLoading,
);

export const getRandomJokeError = createSelector(
  getJokesState,
  (state: State) => state.randomJokeError,
);

export const getRandomJoke = createSelector(
  getJokesState,
  (state: State) => state.randomJoke,
);
