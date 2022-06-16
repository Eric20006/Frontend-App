import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RootTestService } from './_services/root-test/root-test.service';

@Component({
  selector: 'school-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private rootTest:RootTestService) {}

  ngOnInit(): void {
    this.rootTest.controlWithHimself();
  }
}
