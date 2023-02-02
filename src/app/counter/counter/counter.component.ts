import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      The Base is: <strong> {{ base }} </strong>
    </h3>

    <button (click)="collect(base)">{{ base }}</button>

    <span>{{ number }}</span>

    <button (click)="collect(-base)">-{{ base }}</button>
  `,
})
export class CounterComponent {
  title: string = 'Contador App';
  number: number = 10;
  base: number = 5;

  collect( value: number ) {
    this.number += value;
  }
}
