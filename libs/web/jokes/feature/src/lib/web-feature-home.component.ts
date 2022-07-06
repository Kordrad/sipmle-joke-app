import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  JokesFacade,
  WebJokesDataAccessJokesModule,
} from '@joke/web/jokes/data-access-jokes';
import { CommonModule } from '@angular/common';
import { WebJokesUiJokeViewComponent } from '@joke/web/jokes/ui/joke-view';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-feature',
  standalone: true,
  templateUrl: './web-feature-home.component.html',
  imports: [
    CommonModule,
    WebJokesDataAccessJokesModule,
    WebJokesUiJokeViewComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebJokesFeatureComponent implements OnInit {
  // allJokes$ = this.jokesFacade$.allJokes$;
  randomJoke$ = this.jokesFacade$.randomJoke$;

  constructor(private jokesFacade$: JokesFacade) {}

  ngOnInit(): void {
    this.jokesFacade$.getRandomJoke();
  }
  //
  // delete(id: GuidType): void {
  //   this.jokesFacade$.deleteJoke(id);
  // }
  //
  getRandom(): void {
    this.jokesFacade$.getRandomJoke();
  }
}
