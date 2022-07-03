import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WebShellComponent } from './web-shared-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: WebShellComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@joke/web-jokes-feature').then(
            (m) => m.WebJokesFeatureComponent,
          ),
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class WebShellModule {}
