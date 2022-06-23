import { Injectable } from '@angular/core';
import * as data from '../../../json/sidelist.json';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TitleConfigService {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data: any[];

  constructor(public _location: Location) {
    this._data = data;
  }

  public titleConfig():string {
    const path = location.pathname;
    for (let i = 0; i < this._data.length; i++) {
      if ('/' + this._data[i].path == path) return this._data[i].name;
    }
    return 'error';
  }
}
