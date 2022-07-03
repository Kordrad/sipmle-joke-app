import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WebSharedShellComponent } from './web-shared-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: WebSharedShellComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@joke/web-feature-jokes').then(
            (m) => m.WebFeatureJokesComponent,
          ),
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class WebSharedShellModule {}
