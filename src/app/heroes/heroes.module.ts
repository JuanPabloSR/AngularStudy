import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HeroesComponent, ListComponent],
  exports: [ListComponent],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
