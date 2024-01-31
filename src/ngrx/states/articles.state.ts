import {ArticlesModel} from "../../models/articles.model";

export interface ArticleState {
  articles: ArticlesModel[];
  loading: boolean;
  error: string;
}
