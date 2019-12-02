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
            console.log(this.globals.loggeduserid);
        });
        this.userService.getUser(this.globals.loggeduserid).subscribe( user => {
            this.loggedUser = JSON.parse(JSON.stringify(user));
            this.name = this.loggedUser['name'];
            console.log(this.name);
        })
        console.log(this.name);
        this.editForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            nationality:['', Validators.required],
            birth:[''],
            sex:[''],
            left_handed:['']
        });
    }

    get f() {return this.editForm.controls;}

    onSubmit() {
        this.submitted = true;

        if (this.editForm.invalid) {
            return;
        }

        this.loading = true;

        if(this.f.birth.value) {
            this.userService.updateBirth(this.globals.loggeduserid, this.f.birth.value).subscribe(
                data => {
                },
                error => {
                    this.error = 'Date is not valid'
                    this.loading = false;
                });
        }

        if(this.f.left_handed.value) {
            if(this.f.left_handed.value === 'Yes') {
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

        if(this.f.sex.value) {
            if(this.f.sex.value === 'M') {
                this.userService.updateLeftHanded(this.globals.loggeduserid, 'M').subscribe(
                    data => {
                    },
                    error => {
                    });
            }
            else {
                this.userService.updateLeftHanded(this.globals.loggeduserid, 'W').subscribe(
                    data => {
                    },
                    error => {
                    });
            }
        }

        this.userService.updateName(this.globals.loggeduserid, this.f.name.value).subscribe(
            data => {
            },
            error => {
            });
        this.userService.updateSurname(this.globals.loggeduserid, this.f.surname.value).subscribe(
            data => {
            },
            error => {
            });
        this.userService.updateNationality(this.globals.loggeduserid, this.f.nationality.value).subscribe(
            data => {
                this.router.navigate(['/success/edit']);
            },
            error => {
            });

    }

}