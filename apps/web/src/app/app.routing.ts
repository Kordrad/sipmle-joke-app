import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@joke/web-shell').then((m) => m.WebShellModule),
    // pathMatch: 'full',
  },
  // {
  //   path: 'my-jokes',
  //   loadComponent: () =>
  //     import('@joke/web/my-jokes/feature-my-jokes-page').then(
  //       (m) => m.WebMyJokesFeatureMyJokesPageComponent,
  //     ),
  // },
];
