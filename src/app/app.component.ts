import { Component, OnInit , Output, EventEmitter, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./login/authentication.service";
import { Account} from "./login/account";
import { Globals } from './globals';
import * as jwt_decode from 'jwt-decode';
import { AccountService } from './login/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projekt';
  data = 'test';
  decide = false;
  current: Account;
  message = '';
  tok = '';
  usrname = '';


  constructor(
      public globals: Globals,
      private router: Router,
      private authService: AuthenticationService,
      private accServis: AccountService
  ) {
    this.authService.current.subscribe(x => this.current = x);
    if (this.authService.currentVal) {
      this.globals.logged = true;
      this.tok = this.authService.currentVal.token;
      const decoded = jwt_decode(this.tok);
      this.globals.loggeduser =  decoded.sub;
      this.accServis.getLoggedUserId(this.globals.loggeduser).subscribe(result => {
        this.globals.loggeduserid = JSON.parse(JSON.stringify(result));
    });
      this.accServis.getLoggedUserAdminStatus(this.globals.loggeduser).subscribe( res => {
        this.globals.isAdmin = JSON.parse(JSON.stringify(res));
    });
    }
  }

  ngOnInit() {
    console.log('hello!');
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
