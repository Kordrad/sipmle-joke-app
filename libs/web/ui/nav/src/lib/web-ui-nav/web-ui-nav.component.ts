import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkPathInterface } from '@joke/web-jokes-domain-types';
import { RouterModule } from '@angular/router';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'joke-web-ui-nav[logoSrc]',
  templateUrl: './web-ui-nav.component.html',
  styleUrls: ['./web-ui-nav.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
})
export class WebUiNavComponent {
  @Input() logoSrc = '';

  readonly routes: RouterLinkPathInterface[] = [
    {
      label: 'Żarty',
      url: '/',
    },
    {
      label: 'Moje żarty',
      url: '/test',
    },
  ];
}
