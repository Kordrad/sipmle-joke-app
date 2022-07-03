import * as fromJokes from './+state/jokes.reducer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FakeJokesInterceptorService } from './_helpers/fake-jokes-interceptor.service';
import { JokesEffects } from './+state/jokes.effects';
import { JokesFacade } from './+state/jokes.facade';
import { JokesImpService } from './services/jokes-imp.service';
import { JokesService } from './services/jokes.service';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { environment } from '@env';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature(fromJokes.JOKES_FEATURE_KEY, fromJokes.reducer),
    EffectsModule.forFeature([JokesEffects]),
  ],
  providers: [
    JokesFacade,
    JokesImpService,
    {
      provide: JokesService,
      useExisting: JokesImpService,
    },
    ...((environment.demo && [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: FakeJokesInterceptorService,
        multi: true,
      },
    ]) ||
      []),
  ],
})
export class WebJokesDataAccessJokesModule {}
