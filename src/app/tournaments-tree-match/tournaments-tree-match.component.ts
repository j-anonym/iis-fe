import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tournaments-tree-match',
  templateUrl: './tournaments-tree-match.component.html',
  styleUrls: ['./tournaments-tree-match.component.scss']
})
export class TournamentsTreeMatchComponent implements OnInit {

  chooseDialog = 2;

  constructor(public dialogRef: MatDialogRef<TournamentsTreeMatchComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    if ((this.data.one.sets_home == null) || (this.data.one.sets_away == null))
      this.chooseDialog = 1;
  }

  close() {
    this.dialogRef.close();
  }

}
