import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import * as moment from "moment";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {

    public createForm: FormGroup;
    currentDate: Date;

    constructor()
    {}

    ngOnInit() {
        this.currentDate = moment().toDate();

        let date = moment("");

        this.createForm = new FormGroup({
            id_user: new FormControl(''),
            name: new FormControl('', [Validators.required, Validators.maxLength(128)]),
            surname: new FormControl('', [Validators.required, Validators.maxLength(128)]),
            birth: new FormControl(date, [Validators.required]),
            nationality: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
            is_admin: new FormControl('', [Validators.required]),
            sex: new FormControl('', [Validators.required]),
            is_left_handed: new FormControl('', [Validators.required]),
        });
    }

    public hasError = (controlName: string, errorName: string) => {
        return this.createForm.controls[controlName].hasError(errorName);
    }

    submit(data) {
    }

}
