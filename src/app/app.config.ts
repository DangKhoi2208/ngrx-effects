import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { articleReducer } from '../ngrx/reducer/articles.reducer';
import { provideHttpClient } from '@angular/common/http';
import { ArticleEffects } from '../ngrx/effects/article.effects';
import { PokeEffects } from '../ngrx/poke/poke.effects';
import { pokeReducer } from '../ngrx/poke/poke.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      articles: articleReducer,
      poke: pokeReducer,
    }),
    provideState({ name: 'counter', reducer: counterReducer }),

    provideEffects([ArticleEffects, PokeEffects]),
    provideHttpClient(),
  ],
};
