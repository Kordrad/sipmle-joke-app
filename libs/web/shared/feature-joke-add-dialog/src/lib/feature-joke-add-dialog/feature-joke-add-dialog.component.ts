import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { JokeFormInterface } from '@joke/web-shared-domain-types';
import { JokesFacade } from '@joke/web-shared-data-access-jokes';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebSharedUiJokeAddComponent } from '@joke/web-shared-ui-joke-add';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-feature-joke-add-dialog',
  standalone: true,
  templateUrl: './feature-joke-add-dialog.component.html',
  styleUrls: ['./feature-joke-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, WebSharedUiJokeAddComponent],
})
export class FeatureJokeAddDialogComponent implements OnInit {
  categories$ = this.jokesFacade.categories$;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { getNewJokesAfterAddJoke: boolean },
    public dialogRef: DialogRef<FeatureJokeAddDialogComponent>,
    private jokesFacade: JokesFacade,
  ) {}

  ngOnInit(): void {
    this.jokesFacade.getCategories();
  }

  saveJoke(joke: JokeFormInterface): void {
    this.jokesFacade.addJoke(joke, this.data.getNewJokesAfterAddJoke);
  }
}
