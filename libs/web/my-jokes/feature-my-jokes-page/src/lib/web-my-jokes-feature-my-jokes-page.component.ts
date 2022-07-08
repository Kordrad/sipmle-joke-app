import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-my-jokes-page',
  standalone: true,
  templateUrl: 'web-my-jokes-feature-my-jokes-page.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebMyJokesFeatureMyJokesPageComponent {}
