import { Component } from '@angular/core';
import { AuthenticationService} from "../login/authentication.service";
import * as jwt_decode from 'jwt-decode';

@Component({ templateUrl: 'success.component.html' })
export class SuccessComponent {
    tok = '';
    welcome = '';
    constructor(private authService: AuthenticationService) {this.tok = this.authService.currentVal.token;}


    ngOnInit() {
        const decoded = jwt_decode(this.tok);
        this.welcome = decoded['sub'];
    }
}