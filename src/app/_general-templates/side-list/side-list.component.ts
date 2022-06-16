import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import * as title from '../../../json/sidelistTitle.json';
import * as data from '../../../json/sidelist.json';


@Component({
  selector: 'school-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {

  public triggerMobileView: boolean;
  //BECAUSE: it comes from the JSON file \/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private data!: any[];
  //BECAUSE: it comes from the JSON file \/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public dataTitle: any;
  //BECAUSE: it comes from the JSOn File variable and this variable is also important because that is an NGFor-Helper (without it --> Error Message) \/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public dataForNGHelper: any[];

  constructor(private router:Router) {
    this.triggerMobileView = false;
    this.data = data;
    this.dataForNGHelper = [];
    this.dataTitle = title;
  }

  public changePath(path:string):void {
    console.log(path);
    this.router.navigate([path]);
  }

  public changeTriggerMobileView(): void {
    if (this.triggerMobileView) this.triggerMobileView = false;
    else this.triggerMobileView = true;
  }

  private ngForHelping():void {
    for (let i = 0; i < this.data.length; i++) {
      this.dataForNGHelper.push(data[i]);
    }
  }

  ngOnInit(): void {
    this.ngForHelping();
  }

}
