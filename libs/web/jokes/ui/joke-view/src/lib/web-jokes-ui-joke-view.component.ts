import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { FeatureJokeAddDialogComponent } from '@joke/web-jokes-feature-joke-add-dialog';
import { JokeInterface } from '@joke/web-shared-domain-types';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WebJokesUiJokeCardComponent } from '@joke/web/jokes/ui/joke-card';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-jokes-ui-joke-view[joke]',
  standalone: true,
  templateUrl: './web-jokes-ui-joke-view.component.html',
  styleUrls: ['./web-jokes-ui-joke-view.component.scss'],
  imports: [
    CommonModule,
    WebJokesUiJokeCardComponent,
    MatButtonModule,
    MatDialogModule,
    FeatureJokeAddDialogComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebJokesUiJokeViewComponent {
  @Input() joke!: JokeInterface | null;
  @Output() getRandomJoke = new EventEmitter<void>();

  constructor(public dialog: Dialog) {}

  openAddModal(): void {
    this.dialog.open(FeatureJokeAddDialogComponent);
  }
}
