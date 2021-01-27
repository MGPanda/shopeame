import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { StarsComponent } from './components/stars/stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ItemCardComponent, StarsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ItemCardComponent,
  ]
})
export class SharedModule { }
