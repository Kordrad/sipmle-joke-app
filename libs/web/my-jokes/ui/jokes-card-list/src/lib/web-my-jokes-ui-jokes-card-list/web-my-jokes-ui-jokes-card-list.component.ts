import { ChangeDetectionStrategy, Component } from '@angular/core';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-my-jokes-ui-jokes-card-list[jokes]',
  standalone: true,
  templateUrl: './web-my-jokes-ui-jokes-card-list.component.html',
  styleUrls: ['./web-my-jokes-ui-jokes-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebMyJokesUiJokesCardListComponent {}
