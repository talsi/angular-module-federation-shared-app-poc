import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsSearchComponent } from './hotels-search/hotels-search.component';
import { RouterModule } from '@angular/router';
import { HOTELS_ROUTES } from './hotels.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(HOTELS_ROUTES)
  ],
  declarations: [
    HotelsSearchComponent
  ]
})
export class HotelsModule { }
