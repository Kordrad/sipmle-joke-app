import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-jokes-ui-joke-card[category][content]',
  standalone: true,
  templateUrl: './web-jokes-ui-joke-card.component.html',
  styleUrls: ['./web-jokes-ui-joke-card.component.scss'],
  imports: [CommonModule],
})
export class WebJokesUiJokeCardComponent {
  @Input() category = '';
  @Input() content = '';
}
