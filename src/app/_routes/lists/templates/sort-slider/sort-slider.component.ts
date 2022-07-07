import { DatabankService } from 'src/app/_services/databank/databank.service';
import { Component } from '@angular/core';
import * as data from '../../../../../json/sortSlider.json';

@Component({
  selector: 'school-sort-slider',
  templateUrl: './sort-slider.component.html',
  styleUrls: ['./sort-slider.component.scss']
})
export class SortSliderComponent {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public _data: any;

  constructor(private databank: DatabankService) {
      this._data = data;
  }

  public changeSorting(): void | boolean{
    if (this.databank.changeScheduleSorting) {
       this.databank.changeScheduleSorting = false;
       this.databank.sortingSchedule2();
    }
    else {
      this.databank.changeScheduleSorting = true;
      this.databank.sortingSchedule();
    }
  }

}
