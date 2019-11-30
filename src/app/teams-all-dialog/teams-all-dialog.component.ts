import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TeamsAllService } from '../teams-all/teams-all.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-teams-all-dialog',
  templateUrl: './teams-all-dialog.component.html',
  styleUrls: ['./teams-all-dialog.component.scss']
})
export class TeamsAllDialogComponent implements OnInit {

  chooseDialog = 0;

  constructor(public dialogRef: MatDialogRef<TeamsAllDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private allService: TeamsAllService, private globals: Globals) { }

  ngOnInit() {
    if ((this.data.one.id_player_1 == this.globals.loggeduserid) || (this.data.one.id_player_2 == this.globals.loggeduserid))
      this.chooseDialog = 2;
    else if (this.data.one.id_player_2)
      this.chooseDialog = 1;
  }

  join() {
    this.allService.joinTeam(this.data.one.id_team, this.globals.loggeduserid).subscribe(() => {
      this.dialogRef.close();
    });
  }

  close() {
    this.dialogRef.close();
  }

}
