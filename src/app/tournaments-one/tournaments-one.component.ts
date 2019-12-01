import { Component, OnInit } from '@angular/core';
import { TournamentsOneService } from './tournaments-one.service';
import { MatDialog } from '@angular/material';
import { TournamentsOneDialogComponent } from '../tournaments-one-dialog/tournaments-one-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-tournaments-one',
  templateUrl: './tournaments-one.component.html',
  styleUrls: ['./tournaments-one.component.scss']
})
export class TournamentsOneComponent implements OnInit {

  data;
  id_tournament;

  pendingReferees = [];
  pendingPlayers = [];
  pendingTeams = [];

  accepted = [];
  acceptedReferees= [];

  matches = [];

  constructor(private oneService: TournamentsOneService, public dialog: MatDialog, private route: ActivatedRoute, 
              public globals: Globals) { }

  ngOnInit() {
    this.id_tournament = this.route.snapshot.paramMap.get("id");

    // tournament informations
    this.oneService.getOneTournament(this.id_tournament).subscribe(response => {
      this.data = JSON.parse(JSON.stringify(response));
      // console.log(this.data);

      // pending referees
      this.oneService.getPendingReferees(this.id_tournament).subscribe(response => {
        this.pendingReferees = JSON.parse(JSON.stringify(response));
        // console.log(this.pendingReferees);
      })

      this.oneService.getAcceptedReferees(this.id_tournament).subscribe(response => {
        this.acceptedReferees = JSON.parse(JSON.stringify(response));
        console.log(this.acceptedReferees)
      })

      // singles
      if (this.data._singles) {
        this.oneService.getAllPlayerMatches(this.id_tournament).subscribe(response => {
          this.matches = JSON.parse(JSON.stringify(response));
          console.log(this.matches);
        })
        
        this.oneService.getAcceptedPlayers(this.id_tournament).subscribe(response => {
          this.accepted = JSON.parse(JSON.stringify(response));
        })
        this.oneService.getPendingPlayers(this.id_tournament).subscribe(response => {
          this.pendingPlayers = JSON.parse(JSON.stringify(response));
        })
      // doubles
      } else {
        this.oneService.getAllTeamMatches(this.id_tournament).subscribe(response => {
          this.matches = JSON.parse(JSON.stringify(response));
          console.log(this.matches);
        })

        this.oneService.getAcceptedTeams(this.id_tournament).subscribe(response => {
          this.accepted = JSON.parse(JSON.stringify(response));
        })
        this.oneService.getPendingTeams(this.id_tournament).subscribe(response => {
          this.pendingTeams = JSON.parse(JSON.stringify(response));
        })
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(TournamentsOneDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '500px',
      data: {one: this.data}
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  accept(who) {
    console.log(who);
    if('id_user' in who) {
      this.oneService.acceptPlayer(this.id_tournament, who.id_user).subscribe(() => {this.ngOnInit();});
    } else {
      console.log("tu som")
      this.oneService.acceptTeam(this.id_tournament, who.id_team).subscribe(() => {this.ngOnInit();});
    }
  }

  decline(who) {
    if('id_user' in who) {
      this.oneService.declinePlayer(this.id_tournament, who.id_user).subscribe(() => {this.ngOnInit();});
    } else {
      this.oneService.declineTeam(this.id_tournament, who.id_team).subscribe(() => {this.ngOnInit();});
    }
  }

}
