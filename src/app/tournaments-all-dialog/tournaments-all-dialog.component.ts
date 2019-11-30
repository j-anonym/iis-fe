import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TournamentsAllService } from '../tournaments-all/tournaments-all.service';
import { Globals } from '../globals';
import { TeamsAllService } from '../teams-all/teams-all.service';
import { AdminPageService } from '../admin-page/admin-page.service';

@Component({
  selector: 'app-tournaments-all-dialog',
  templateUrl: './tournaments-all-dialog.component.html',
  styleUrls: ['./tournaments-all-dialog.component.scss']
})
export class TournamentsAllDialogComponent implements OnInit {

  // 0 = JOIN, 1 = PENDING, 2 = ACCEPTED, 3 = CHOOSE TEAM, 4 = GENDER NOT MATCH
  chooseDialog = 0;
  ownTeams = [];
  chosenTeam;

  constructor(public dialogRef: MatDialogRef<TournamentsAllDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
              private allService: TournamentsAllService, private teamService: TeamsAllService, private userService: AdminPageService,
              public globals: Globals) { }

  ngOnInit() {
    this.userService.getUser(this.globals.loggeduserid).subscribe(user => {
      if ((user['sex'] != this.data.one.type) || (user['sex'] == null)) {
        this.chooseDialog = 4;
      } else {
        this.allService.getAllPlayersTournament(this.data.one.id_tournament).subscribe(result => {
          if (this.data.one.id_staff == this.globals.loggeduserid) {
            this.chooseDialog = 2;
          }
          for (let record of JSON.parse(JSON.stringify(result))) {
            // Player found and is confirmed
            if ((record.id_player == this.globals.loggeduserid) && (record._confirmed == true)) {
              this.chooseDialog = 2;
              break;
            // Player found but waiting for response from staff
            } else if ((record.id_player == this.globals.loggeduserid) && (record._confirmed == false)) {
              this.chooseDialog = 1;
              break;
            }
          }
        });
          
        if (!this.data.one._singles) {
          this.allService.getAllTeamsTournament(this.data.one.id_tournament).subscribe(result => {
            console.log(result);
            for (let record of JSON.parse(JSON.stringify(result))) {
              // STATICKA HODNOTA ID_PLAYER TODO
              // Team found and is confirmed
              if ((record.id_team == 1) && (record._confirmed == true)) {
                this.chooseDialog = 2;
                break;
              // Team found but waiting for response from staff
              } else if ((record.id_team == 1) && (record._confirmed == false)) {
                this.chooseDialog = 1;
                break;
              }
            }
          });
        }
      }
    })
    
  }

  close() {
    this.dialogRef.close();
  }

  joinPlayer() {
    this.allService.joinPlayer(this.data.one.id_tournament, this.globals.loggeduserid).subscribe(() => {});
    this.dialogRef.close();
  }

  joinTeam() {
    this.teamService.getAllJoined(this.globals.loggeduserid).subscribe(response => {
      this.ownTeams = JSON.parse(JSON.stringify(response));
      this.chooseDialog = 3;
    });
  }

  joinTeamChosen() {
    if (this.chosenTeam != null) {
      console.log(this.data.one.id_tournament)
      this.allService.joinTeam(this.data.one.id_tournament, this.chosenTeam).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  joinReferee() {
    this.allService.joinReferee(this.data.one.id_tournament, this.globals.loggeduserid).subscribe(() => {});
    this.dialogRef.close();
  }

}
