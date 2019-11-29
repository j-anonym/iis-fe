import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./login/authentication.service";
import { Account} from "./login/account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projekt';
  data = 'test';
  arr = [];
  decide = false;
  current: Account;

  logged = false;

  constructor(
      private router: Router,
      private authService:AuthenticationService
  ) {
    this.authService.current.subscribe(x => this.current = x);
  }

  ngOnInit() {
    console.log('hello!');
    this.arr.push('jedna');
    this.arr.push('dva');
  }

  login() {
    this.router.navigate(['/login']);
    this.logged = true;
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/login']);
    this.logged = false;
  }
}
