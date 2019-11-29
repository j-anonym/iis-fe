import { Component } from '@angular/core';
import { Account} from "../login/account";
import { AuthenticationService} from "../login/authentication.service";
import {first} from "rxjs/operators";

@Component({ templateUrl: 'success.component.html' })
export class SuccessComponent {
    loading = false;
    private curr_account = '';

    constructor(private authService: AuthenticationService){ this.curr_account = authService.currentVal.username}

    ngOnInit() {
        this.loading = true;
         //this.curr_account = this.authService.currentVal.username;
        //this.curr_account = localStorage.getItem('username');
      //      this.loading = false;
        //    this.
        //})
    }
}