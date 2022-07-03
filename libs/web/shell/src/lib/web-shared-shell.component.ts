import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebUiNavComponent } from '@joke/web/ui/nav';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-shell',
  templateUrl: 'web-shared-shell.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, WebUiNavComponent],
})
export class WebShellComponent {}
