import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'my-jokes',
        loadComponent: () =>
          import('@joke/web/my-jokes/feature-my-jokes-page').then(
            (m) => m.WebMyJokesFeatureMyJokesPageComponent,
          ),
      },
      {
        path: 'joke',
        pathMatch: 'full',
        loadComponent: () =>
          import('@joke/web-jokes-feature-joke-page').then(
            (m) => m.WebJokesFeatureJokePageComponent,
          ),
      },
      {
        path: '',
        redirectTo: 'joke',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class WebShellModule {}
