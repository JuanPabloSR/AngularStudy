import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  @Input() characters: Character[] = [
    {
      name: 'picolo',
      power: 12000,
    },
    {
      name: 'Goku',
      power: 24000,
    },
  ];

  new: Character = {
    name: 'Goten',
    power: 1200,
  };

  addNewCharacter(player: Character) {

    this.characters.push(player);
  }
}
