import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as JokesActions from './jokes.actions';
import * as JokesSelectors from './jokes.selectors';
import { GuidType } from '@joke/web-jokes-domain-types';

@Injectable()
export class JokesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(JokesSelectors.getJokesLoaded));
  allJokes$ = this.store.pipe(select(JokesSelectors.getAllJokes));
  randomJoke$ = this.store.pipe(select(JokesSelectors.getRandomJoke));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  getJokes() {
    this.store.dispatch(JokesActions.getJokes());
  }

  getRandomJoke() {
    this.store.dispatch(JokesActions.getRandomJoke());
  }

  deleteJoke(jokeGuid: GuidType) {
    this.store.dispatch(JokesActions.deleteJoke({ id: jokeGuid }));
  }
}
