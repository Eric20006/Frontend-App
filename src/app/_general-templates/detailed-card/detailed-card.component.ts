import { DetailedContentService } from './../../_services/detailed-content/detailed-content.service';
import { Component } from '@angular/core';

@Component({
  selector: 'school-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss']
})
export class DetailedCardComponent {

  constructor(public detailedContent:DetailedContentService) { }

}
