import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { GuidType, JokeInterface } from '@joke/web-shared-domain-types';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FeatureJokeAddDialogComponent } from '@joke/web-shared-feature-joke-add-dialog';
import { MatButtonModule } from '@angular/material/button';
import { WebSharedUiJokeCardComponent } from '@joke/web-shared-ui-joke-card';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-my-jokes-ui-jokes-view[jokes]',
  standalone: true,
  templateUrl: './web-my-jokes-ui-jokes-view.component.html',
  styleUrls: ['./web-my-jokes-ui-jokes-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FeatureJokeAddDialogComponent,
    WebSharedUiJokeCardComponent,
  ],
  providers: [],
})
export class WebMyJokesUiJokesViewComponent {
  @Input() set jokes(jokes: JokeInterface[] | null) {
    if (Array.isArray(jokes)) {
      this._jokes = jokes;
    }
  }
  get jokes(): JokeInterface[] {
    return this._jokes;
  }
  @Input() deleteJokeLoading: boolean | null = false;

  @Output() delete = new EventEmitter<GuidType>();

  private _jokes: JokeInterface[] = [];

  constructor(public dialog: MatDialog) {}

  openAddModal(): void {
    this.dialog.open(FeatureJokeAddDialogComponent, {
      data: {
        getNewJokesAfterAddJoke: true,
      },
    });
    // dialogRef.afterClosed().subscribe(() => );
  }

  deleteJoke(id: GuidType): void {
    if (this.deleteJokeLoading) {
      return;
    }
    this.delete.emit(id);
  }
}
