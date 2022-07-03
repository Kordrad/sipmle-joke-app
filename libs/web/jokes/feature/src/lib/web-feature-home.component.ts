import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  JokesFacade,
  WebJokesDataAccessJokesModule,
} from '@joke/web/jokes/data-access-jokes';
import { CommonModule } from '@angular/common';
import { GuidType } from '@joke/web-jokes-domain-types';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-feature',
  standalone: true,
  templateUrl: './web-feature-home.component.html',
  styleUrls: ['./web-feature-home.component.scss'],
  imports: [CommonModule, WebJokesDataAccessJokesModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebJokesFeatureComponent implements OnInit {
  allJokes$ = this.jokesFacade$.allJokes$;
  randomJoke$ = this.jokesFacade$.randomJoke$;

  constructor(private jokesFacade$: JokesFacade) {}
  ngOnInit(): void {
    this.jokesFacade$.getJokes();
  }

  delete(id: GuidType): void {
    this.jokesFacade$.deleteJoke(id);
  }

  random(): void {
    this.jokesFacade$.getRandomJoke();
  }
}
