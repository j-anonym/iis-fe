import { Component, OnInit } from '@angular/core';
import { TournamentsOneService } from './tournaments-one.service';
import { MatDialog } from '@angular/material';
import { TournamentsOneDialogComponent } from '../tournaments-one-dialog/tournaments-one-dialog.component';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private oneService: TournamentsOneService, public dialog: MatDialog, private route: ActivatedRoute) { }

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

      // singles
      if (this.data._singles) {
        this.oneService.getAcceptedPlayers(this.id_tournament).subscribe(response => {
          this.accepted = JSON.parse(JSON.stringify(response));
        })
        this.oneService.getPendingPlayers(this.id_tournament).subscribe(response => {
          this.pendingPlayers = JSON.parse(JSON.stringify(response));
        })
      // doubles
      } else {
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
    if('id_player' in who) {
      this.oneService.acceptPlayer(who.id_tournament, who.id_player).subscribe(() => {this.ngOnInit();});
    } else {
      this.oneService.acceptTeam(who.id_tournament, who.id_player).subscribe(() => {this.ngOnInit();});
    }
  }

  decline(who) {
    if('id_player' in who) {
      this.oneService.declinePlayer(who.id_tournament, who.id_player).subscribe(() => {this.ngOnInit();});
    } else {
      this.oneService.declinePlayer(who.id_tournament, who.id_player).subscribe(() => {this.ngOnInit();});
    }
  }

}
