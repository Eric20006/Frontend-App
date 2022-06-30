import { Injectable } from '@angular/core';
import { Tasks } from 'src/app/_interfaces/tasks';

@Injectable({
  providedIn: 'root'
})
export class DatabankService {

  public tasks!:Tasks[];
  public schedules!: Tasks[];
  public examens!: Tasks[];
  public allTasks!: Tasks[];
  public icons!: string[];
  public changeScheduleSorting!:boolean;
  test!:string;             //TODO:


  //Tasks

  public getTasks():void {
    this.tasks = [ {      //TODO:
      id: 234,
      title: 'Raumanalyse',
      __date: new Date(),
      date: this.gettingDate(),
      getting: false,
      icon: 'Geo1',
      group: 'task',
      information: 'sadfgd'
    },{
      id: 123,
      title: 'BS 10/2',
      __date: new Date(2022, 5, 2),
      date: '2.6.2022',
      getting: true,
      icon: 'Ma2',
      group: 'task',
      information: 'sadfgd'
    },];
    console.log(this.tasks);

    this.sortingTask();
    console.log(this.tasks);
  }

  public deleteTask(task: Tasks):void {   //TODO:
    console.log('deleting');
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] == task ) console.log('tst');this.tasks.splice(i, 1);
    }
  }

  public addTask(task:Tasks):void {
    this.tasks.push(task);
    this.sortingTask();
  }

  private sortingTask():void {
    this.tasks.sort(function(a,b){
      const firstDate = new Date(a.__date),
          SecondDate = new Date(b.__date);
    if (firstDate < SecondDate) return -1;
    if (firstDate > SecondDate) return 1;
    return 0;
    });
  }

  //schedules

  public getSchedules():void {
    this.schedules = [ {      //TODO:
      id: 234,
      title: 'Hochschule',
      __date: new Date(),
      date: this.gettingDate(),
      getting: false,
      icon: '',
      group: 'schedule',
      information: 'sadfgd'
    },{
      id: 123,
      title: 'Schülervertretung',
      __date: new Date(2022, 5, 2),
      date: '2.6.2022',
      getting: false,
      icon: 'SV',
      group: 'schedule',
      information: 'sadfgd'
    }];

    this.changeScheduleSorting = true;
    this.sortingSchedule();
  }

  public deleteSchedule (schedule: Tasks):void {
    for (let i = 0; i < this.schedules.length; i++) {
      if (this.schedules[i] == schedule )  this.schedules.splice(i, 1);
    }
  }

  public sortingSchedule():void {
    this.schedules.sort(function(a,b){
      const firstDate = new Date(a.__date),
          SecondDate = new Date(b.__date);
    if (firstDate < SecondDate) return -1;
    if (firstDate > SecondDate) return 1;
    return 0;
    });
  }

  public sortingSchedule2():void {
    this.schedules.sort((a, b) => a.icon.localeCompare(b.icon));
  }

  public addSchedule(schedule:Tasks):void {
    this.schedules.push(schedule);
    if (this.changeScheduleSorting) this.sortingSchedule();
    else this.sortingSchedule2();
  }

  //Examens

  public getExamens():void {
    this.examens = [ {      //TODO:
      id: 234,
      title: 'Klausur',
      __date: new Date(),
      date: this.gettingDate(),
      getting: false,
      icon: 'Deu1',
      group: 'examen',
      information: 'sadfgd'
    }];

    this.sortingExamen();
  }

  public deleteExamen (examen: Tasks):void {
    for (let i = 0; i < this.examens.length; i++) {
      if (this.examens[i] == examen ) this.examens.splice(i, 1);
    }
  }

  public addExamen(examens:Tasks):void {
    this.examens.push(examens);
    this.sortingExamen();
  }

  public sortingExamen():void {
    this.examens.sort(function(a,b){
      const firstDate = new Date(a.__date),
          SecondDate = new Date(b.__date);
    if (firstDate < SecondDate) return -1;
    if (firstDate > SecondDate) return 1;
    return 0;
    });
  }



  //all
  public all():void {
    this.allTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      this.allTasks.push(this.tasks[i]);
    }
    for (let i = 0; i < this.examens.length; i++) {
      this.allTasks.push(this.examens[i]);
    }
    for (let i = 0; i < this.schedules.length; i++) {
      this.allTasks.push(this.schedules[i]);
    }
    this.sortingAll();
  }

  public sortingAll():void {
    this.allTasks.sort(function(a,b){
      const firstDate = new Date(a.__date),
          SecondDate = new Date(b.__date);
    if (firstDate < SecondDate) return -1;
    if (firstDate > SecondDate) return 1;
    return 0;
    });
  }

  public deleteAll(task:Tasks):void {
    for (let i = 0; i < this.allTasks.length; i++) {
      if (this.allTasks[i] == task) this.allTasks.splice(i, 1);
    }
  }

  public addAll (task:Tasks):void {
    this.allTasks.push(task);
    this.sortingAll();

  }

  //General
  private gettingDate():string { //TODO:
    return this.test = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();
  }



  public onloadIconString():void { //TODO:
    this.icons = [
      'Deu1', 'Mat2', 'Eng3', 'Geo1', 'Inf'
    ];
  }
}


