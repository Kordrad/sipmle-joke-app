import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { FeatureJokeAddDialogComponent } from '@joke/web-shared-feature-joke-add-dialog';
import { JokeInterface } from '@joke/web-shared-domain-types';
import { MatButtonModule } from '@angular/material/button';
import { WebSharedUiJokeCardComponent } from '@joke/web-shared-ui-joke-card';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-jokes-ui-joke-view[joke]',
  standalone: true,
  templateUrl: './web-jokes-ui-joke-view.component.html',
  styleUrls: ['./web-jokes-ui-joke-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    WebSharedUiJokeCardComponent,
    MatButtonModule,
    MatDialogModule,
    FeatureJokeAddDialogComponent,
  ],
})
export class WebJokesUiJokeViewComponent {
  @Input() joke!: JokeInterface | null;
  @Output() getRandomJoke = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  openAddModal(): void {
    this.dialog.open(FeatureJokeAddDialogComponent);
  }
}
