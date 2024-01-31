import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {SharedModule} from "../../shared/shared/shared.module";

@Component({
  selector: 'app-counter',
  standalone: true,
    imports: [
        SharedModule
    ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$!: Observable<number>

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }

}
