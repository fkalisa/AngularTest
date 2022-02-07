import { Component, OnInit } from '@angular/core';
import {ValueService} from "../value.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  private _value:any;

  constructor(private _valueService:ValueService) {

  }

  ngOnInit(): void {
    this.valueService.currentMessage.subscribe(aValue => {
      this.value = aValue;
    })
  }

  get valueService(): ValueService {
    return this._valueService;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  update(){
    this.valueService.updateMessage(this.value);

  }
}
