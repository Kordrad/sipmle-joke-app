import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-root',
  template: `<router-outlet></router-outlet> `,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent {}
