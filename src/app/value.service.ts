import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValueService {

   _value= 0;
  private behaviorSubject = new  BehaviorSubject(this._value);

  currentMessage = this.behaviorSubject.asObservable();

  constructor() {
  }


  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
    this.behaviorSubject.next(value);
  }

  updateMessage(value: number){
    this.behaviorSubject.next(value);
  }

}
