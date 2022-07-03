import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletingReturnService {
  public control: boolean;
  public counterConfig: number;

  constructor() {
    this.control = false;
    this.counterConfig = 3;
  }
}
