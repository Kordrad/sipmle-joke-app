import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as JokesActions from './jokes.actions';
import * as JokesSelectors from './jokes.selectors';
import { GuidType, JokeFormInterface } from '@joke/web-shared-domain-types';
import { getDeleteJokeLoading } from './jokes.selectors';

@Injectable()
export class JokesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  allJokes$ = this.store.pipe(select(JokesSelectors.getAllJokes));
  categories$ = this.store.pipe(select(JokesSelectors.getCategories));
  deleteJokeLoading$ = this.store.pipe(
    select(JokesSelectors.getDeleteJokeLoading),
  );
  loaded$ = this.store.pipe(select(JokesSelectors.getJokesLoaded));
  randomJoke$ = this.store.pipe(select(JokesSelectors.getRandomJoke));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  addJoke(joke: JokeFormInterface, getNewJokes?: boolean) {
    this.store.dispatch(JokesActions.addJoke({ joke, getNewJokes }));
  }

  getJokes() {
    this.store.dispatch(JokesActions.getJokes());
  }

  getRandomJoke() {
    this.store.dispatch(JokesActions.getRandomJoke());
  }

  deleteJoke(jokeGuid: GuidType) {
    this.store.dispatch(JokesActions.deleteJoke({ id: jokeGuid }));
  }

  getCategories(): void {
    this.store.dispatch(JokesActions.getCategories());
  }
}
