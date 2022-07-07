import { AccountService } from './_services/account/account.service';
import { DatabankService } from 'src/app/_services/databank/databank.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RootTestService } from './_services/root-test/root-test.service';


@Component({
  selector: 'school-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private rootTest:RootTestService, private databank: DatabankService, public account:AccountService) {}

  ngOnInit(): void{
    this.rootTest.controlWithHimself();
    this.databank.onloadIconString();
  }
}
