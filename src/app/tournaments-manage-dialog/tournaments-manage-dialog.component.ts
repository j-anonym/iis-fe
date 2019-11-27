import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tournaments-manage-dialog',
  templateUrl: './tournaments-manage-dialog.component.html',
  styleUrls: ['./tournaments-manage-dialog.component.scss']
})
export class TournamentsManageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TournamentsManageDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
