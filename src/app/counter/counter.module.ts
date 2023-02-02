import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
  imports: [
    CommonModule
  ]
})
export class CountModule {}
