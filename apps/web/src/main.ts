import { enableProdMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/angular';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '@env';
import { routes } from './app/app.routing';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(NxModule.forRoot()),
    importProvidersFrom(EffectsModule.forRoot([])),
    importProvidersFrom(StoreRouterConnectingModule.forRoot()),
    importProvidersFrom(
      StoreModule.forRoot(
        {},
        {
          runtimeChecks: {
            strictActionImmutability: true,
            strictStateImmutability: true,
          },
        },
      ),
    ),
    importProvidersFrom(
      !environment.production ? StoreDevtoolsModule.instrument() : [],
    ),
  ],
}).catch((err): void => console.error(err));
