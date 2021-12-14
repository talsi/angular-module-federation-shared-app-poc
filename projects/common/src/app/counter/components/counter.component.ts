import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { CounterService } from '../services/counter.service';


@Component({
  selector: 'app-common-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  get count(): number {
    return this.counterService.count;
  }

  constructor(private counterService: CounterService) {
  }

  add(): void {
    this.counterService.count++;
  }
}
