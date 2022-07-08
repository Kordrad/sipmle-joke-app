import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { FeatureJokeAddDialogComponent } from '@joke/web-shared-feature-joke-add-dialog';
import { JokeInterface } from '@joke/web-shared-domain-types';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

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
  ],
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

  private _jokes: JokeInterface[] = [];

  constructor(public dialog: Dialog) {}

  openAddModal(): void {
    this.dialog.open(FeatureJokeAddDialogComponent);
  }
}
