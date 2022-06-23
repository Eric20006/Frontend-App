import { TitleConfigService } from './../../_services/title-config/title-config.service';
import { Component, OnInit } from '@angular/core';
import { DatabankService } from 'src/app/_services/databank/databank.service';

@Component({
  selector: 'school-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  public id: string; //Important for card to can wrok right
  constructor(public titleConfig:TitleConfigService, public databank:DatabankService) {
    this.id = 'homework';
  }

  ngOnInit(): void {
    this.databank.getTasks();
  }
}
