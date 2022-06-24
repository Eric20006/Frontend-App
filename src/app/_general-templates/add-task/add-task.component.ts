import { Component, Input } from '@angular/core';
import { Tasks } from 'src/app/_interfaces/tasks';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import * as data from '../../../json/addTask.json';

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

  constructor(public databank:DatabankService) {
    this.showAddCard = false;
    this.today = new Date().toISOString().split('T')[0];
    this._data = data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public submit(value:any):void {
    if (value.task == '' || value.date == '') return;
    if (value.subject == '' && this.choosingAddString != 'schedule') return;
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
      __date: new Date(value.date)
    };

    console.log(this.task);

    if (this.choosingAddString == 'homework') return this.databank.addTask(this.task);
    if (this.choosingAddString == 'schedule') return this.databank.addSchedule(this.task);
  }

}
