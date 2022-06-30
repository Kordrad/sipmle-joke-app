import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-root',
  template: '<h1>Test</h1>',
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {}
