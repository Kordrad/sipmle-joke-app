import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeInterface } from '@joke/web-jokes-domain-types';
import { WebJokesUiJokeCardComponent } from '@joke/web/jokes/ui/joke-card';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-jokes-ui-joke-view[joke]',
  standalone: true,
  templateUrl: './web-jokes-ui-joke-view.component.html',
  styleUrls: ['./web-jokes-ui-joke-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, WebJokesUiJokeCardComponent],
})
export class WebJokesUiJokeViewComponent {
  @Input() joke!: JokeInterface | null;
  @Output() getRandomJoke = new EventEmitter<void>();
}
