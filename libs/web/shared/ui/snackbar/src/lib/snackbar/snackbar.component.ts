import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-snackbar',
  standalone: true,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class SnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { title: string; message: string },
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
  ) {}
}
