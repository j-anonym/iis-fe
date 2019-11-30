import { Component, OnInit } from '@angular/core';
import { AdminPageService } from './admin-page.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminPageDialogComponent } from '../admin-page-dialog/admin-page-dialog.component';
import { AdminPageEditDialogComponent } from '../admin-page-edit-dialog/admin-page-edit-dialog.component';



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  users;

  constructor(private adminService: AdminPageService, public dialog: MatDialog) {}

  ngOnInit() {
    this.adminService.loadUsers().subscribe(data => {
      this.users = data;
    });
  }

  openDeleteDialog(user): void {
    const dialogRef = this.dialog.open(AdminPageDialogComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: true,
      data: {user} // TODO spravit si classu posielat tam iba objekt
    }
    );
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });

  }

  openEditDialog(user): void {
    const dialogRef = this.dialog.open(AdminPageEditDialogComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: true,
      data: {user} // TODO spravit si classu posielat tam iba objekt
    }
    );
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });

  }

}
