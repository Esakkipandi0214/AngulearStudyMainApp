import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  // step1: create a signal that holds the counter value
  count_value = signal(0)
  // step2: create a three functions to increase , reset and decrease the values of the counter 
  handleincrement(){
    this.count_value.update((val)=> val +1);
  }

  handledecrement(){
    this.count_value.update((val)=> val -1);
  }

  handlereset(){
    this.count_value.set(0);
  }
}
