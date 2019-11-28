import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminPageDialogComponent } from '../admin-page-dialog/admin-page-dialog.component';

@Component({
  selector: 'app-admin-page-edit-dialog',
  templateUrl: './admin-page-edit-dialog.component.html',
  styleUrls: ['./admin-page-edit-dialog.component.scss']
})
export class AdminPageEditDialogComponent implements OnInit {

  public createForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AdminPageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    // this.data.user.birth_date = this.data.user.birth_date.replace(/_/g, '/');

    this.createForm = new FormGroup({
      name: new FormControl(this.data.user.name, [Validators.required, Validators.maxLength(128)]), //TODO default values in all selections and datepicker
      surname: new FormControl(this.data.user.surname, [Validators.required, Validators.maxLength(128)]),
      birth_date: new FormControl(this.data.user.birth_date, [Validators.required]), // TODO forbid date to past
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

}
