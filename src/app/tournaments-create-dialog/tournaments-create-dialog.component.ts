import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tournaments-create-dialog',
  templateUrl: './tournaments-create-dialog.component.html',
  styleUrls: ['./tournaments-create-dialog.component.scss']
})
export class TournamentsCreateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TournamentsCreateDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
