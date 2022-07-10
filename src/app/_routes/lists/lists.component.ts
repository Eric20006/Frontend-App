import { AccountService } from './../../_services/account/account.service';
import { DeletingReturnService } from './../../_services/deleting-retur/deleting-return.service';
import { DetailedContentService } from './../../_services/detailed-content/detailed-content.service';
import { TitleConfigService } from './../../_services/title-config/title-config.service';
import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { Location } from '@angular/common';
import { Tasks } from 'src/app/_interfaces/tasks';
import { IdsService } from 'src/app/_services/ids/ids.service';
import * as data from '../../../json/lists.json';
import * as data2 from '../../../json/AllTasksChoosing.json';
import * as data3 from '../../../json/cardIcons.json';



@Component({
  selector: 'school-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  public id!: string; //Important for card to can wrok right
  public item!: Tasks[];
  public controlToggle: boolean[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data2: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data3: any;

  public tomorrowDate: number;
  public date: number;

  constructor(public titleConfig:TitleConfigService, public databank:DatabankService, private _location: Location, public ids:IdsService, public detailedContent:DetailedContentService, public deletingReturn:DeletingReturnService, private account:AccountService) {
    this._data = data;
    this._data2 = data2;
    this._data3 = data3;
    this.controlToggle = [true, true, true];
    this.date = new Date().getTime();
    this.tomorrowDate = new Date().setDate(new Date().getDate() + 1);

  }

  public toggle(value:string):void {
    for (let i = 0; i < this.controlToggle.length; i++) {
      if (value == this._data.allChoosingWhichTask[i].value) {
        if (this.controlToggle[i]) this.controlToggle[i] = false;
        else this.controlToggle[i] = true;
        return console.log(true);
      }
    }
  }

  private getContent(): void {
    if (location.pathname == '/terminliste') {
      this.id = this.ids.specificIDs[1];
      this.databank.getSchedules();
      this.item = this.databank.schedules;
    } else if (location.pathname == '/hausaufgaben') {
      this.id = this.ids.specificIDs[0];
      this.databank.getTasks();
      this.item = this.databank.tasks;
    } else if (location.pathname == '/pruefungen') {
      this.id = this.ids.specificIDs[2];
      this.databank.getExamens();
      this.item = this.databank.examens;
    } else if (location.pathname == '/gemischte_liste') {
      this.databank.getSchedules();
      this.databank.getExamens();
      this.databank.getTasks();
      this.databank.all();

      this.id = this.ids.specificIDs[3];
      this.item = this.databank.allTasks;
    }
  }

  ngOnInit(): void {
    if (!this.account.control()) return;

    this.getContent();
  }


}
