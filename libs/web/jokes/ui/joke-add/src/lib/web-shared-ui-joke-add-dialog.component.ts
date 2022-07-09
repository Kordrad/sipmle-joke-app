import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  JokeCategoryInterface,
  JokeFormInterface,
} from '@joke/web-shared-domain-types';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-shared-ui-joke-add-dialog[categories]',
  standalone: true,
  templateUrl: './web-shared-ui-joke-add-dialog.component.html',
  styleUrls: ['./web-shared-ui-joke-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class WebJokesUiJokeAddComponent {
  @Input() categories: JokeCategoryInterface[] = [];
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveJoke = new EventEmitter<JokeFormInterface>();

  form = this.fb.nonNullable.group<JokeFormInterface>({
    category: this.categories[0]?.id,
    content: '',
  });

  constructor(private fb: FormBuilder) {}

  save(): void {
    this.saveJoke.emit(this.form.value as JokeFormInterface);
    this.closeModal.emit();
  }
}
