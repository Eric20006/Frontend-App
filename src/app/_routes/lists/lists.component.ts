import { TitleConfigService } from './../../_services/title-config/title-config.service';
import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { Location } from '@angular/common';
import { Tasks } from 'src/app/_interfaces/tasks';

@Component({
  selector: 'school-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  public id!: string; //Important for card to can wrok right
  public item!: Tasks[];

  constructor(public titleConfig:TitleConfigService, public databank:DatabankService, private _location: Location) { }

  ngOnInit(): void {
    if (location.pathname == '/terminliste') {
      this.id = 'schedule';
      this.databank.getSchedules();
      this.item = this.databank.schedules;
    }
    else if (location.pathname == '/hausaufgaben') {
      this.id = 'homework';
      this.databank.getTasks();
      this.item = this.databank.tasks;
    }


  }
}
