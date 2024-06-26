import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './States/Add Cart/addcart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideHttpClient(),
      provideStore(),
      provideState({name:'cart', reducer: cartReducer})
  ]
};
