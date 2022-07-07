import { Account } from './../../_interfaces/account';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public logIn: Account;
  constructor(private router:Router) {
    this.logIn = {
      id: undefined,
      name: ''
    };
  }

  public control(): boolean {
    if (this.logIn.id == undefined) {
      this.router.navigate(['login']);
      return false;
    } else return true;
  }

  public login(): void {
    this.logIn = {
      id: 123,
      name: 'Eric Erfurt'
    };
  }
}
