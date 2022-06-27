import { IdsService } from './../../_services/ids/ids.service';
import { Component, Input } from '@angular/core';
import { Tasks } from 'src/app/_interfaces/tasks';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import * as data from '../../../json/addTask.json';
import * as data2 from '../../../json/AllTasksChoosing.json';

@Component({
  selector: 'school-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Input() choosingAddString !: string;
  public showAddCard: boolean;
  public today: string;
  private task!: Tasks;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data2: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  constructor(public databank:DatabankService, public ids:IdsService) {
    this.showAddCard = false;
    this.today = new Date().toISOString().split('T')[0];
    this._data = data;
    this._data2 = data2;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public submit(value:any):void {
    if (value.task == '' || value.date == '') return;
    if (value.subject == '' && this.choosingAddString != this.ids.specificIDs[1]) return;
    if (value.date <= this.today ) return;

    this.showAddCard = false;

    let __getting;
    if (value.getting == '' || value.getting == false) __getting = false;
    else __getting = true;

    const newDay = new Date(value.date).getDate() + '.' + (new Date(value.date).getMonth() + 1) + '.' + new Date(value.date).getFullYear();



    this.task = {
      id: Date.now(),
      title: value.task,
      icon: value.subject,
      getting: __getting,
      date: newDay,
      __date: new Date(value.date),
      group: '',
    };

    console.log(value.choosingAdd);

    if (this.choosingAddString == this.ids.specificIDs[0]) {
      this.task.group = this._data2.task;
      return this.databank.addTask(this.task);
    } if (this.choosingAddString == this.ids.specificIDs[1]){
      this.task.group = this._data2.schedule;
      return this.databank.addSchedule(this.task);
    } if (this.choosingAddString == this.ids.specificIDs[2]){
      this.task.group = this._data2.examen;
      return this.databank.addExamen(this.task);
    } if (this.choosingAddString == this.ids.specificIDs[3]) {
        if (value.choosingAdd == 'task') {
          this.task.group = this._data2.task;
          this.databank.addTask(this.task);
        } if (value.choosingAdd == 'examen') {
          this.task.group = this._data2.examen;
          this.databank.addSchedule(this.task);
        } if (value.choosingAdd == 'schedule') {
          this.task.group = this._data2.schedule;
          this.databank.addExamen(this.task);
        }
        this.databank.addAll(this.task);
    }
  }

}
