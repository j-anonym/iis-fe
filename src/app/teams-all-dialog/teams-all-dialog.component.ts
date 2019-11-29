import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TeamsAllService } from '../teams-all/teams-all.service';

@Component({
  selector: 'app-teams-all-dialog',
  templateUrl: './teams-all-dialog.component.html',
  styleUrls: ['./teams-all-dialog.component.scss']
})
export class TeamsAllDialogComponent implements OnInit {

  chooseDialog = 0;

  constructor(public dialogRef: MatDialogRef<TeamsAllDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private allService: TeamsAllService) { }

  ngOnInit() {
    if (this.data.one.id_player_2)
      this.chooseDialog = 1;
    else if (this.data.one.id_player_1 == 1)
      this.chooseDialog = 2;
  }

  join() {
    this.allService.joinTeam(this.data.one.id_team, 1).subscribe(() => {
      this.dialogRef.close();
    });
  }

  close() {
    this.dialogRef.close();
  }

}
