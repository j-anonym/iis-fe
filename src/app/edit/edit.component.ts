import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import * as moment from "moment";
import {Globals} from "../globals";
import { AdminPageService } from '../admin-page/admin-page.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {

    public createForm: FormGroup;
    currentDate: Date;
    loggedUser;


    constructor(
        private globals: Globals,
        private userService:AdminPageService)
    {}

    ngOnInit() {
        this.userService.getUser(this.globals.loggeduserid).subscribe( user => {
            this.loggedUser = JSON.parse(JSON.stringify(user));
            console.log(this.loggedUser);
        });

        this.currentDate = moment().toDate();
        const date = new Date(this.loggedUser.birth);

        this.createForm = new FormGroup({
            name: new FormControl(this.loggedUser.name, [ Validators.maxLength(128), Validators.required ]),
            surname: new FormControl(this.loggedUser.surname, [ Validators.maxLength(128), Validators.required ]),
            birth: new FormControl(date),
            nationality: new FormControl(this.loggedUser.nationality, [ Validators.maxLength(2), Validators.minLength(2), Validators.required ]),
            sex: new FormControl(this.loggedUser.sex),
            is_left_handed: new FormControl(this.loggedUser.is_left_handed),
        });

    }

    public hasError = (controlName: string, errorName: string) => {
        return this.createForm.controls[controlName].hasError(errorName);
    }

    submit(data) {
        this.userService.updateUser(data);
    }

}
