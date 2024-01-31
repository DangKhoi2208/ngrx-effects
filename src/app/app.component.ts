import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycounterComponent } from './components/mycounter/mycounter.component';
import { CounterComponent } from './components/counter/counter.component';
import { Store } from '@ngrx/store';
import { ArticleState } from '../ngrx/states/articles.state';
import { getArticles } from '../ngrx/actions/articles.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MycounterComponent, CounterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx';

  constructor(private store: Store<{ articles: ArticleState }>) {
    this.store.dispatch(
      getArticles({
        q: 'tesla',
        from: '2023-12-31',
        sortBy: 'publishedAt',
      }),
    );
  }

  articles$ = this.store.select((state) => state.articles.articles);
  loading$ = this.store.select((state) => state.articles.loading);
  error$ = this.store.select((state) => state.articles.error);
}
