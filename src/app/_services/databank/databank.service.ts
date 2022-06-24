import { Injectable } from '@angular/core';
import { Tasks } from 'src/app/_interfaces/tasks';

@Injectable({
  providedIn: 'root'
})
export class DatabankService {

  public tasks!:Tasks[];
  public icons!: string[];
  test!:string;             //TODO:

  public getTasks():void {
    this.tasks = [ {      //TODO:
      id: 234,
      title: 'Hallo',
      __date: new Date(),
      date: this.gettingDate(),
      getting: false,
      icon: 'as'
    },{
      id: 123,
      title: 'Test',
      __date: new Date(2022, 5, 2),
      date: '2.6.2022',
      getting: true,
      icon: 'd'
    },{
      id: 234,
      title: 'Hallo',
      __date: new Date(),
      date: this.gettingDate(),
      getting: false,
      icon: 'as'
    },{
      id: 234,
      title: 'Hallo',
      __date: new Date(2022,6,26),
      date: '26.7.2022',
      getting: false,
      icon: 'as'
    } ,{
      id: 234,
      title: 'Hallo',
      __date: new Date(2022,6,21),
      date: '21.7.2022',
      getting: false,
      icon: 'as'
    },];
    console.log(this.tasks);

    this.sortingTask();
    console.log(this.tasks);
  }

  public deleteTask(task: Tasks):void {   //TODO:
    console.log('deleting');
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] == task ) this.tasks.splice(i, 1);
    }
  }

  public addTask(task:Tasks):void {
    this.tasks.push(task);
    this.sortingTask();
  }

  private gettingDate():string { //TODO:
    return this.test = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();
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

  public onloadIconString():void { //TODO:
    this.icons = [
      'Deu1', 'Mat2', 'Eng3', 'Geo1', 'Inf'
    ];
  }
}


