import { Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import {Globals} from "../globals";
import * as jwt_decode from 'jwt-decode';
import { AdminPageService } from '../admin-page/admin-page.service';
import {AuthenticationService} from "../login/authentication.service";
import {AccountService} from "../login/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";

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
    currentDate: Date;

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private globals: Globals,
                private userService: AdminPageService,
                private accService: AccountService,
                private authService: AuthenticationService) {this.tok = this.authService.currentVal.token;}


    ngOnInit() {
        this.currentDate = moment().toDate();
        const decoded = jwt_decode(this.tok);
        this.usrnm = decoded.sub;
        this.globals.loggeduser = this.usrnm;
        this.accService.getLoggedUserId(this.usrnm).subscribe(result => {
            this.globals.loggeduserid = JSON.parse(JSON.stringify(result));
        });
        this.userService.getUser(this.globals.loggeduserid).subscribe( user => {
            this.loggedUser = JSON.parse(JSON.stringify(user));
            this.name = this.loggedUser['name'];
        });
        this.editForm = new FormGroup({
            name: new FormControl('', [ Validators.maxLength(128), Validators.required ]),
            surname: new FormControl('', [ Validators.maxLength(128), Validators.required ]),
            birth: new FormControl(this.currentDate),
            nationality: new FormControl('', [ Validators.maxLength(2), Validators.minLength(2), Validators.required ]),
            sex: new FormControl(''),
            is_left_handed: new FormControl(''),
        });
    }

    public hasError = (controlName: string, errorName: string) => {
        return this.editForm.controls[controlName].hasError(errorName);
    }

    onSubmit() {

        if(this.editForm.value.birth) {
            this.userService.updateBirth(this.globals.loggeduserid, this.editForm.value.birth).subscribe(
                data => {
                },
                error => {
                    this.error = 'Date is not valid'
                    this.loading = false;
                });
        }

        if(this.editForm.value.is_left_handed) {
            if(this.editForm.value.is_left_handed === 'Left') {
                this.userService.updateLeftHanded(this.globals.loggeduserid, true).subscribe(
                    data => {
                    },
                    error => {
                    });
            }
            else {
                this.userService.updateLeftHanded(this.globals.loggeduserid, false).subscribe(
                    data => {
                    },
                    error => {
                    });
            }
        }

        if(this.editForm.value.sex) {
            if(this.editForm.value.sex === 'M') {
                this.userService.updateSex(this.globals.loggeduserid, 'M').subscribe(
                    data => {
                    },
                    error => {
                    });
            }
            else {
                this.userService.updateSex(this.globals.loggeduserid, 'W').subscribe(
                    data => {
                    },
                    error => {
                    });
            }
        }

        this.userService.updateName(this.globals.loggeduserid, this.editForm.value.name).subscribe(
            data => {
            },
            error => {
            });
        this.userService.updateSurname(this.globals.loggeduserid, this.editForm.value.surname).subscribe(
            data => {
            },
            error => {
            });
        this.userService.updateNationality(this.globals.loggeduserid, this.editForm.value.nationality).subscribe(
            data => {
                this.router.navigate(['/success/edit']);
            },
            error => {
            });


    }

}
