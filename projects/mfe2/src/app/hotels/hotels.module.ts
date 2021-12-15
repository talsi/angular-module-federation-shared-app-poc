import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsSearchComponent } from './hotels-search/hotels-search.component';
import { RouterModule } from '@angular/router';
import { HOTELS_ROUTES } from './hotels.routes';
import { CounterModule } from 'common';

@NgModule({
  imports: [
    CommonModule,
    CounterModule,
    RouterModule.forChild(HOTELS_ROUTES),
  ],
  declarations: [
    HotelsSearchComponent
  ]
})
export class HotelsModule { }
