import { TitleConfigService } from './../../_services/title-config/title-config.service';
import { AccountService } from './../../_services/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'school-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private account:AccountService, public titleConfig:TitleConfigService) { }

  ngOnInit(): void {
    if (!this.account.control()) return;
  }

}
