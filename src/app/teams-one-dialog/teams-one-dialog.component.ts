import { Component, OnInit, Inject } from '@angular/core';
import { TeamsAllService } from '../teams-all/teams-all.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-teams-one-dialog',
  templateUrl: './teams-one-dialog.component.html',
  styleUrls: ['./teams-one-dialog.component.scss']
})
export class TeamsOneDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TeamsOneDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private allService: TeamsAllService) { }

  ngOnInit() {
  }

}
