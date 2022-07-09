import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebUiNavComponent } from '@joke/web/ui/nav';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-shell',
  templateUrl: 'shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, WebUiNavComponent],
})
export class ShellComponent {}
