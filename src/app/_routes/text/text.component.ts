import { AccountService } from './../../_services/account/account.service';
import { TitleConfigService } from './../../_services/title-config/title-config.service';
import { Component, OnInit } from '@angular/core';
import * as data from '../../../json/overUS.json';
import * as data2 from '../../../json/privacy.json';

@Component({
  selector: 'school-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit{

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public __data!:any;

  constructor(public titleConfig:TitleConfigService, private account:AccountService) { }

  ngOnInit(): void {
    if (!this.account.control()) return;

    if (location.pathname == '/ueber_uns') this.__data = data;
    else if (location.pathname == '/datenschutz') this.__data = data2;
  }
}
