import { DatabankService } from './../../_services/databank/databank.service';
import { Component } from '@angular/core';
import * as data from '../../../json/login.json';

@Component({
  selector: 'school-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data:any;

  constructor(public databank:DatabankService) {
    this._data = data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public submit(value:any):void {
    if (value.name == '' || value.pass == '') return;

    this.databank.login(value);
  }
}
