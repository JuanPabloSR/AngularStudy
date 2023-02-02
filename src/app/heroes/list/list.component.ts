import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  muguiwaras: string[] = ['Luffy', 'zoro', 'Sanji'];

  heroDelete: string = '';

  deleteMuguiwara() {
    this.heroDelete = this.muguiwaras.shift() || '';
  }
}
