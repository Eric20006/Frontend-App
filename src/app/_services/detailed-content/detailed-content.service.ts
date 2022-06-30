import { Injectable } from '@angular/core';
import { Tasks } from 'src/app/_interfaces/tasks';

@Injectable({
  providedIn: 'root'
})
export class DetailedContentService {

  public control:boolean;
  public task!: Tasks;

  constructor() {
    this.control = false;
  }

  public getDetailedContent(value:Tasks):void {
    this.control = true;
    this.task = value;
  }
}
