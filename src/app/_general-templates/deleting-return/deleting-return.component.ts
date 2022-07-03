import { DeletingReturnService } from './../../_services/deleting-retur/deleting-return.service';
import { Component, OnInit } from '@angular/core';
import * as data from '../../../json/deleteReturn.json';

@Component({
  selector: 'school-deleting-return',
  templateUrl: './deleting-return.component.html',
  styleUrls: ['./deleting-return.component.scss']
})
export class DeletingReturnComponent implements OnInit {

  public counter: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data:any;

  constructor(private deletingReturn:DeletingReturnService) {
    this._data = data;
    this.counter = this.deletingReturn.counterConfig;
  }

  private counterFunc():void {
    setTimeout(()=> this.test(),1000);
  }

  private test():void {
    this.counter--;
    if(this.counter == 0) return;
    this.counterFunc();
  }

  ngOnInit(): void {
    this.counterFunc();
  }

}
