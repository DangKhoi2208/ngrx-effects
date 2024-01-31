import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticlesService } from '../../app/services/articles.service';
import * as ArticlesActions from '../actions/articles.action';
import { catchError, map, of, switchMap, switchScan } from 'rxjs';
import { ArticlesModel } from '../../models/articles.model';

@Injectable()
export class ArticleEffects {
  constructor(
    private action: Actions,
    private acticleService: ArticlesService,
  ) {}

  $getArticles = createEffect(() =>
    this.action.pipe(
      ofType(ArticlesActions.getArticles),
      switchMap((action) =>
        this.acticleService
          .getArticles(action.q, action.from, action.sortBy)
          .pipe(
            map((articles: any) =>
              ArticlesActions.getArticlesSuccess({
                articles: articles['articles'],
              }),
            ),
            catchError((error) =>
              of(ArticlesActions.getArticlesFailure({ error })),
            ),
          ),
      ),
    ),
  );
}
