import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

console.log(`CounterComponent - OUTSIDE`);

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
