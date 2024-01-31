import { Component } from '@angular/core';
import {SharedModule} from "../../shared/shared/shared.module";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as counterAction from "../../counter/counter.action"

@Component({
  selector: 'app-mycounter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './mycounter.component.html',
  styleUrl: './mycounter.component.scss'
})
export class MycounterComponent {
  count$!: Observable<number>

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }

  increment() {
    this.store.dispatch(counterAction.increment());
  }

  decrement() {
    this.store.dispatch(counterAction.decrement());
  }

  reset() {
    this.store.dispatch(counterAction.reset());
  }
}
