import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminPageService } from '../admin-page/admin-page.service';


@Component({
  selector: 'app-admin-page-dialog',
  templateUrl: './admin-page-dialog.component.html',
  styleUrls: ['./admin-page-dialog.component.scss']
})
export class AdminPageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminPageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private adminService: AdminPageService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.adminService.deleteUser(this.data.user.id_user);
    this.dialogRef.close();
  }

}

