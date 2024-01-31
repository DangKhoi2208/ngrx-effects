import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AsyncPipe,
  ],
  exports:[
    CommonModule,
    AsyncPipe,
  ]
})
export class SharedModule { }
