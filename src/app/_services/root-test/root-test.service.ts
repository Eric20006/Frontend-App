/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import * as sidelist from '../../../json/sidelist.json';
import * as error from '../../../json/fullErrorCard.json';


@Injectable({
  providedIn: 'root'
})
export class RootTestService {
  //BECAUSE: it comes from the JSON file \/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private sideList: any;
  //BECAUSE: it comes from the JSON file \/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private error: any;

  constructor(private router:Router) {
    this.sideList = sidelist;
    this.error = error;
  }

  public controlWithHimself() {
    console.log('Is Testing');
    for (let i = 0; i < this.sideList.length; i++) {
      for (let _i = i + 1; _i < this.sideList.length; _i++) {
        if (this.sideList[i].name == this.sideList[_i].name) return this.errorCall();
        if (this.sideList[i].matIcon == this.sideList[_i].matIcon) return this.errorCall();
        if (this.sideList[i].id == this.sideList[_i].id) return this.errorCall();
        if (this.sideList[i].path == this.sideList[_i].path) return this.errorCall();
      }
    }
  }

  private errorCall(): void {
    console.error('Error');
    console.log('Überprüfe: Hat es nur etwas mit den JSON-Dateien zu tun oder hast du auch einen Fehler im Routing File gemacht.');
    this.router.navigate(['/test']);
  }
}
