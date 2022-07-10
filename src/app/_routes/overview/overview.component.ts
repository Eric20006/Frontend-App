import { DatabankService } from 'src/app/_services/databank/databank.service';
import { TitleConfigService } from './../../_services/title-config/title-config.service';
import { AccountService } from './../../_services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { OverviewContent } from 'src/app/_interfaces/overview-content';
import * as data from '../../../json/sidelist.json';

@Component({
  selector: 'school-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public allContent: OverviewContent[];


  public tomorrowDate: number;
  public date: number;
  private word: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _data:any;

  constructor(private account:AccountService, public titleConfig:TitleConfigService, private databank:DatabankService) {
    this.date = new Date().getTime();
    this.tomorrowDate = new Date().setDate(new Date().getDate() + 1);
    this._data = data;
    this.word = 'Dringlich';

    this.allContent = [{
        title: this._data[2].name,
        specificWord: this.word,
        content: [],
        path: this._data[2].path,
        size: 0,
      },{
        title: this._data[3].name,
        specificWord: this.word,
        content:[],
        path: this._data[3].path,
        size: 0,
      },{
        title: this._data[4].name,
        specificWord: this.word,
        content:[],
        path: this._data[4].path,
        size: 0,
      },{
        title: this._data[6].name,
        specificWord: this.word,
        content:[],
        path: this._data[6].path,
        size: 0,
      }];
  }

  private getContent():void {
    for (let i = 0; i < this.allContent.length; i++) {
      if (this.allContent[i].title == this._data[2].name) {
        this.databank.getTasks();
        for (let i2 = 0; i2 < this.databank.tasks.length; i2++) {
          if (this.databank.tasks[i2].__date.getTime() > this.date && this.databank.tasks[i2].__date.getTime() < this.tomorrowDate) {
            this.allContent[i].content.push(this.databank.tasks[i2].title + ' (' + this.databank.tasks[i2].icon + ')');
          }
        }
      } else if (this.allContent[i].title == this._data[3].name) {
        this.databank.getSchedules();
        for (let i2 = 0; i2 < this.databank.schedules.length; i2++) {
          if (this.databank.schedules[i2].__date.getTime() > this.date && this.databank.schedules[i2].__date.getTime() < this.tomorrowDate) {
            this.allContent[i].content.push(this.databank.schedules[i2].title);
          }
        }
      } else if (this.allContent[i].title == this._data[4].name) {
        this.databank.getExamens();
        for (let i2 = 0; i2 < this.databank.examens.length; i2++) {
          if (this.databank.examens[i2].__date.getTime() > this.date && this.databank.examens[i2].__date.getTime() < this.tomorrowDate) {
            this.allContent[i].content.push(this.databank.examens[i2].title + ' (' + this.databank.examens[i2].icon + ')');
          }
        }
      } else if (this.allContent[i].title == this._data[6].name) {
        //this.databank.getCalendar();
        //TODO:
      }


      if (this.allContent[i].content.length == 0) this.allContent[i].size = -1;
      else if (this.allContent[i].content.length > 6) this.allContent[i].size = 2;
      else if (this.allContent[i].content.length > 3) this.allContent[i].size = 1;
      else if (this.allContent[i].content.length > 0) this.allContent[i].size = 0;
    }
  }


  ngOnInit(): void {
    if (!this.account.control()) return;
    this.getContent();
  }

}

