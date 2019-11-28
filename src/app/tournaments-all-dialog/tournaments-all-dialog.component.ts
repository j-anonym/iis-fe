import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TournamentsAllService } from '../tournaments-all/tournaments-all.service';

@Component({
  selector: 'app-tournaments-all-dialog',
  templateUrl: './tournaments-all-dialog.component.html',
  styleUrls: ['./tournaments-all-dialog.component.scss']
})
export class TournamentsAllDialogComponent implements OnInit {

  // 0 = JOIN, 1 = PENDING, 2 = ACCEPTED
  chooseDialog = 0;

  constructor(public dialogRef: MatDialogRef<TournamentsAllDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
              private allService: TournamentsAllService) { }

  ngOnInit() {
    console.log(this.data.one);
    if (this.data.one._singles) {
      this.allService.getAllPlayersTournament(this.data.one.id_tournament).subscribe(result => {
        console.log(result);
        for (let record of JSON.parse(JSON.stringify(result))) {
          // STATICKA HODNOTA ID_PLAYER TODO
          // Player found and is confirmed
          if ((record.id_player == 1) && (record._confirmed == true)) {
            this.chooseDialog = 2;
            break;
          // Player found but waiting for response from staff
          } else if ((record.id_player == 1) && (record._confirmed == false)) {
            this.chooseDialog = 1;
            break;
          }
        }
      });
    } else {
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

  close() {
    this.dialogRef.close();
  }

  joinPlayer() {
    this.allService.joinPlayer(this.data.one.id_tournament, 1).subscribe(() => {});
    this.dialogRef.close();
  }

  joinTeam() {
    this.allService.joinTeam(this.data.one.id_tournament, 1).subscribe(() => {});
    this.dialogRef.close();
  }

  joinReferee() {
    this.allService.joinReferee(this.data.one.id_tournament, 1).subscribe(() => {});
    this.dialogRef.close();
  }

}
