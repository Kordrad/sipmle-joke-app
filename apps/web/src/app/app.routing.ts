import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@joke/web/shared/shell').then((m) => m.WebSharedShellModule),
    pathMatch: 'full',
  },
];
