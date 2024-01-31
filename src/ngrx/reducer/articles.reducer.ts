import { ArticleState } from '../states/articles.state';
import { createReducer, on } from '@ngrx/store';
import {
  getArticles,
  getArticlesFailure,
  getArticlesSuccess,
} from '../actions/articles.action';

export const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: '',
};
export const articleReducer = createReducer(
  initialState,
  on(getArticles, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(getArticlesSuccess, (state, { articles }) => {
    return {
      ...state,
      articles: articles,
      loading: false,
    };
  }),
  on(getArticlesFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
      loading: false,
    };
  }),
);
