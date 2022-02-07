import { Component, OnInit } from '@angular/core';
import {ValueService} from "../value.service";

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  _value : any;

  constructor(private _valueService:ValueService) {
  }

  ngOnInit(): void {
    this.valueService.currentMessage.subscribe(resp => {
      this.value = resp;
    })
  }

  get valueService(): ValueService {
    return this._valueService;
  }


  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
  }

  update(){
    this.valueService.updateMessage(this.value);
  }
}
