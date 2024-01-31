import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycounterComponent } from './components/mycounter/mycounter.component';
import { CounterComponent } from './components/counter/counter.component';
import { Store } from '@ngrx/store';
import { ArticleState } from '../ngrx/states/articles.state';
import { getArticles } from '../ngrx/actions/articles.action';
import { AsyncPipe } from '@angular/common';
import { PokeStates } from '../ngrx/poke/poke.states';
import { getPokeListByGen } from '../ngrx/poke/poke.actions';
import Index from '@angular/compiler-cli/linker/babel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MycounterComponent, CounterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ngrx';

  genList = [
    {
      name: 'I',
      value: 'i',
    },
    {
      name: 'II',
      value: 'ii',
    },
    {
      name: 'III',
      value: 'iii',
    },
    {
      name: 'IV',
      value: 'iv',
    },
    {
      name: 'V',
      value: 'v',
    },
    {
      name: 'VI',
      value: 'vi',
    },
    {
      name: 'VII',
      value: 'vii',
    },
    {
      name: 'VIII',
      value: 'viii',
    },
  ];

  constructor(private store: Store<{ poke: PokeStates }>) {}

  poke$ = this.store.select((state) => state.poke.list);

  loading$ = this.store.select((state) => state.poke.loading);
  error$ = this.store.select((state) => state.poke.error);

  getPokeList(gen: string) {
    this.store.dispatch(getPokeListByGen({ gen: gen }));
  }

  list: any = [];

  ngOnInit() {
    this.getPokeList('i');
    this.poke$.subscribe((res) =>
      res.forEach((item: any) => this.list.push(item)),
    );
    console.log(this.list);
  }
}
