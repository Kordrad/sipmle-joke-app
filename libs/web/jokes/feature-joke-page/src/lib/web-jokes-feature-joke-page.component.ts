import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  JokesFacade,
  WebSharedDataAccessJokesModule,
} from '@joke/web-shared-data-access-jokes';
import { CommonModule } from '@angular/common';
import { WebJokesUiJokeViewComponent } from '@joke/web-jokes-ui-joke-view';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-feature',
  standalone: true,
  templateUrl: './web-jokes-feature-joke-page.component.html',
  imports: [
    CommonModule,
    WebSharedDataAccessJokesModule,
    WebJokesUiJokeViewComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebJokesFeatureJokePageComponent implements OnInit {
  randomJoke$ = this.jokesFacade$.randomJoke$;

  constructor(private jokesFacade$: JokesFacade) {}

  ngOnInit(): void {
    this.getRandom();
  }

  getRandom(): void {
    this.jokesFacade$.getRandomJoke();
  }
}
