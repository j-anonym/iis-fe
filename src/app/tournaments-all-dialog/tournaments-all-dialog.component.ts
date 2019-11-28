import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tournaments-all-dialog',
  templateUrl: './tournaments-all-dialog.component.html',
  styleUrls: ['./tournaments-all-dialog.component.scss']
})
export class TournamentsAllDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TournamentsAllDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data.one);

  }

  close() {
    this.dialogRef.close();
  }

}
