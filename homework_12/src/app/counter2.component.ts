import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter2',
  template:`
  
  <button (click)='decrement()'>-</button>
      {{counter}}
    <button (click)='increment()'>+</button>
  `,
  styles: []
})
export class Counter2Component implements OnInit {

   counter: number;
  //@Input() counter: number;
  //@Output() counterChange: EventEmitter<number>;
  newVal: number;
  constructor() {
     this.counter = 1;
    //this.counterChange = new EventEmitter();
  }

  increment() {
    
    this.counter = this.counter+1
    return false;
  }

  decrement() {
    
   this.counter = this.counter-1
    return false;
  }

  ngOnInit() {
  }

}
