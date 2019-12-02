import { Component } from '@angular/core';
import { AuthenticationService} from '../login/authentication.service';
import * as jwt_decode from 'jwt-decode';
import {Globals} from '../globals';
import {AccountService} from '../login/account.service';

@Component({ templateUrl: 'success.component.html',
    styleUrls: ['./success.component.scss']})
export class SuccessComponent {
    tok = '';
    usrnm = '';
    constructor(private globals: Globals,
                private accServis: AccountService,
                private authService: AuthenticationService) {this.tok = this.authService.currentVal.token; }



    ngOnInit() {
        const decoded = jwt_decode(this.tok);
        this.usrnm = decoded.sub;
        this.globals.loggeduser = this.usrnm;
        this.accServis.getLoggedUserId(this.usrnm).subscribe(result => {
            this.globals.loggeduserid = JSON.parse(JSON.stringify(result));
        });
        this.accServis.getLoggedUserAdminStatus(this.usrnm).subscribe( res => {
            this.globals.isAdmin = JSON.parse(JSON.stringify(res));
        });
    }
}
