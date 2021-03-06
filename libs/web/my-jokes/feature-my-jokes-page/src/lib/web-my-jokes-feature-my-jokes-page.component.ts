import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  JokesFacade,
  WebSharedDataAccessJokesModule,
} from '@joke/web-shared-data-access-jokes';
import { CommonModule } from '@angular/common';
import { GuidType } from '@joke/web-shared-domain-types';
import { WebMyJokesUiJokesViewComponent } from '@joke/web-my-jokes-ui-jokes-view';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-my-jokes-page',
  standalone: true,
  templateUrl: 'web-my-jokes-feature-my-jokes-page.component.html',
  imports: [
    CommonModule,
    WebMyJokesUiJokesViewComponent,
    WebSharedDataAccessJokesModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebMyJokesFeatureMyJokesPageComponent implements OnInit {
  allJokes$ = this.jokesFacade.allJokes$;
  deleteJokeLoading$ = this.jokesFacade.deleteJokeLoading$;
  constructor(private jokesFacade: JokesFacade) {}

  ngOnInit(): void {
    this.jokesFacade.getJokes();
  }

  deleteJoke(jokeGuid: GuidType) {
    this.jokesFacade.deleteJoke(jokeGuid);
  }
}
