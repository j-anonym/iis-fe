import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminPageDialogComponent } from '../admin-page-dialog/admin-page-dialog.component';
import * as moment from 'moment';
import { AdminPageService } from '../admin-page/admin-page.service';

@Component({
  selector: 'app-admin-page-edit-dialog',
  templateUrl: './admin-page-edit-dialog.component.html',
  styleUrls: ['./admin-page-edit-dialog.component.scss']
})
export class AdminPageEditDialogComponent implements OnInit {

  public createForm: FormGroup;
  currentDate: Date;

  constructor(public dialogRef: MatDialogRef<AdminPageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private adminService: AdminPageService) { }

  ngOnInit() {
    // this.data.user.birth_date = this.data.user.birth_date.replace(/_/g, '/');

    this.currentDate = moment().toDate();

    let date = moment(this.data.user.birth);
    console.log(date);

    this.createForm = new FormGroup({
      id_user: new FormControl(this.data.user.id_user),
      name: new FormControl(this.data.user.name, [Validators.required, Validators.maxLength(128)]), //TODO default values datepicker
      surname: new FormControl(this.data.user.surname, [Validators.required, Validators.maxLength(128)]),
      birth: new FormControl(date, [Validators.required]), // TODO forbid date to past
      nationality: new FormControl(this.data.user.nationality, [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
      is_admin: new FormControl(this.data.user._admin, [Validators.required]),
      sex: new FormControl(this.data.user.sex, [Validators.required]),
      is_left_handed: new FormControl(this.data.user._left_handed, [Validators.required]),
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.createForm.controls[controlName].hasError(errorName);
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  submit(data) {
    this.adminService.updateUser(data);
    this.dialogRef.close();
  }

}
