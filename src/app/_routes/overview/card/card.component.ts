import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { OverviewContent } from 'src/app/_interfaces/overview-content';

@Component({
  selector: 'school-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() content!:OverviewContent;

  constructor(private router: Router) { }

   public navigate():void {
    this.router.navigate(['/' + this.content.path]);
   }

}
