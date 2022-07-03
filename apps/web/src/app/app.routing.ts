import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@joke/web-shell').then((m) => m.WebShellModule),
    pathMatch: 'full',
  },
];
