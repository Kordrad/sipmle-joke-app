import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@joke/web-jokes-feature-joke-page').then(
            (m) => m.WebJokesFeatureJokePageComponent,
          ),
        pathMatch: 'full',
      },
    ],
  },
  // {
  //   path: 'my-jokes',
  //   loadComponent: () =>
  //     import('@joke/web/my-jokes/feature').then((m) => m.MyJokesComponent),
  // },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class WebShellModule {}
