import { Component, OnInit } from '@angular/core';
import * as data from '../../../json/fullErrorCard.json';
import { Location } from '@angular/common';

@Component({
  selector: 'school-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  //BECAUSE: it comes from the JSON file \/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data:any;
  public errorMsg!: string;

  constructor(private _location:Location) {
    this._data = data;
  }

  ngOnInit(): void {
    if (location.pathname == this._data.locationPathnames.path2) return this.errorMsg = this._data.errorMessages.error2;
    if (location.pathname == this._data.locationPathnames.path3) return this.errorMsg = this._data.errorMessages.error3;
    if (location.pathname == this._data.locationPathnames.path4) return this.errorMsg = this._data.errorMessages.error4;
    return this.errorMsg = this.errorMsg = this._data.errorMessages.error1;
  }
}
