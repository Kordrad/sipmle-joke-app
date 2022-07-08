import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { FeatureJokeAddDialogData } from './feature-joke-add-dialog-data.interface';
import { JokeFormInterface } from '@joke/web-shared-domain-types';
import { JokesFacade } from '@joke/web-shared-data-access-jokes';
import { WebJokesUiJokeAddComponent } from '@joke/web-jokes-ui-joke-add';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-feature-joke-add-dialog',
  standalone: true,
  templateUrl: './feature-joke-add-dialog.component.html',
  styleUrls: ['./feature-joke-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, WebJokesUiJokeAddComponent],
})
export class FeatureJokeAddDialogComponent implements OnInit {
  categories$ = this.jokesFacade.categories$;

  constructor(
    public dialogRef: DialogRef<FeatureJokeAddDialogData>,
    private jokesFacade: JokesFacade,
  ) {}

  ngOnInit(): void {
    this.jokesFacade.getCategories();
  }

  saveJoke(joke: JokeFormInterface): void {
    this.jokesFacade.addJoke(joke);
  }
}
