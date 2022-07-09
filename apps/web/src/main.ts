import { enableProdMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

const providers = [
  RouterModule.forRoot(routes),
  BrowserAnimationsModule,
  NxModule.forRoot(),
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot(),
  StoreModule.forRoot(
    {},
    {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    },
  ),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(...providers)],
}).catch((err): void => console.error(err));
