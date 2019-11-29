import { Component, OnInit , Output, EventEmitter, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./login/authentication.service";
import { Account} from "./login/account";
import { Globals } from './globals';
import * as jwt_decode from 'jwt-decode';

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
  tok = '';
  usrname = '';


  constructor(
      private globals: Globals,
      private router: Router,
      private authService:AuthenticationService
  ) {
    this.authService.current.subscribe(x => this.current = x);
    if (this.authService.currentVal) {this.router.navigate(['/success']); this.globals.logged = true;
      this.tok = this.authService.currentVal.token; const decoded = jwt_decode(this.tok); this.usrname = decoded['sub'];}
  }

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
