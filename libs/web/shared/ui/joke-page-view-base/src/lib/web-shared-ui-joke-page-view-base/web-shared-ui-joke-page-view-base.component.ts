import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { FeatureJokeAddDialogComponent } from '@joke/web-shared-feature-joke-add-dialog';
import { MatButtonModule } from '@angular/material/button';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-shared-ui-joke-page-view-base',
  standalone: true,
  templateUrl: './web-shared-ui-joke-page-view-base.component.html',
  styleUrls: ['./web-shared-ui-joke-page-view-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule],
})
export class WebSharedUiJokePageViewBaseComponent {
  constructor(public dialog: Dialog) {}

  openAddModal(): void {
    this.dialog.open(FeatureJokeAddDialogComponent);
  }
}
