import { Component , OnInit} from '@angular/core';
import { Account} from "../login/account";
import { AuthenticationService} from "../login/authentication.service";
import { AccountService} from "../login/account.service";
import {first} from "rxjs/operators";

@Component({ templateUrl: 'success.component.html' })
export class SuccessComponent {
    current_acc = '';
    constructor(
        private accountService: AccountService,
        private authService: AuthenticationService){this.current_acc = this.authService.currentVal.token}

    ngOnInit() {
        console.log(this.current_acc);
    }
}