import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Globals} from "../globals";
import * as jwt_decode from 'jwt-decode';
import { AdminPageService } from '../admin-page/admin-page.service';
import {AuthenticationService} from "../login/authentication.service";
import {AccountService} from "../login/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
    editForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';
    tok = '';
    usrnm = '';
    name = '';
    loggedUser;

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private globals: Globals,
                private userService: AdminPageService,
                private accService: AccountService,
                private authService: AuthenticationService) {this.tok = this.authService.currentVal.token;}


    ngOnInit() {
        const decoded = jwt_decode(this.tok);
        this.usrnm = decoded.sub;
        this.globals.loggeduser = this.usrnm;

        this.accService.getLoggedUserId(this.usrnm).subscribe(result => {
            this.globals.loggeduserid = JSON.parse(JSON.stringify(result));

            this.userService.getUser(this.globals.loggeduserid).subscribe( user => {
                this.loggedUser = JSON.parse(JSON.stringify(user));

                this.editForm = new FormGroup({
                    id_user: new FormControl(this.loggedUser.id_user),
                    name: new FormControl(this.loggedUser.name, [Validators.required]),
                    surname: new FormControl(this.loggedUser.surname, [Validators.required]),
                    birth: new FormControl(this.loggedUser.birth ? new Date(this.loggedUser.birth) : null, []),
                    sex: new FormControl(this.loggedUser.sex, []),
                    nationality: new FormControl(this.loggedUser.nationality, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
                    is_admin: new FormControl(this.loggedUser.is_admin),
                    is_left_handed: new FormControl(this.loggedUser.is_left_handed, [])
                })
            })
        });
    }

    public hasError = (controlName: string, errorName: string) => {
        return this.editForm.controls[controlName].hasError(errorName);
    }

    submit(body) {
        this.userService.updateUserWait(body).subscribe(() => {
            this.router.navigate(['/success/edit']);
        })
    }
}

