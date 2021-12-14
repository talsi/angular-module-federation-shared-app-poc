import { Injectable } from '@angular/core';

console.log('CounterService OUTSIDE');

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public count = 0;

  constructor() {
    console.log('CounterService INSIDE');
  }
}
