import { Component } from '@angular/core';
import * as data from '../../../json/noTasks.json';

@Component({
  selector: 'school-no-tasks',
  templateUrl: './no-tasks.component.html',
  styleUrls: ['./no-tasks.component.scss']
})
export class NoTasksComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data: any;


  constructor() {
    this._data = data;
  }
}
