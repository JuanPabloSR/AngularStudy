import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _characters: Character[] = [
    {
      name: 'picolo',
      power: 12000,
    },
    {
      name: 'Goku',
      power: 24000,
    },
  ];

  get characters(): Character[] {
    return [...this._characters]
  }

  constructor() {}

  addCharacter( character: Character) {
    this._characters.push( character )
  }

}
