import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  
  <ng-template #other_content> <h1>My Other content</h1> </ng-template>
  <app-counter [counter]="ComponentCounterValue" (counterChange)=updateCounter($event) ></app-counter><br>
  <app-counter2 ></app-counter2>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue;
  title = 'Counter App';

  constructor() {
    this.ComponentCounterValue = 10;
  }

  updateCounter(newValue: number) {
    this.ComponentCounterValue = newValue;
  }

}
