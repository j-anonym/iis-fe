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

    const date = new Date(this.data.user.birth);
    console.log(date);

    this.createForm = new FormGroup({
      id_user: new FormControl(this.data.user.id_user),
      name: new FormControl(this.data.user.name, [ Validators.maxLength(128), Validators.required ]), //TODO default values datepicker
      surname: new FormControl(this.data.user.surname, [ Validators.maxLength(128), Validators.required ]),
      birth: new FormControl(date), // TODO forbid date to past
      nationality: new FormControl(this.data.user.nationality, [ Validators.maxLength(2), Validators.minLength(2), Validators.required ]),
      is_admin: new FormControl(this.data.user.is_admin, Validators.required),
      sex: new FormControl(this.data.user.sex),
      is_left_handed: new FormControl(this.data.user.is_left_handed),
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
