import { Component, Input } from '@angular/core';
import { Tasks } from 'src/app/_interfaces/tasks';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { IdsService } from 'src/app/_services/ids/ids.service';
import * as data from '../../../json/cardIcons.json';
import * as data2 from '../../../json/AllTasksChoosing.json';

@Component({
  selector: 'school-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data:any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data2:any;
  public todayDate: string;
  public date: Date;
  public tomorrowDate: string;
  @Input() task!: Tasks;
  @Input() choosingDeleteString!: string;


  constructor(private databank:DatabankService, private ids:IdsService) {
    this._data = data;
    this._data2 = data2;
    this.date = new Date();
    this.todayDate = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();
    this.tomorrowDate = (new Date().getDate() + 1) + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();
  }

  public choosingDelete():void {
    if (this.choosingDeleteString == this.ids.specificIDs[0]) return this.databank.deleteTask(this.task);
    if (this.choosingDeleteString == this.ids.specificIDs[1]) return this.databank.deleteSchedule(this.task);
    if (this.choosingDeleteString == this.ids.specificIDs[2]) return this.databank.deleteExamen(this.task);
    if (this.choosingDeleteString == this.ids.specificIDs[3]) {
      console.log(this.task.group);
      if (this.task.group == this._data2.task) {
        this.databank.deleteTask(this.task);
      } else if (this.task.group == this._data2.examen) {
        this.databank.deleteExamen(this.task);
      } else if (this.task.group == this._data2.schedule) {
        this.databank.deleteSchedule(this.task);
      }
      this.databank.deleteAll(this.task);
    }
  }
}
