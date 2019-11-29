import { Component, OnInit , Output, EventEmitter, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./login/authentication.service";
import { Account} from "./login/account";
import { Globals } from './globals';

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
  message = '';

  logged = false;

  constructor(
      private globals: Globals,
      private router: Router,
      private authService:AuthenticationService,
  ) {
    this.authService.current.subscribe(x => this.current = x);
  }

  //@HostListener('check')
  //check() {
    //this.logged = true;
  //}

  ngOnInit() {
    console.log('hello!');
    this.arr.push('jedna');
    this.arr.push('dva');
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/login']);
    this.globals.logged = false;
  }
}
