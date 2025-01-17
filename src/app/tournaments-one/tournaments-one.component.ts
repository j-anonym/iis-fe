import { Component, OnInit, ViewChild } from '@angular/core';
import { TournamentsOneService } from './tournaments-one.service';
import { MatDialog } from '@angular/material';
import { TournamentsOneDialogComponent } from '../tournaments-one-dialog/tournaments-one-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';
import { TournamentsTreeComponent } from '../tournaments-tree/tournaments-tree.component';
import { AdminPageService } from '../admin-page/admin-page.service';

@Component({
  selector: 'app-tournaments-one',
  templateUrl: './tournaments-one.component.html',
  styleUrls: ['./tournaments-one.component.scss']
})
export class TournamentsOneComponent implements OnInit {

  data;
  id_tournament;
  staff_name;

  pendingReferees = [];
  pendingPlayers = [];
  pendingTeams = [];

  accepted = [];
  acceptedReferees= [];

  matches = [];

  @ViewChild(TournamentsTreeComponent, {static:false}) tree: TournamentsTreeComponent;

  constructor(private oneService: TournamentsOneService, public dialog: MatDialog, private route: ActivatedRoute, 
              public globals: Globals, private adminService: AdminPageService) { }

  ngOnInit() {
    this.id_tournament = this.route.snapshot.paramMap.get("id");

    // tournament informations
    this.oneService.getOneTournament(this.id_tournament).subscribe(response => {
      this.data = JSON.parse(JSON.stringify(response));

      this.adminService.getUser(this.data.id_staff).subscribe(owner => {
        this.staff_name = JSON.parse(JSON.stringify(owner));
      })

      // pending referees
      this.oneService.getPendingReferees(this.id_tournament).subscribe(response => {
        this.pendingReferees = JSON.parse(JSON.stringify(response));
      })

      this.oneService.getAcceptedReferees(this.id_tournament).subscribe(response => {
        this.acceptedReferees = JSON.parse(JSON.stringify(response));
      })

      

      // singles
      if (this.data._singles) {
        this.oneService.getAllPlayerMatches(this.id_tournament).subscribe(response => {
          this.matches = JSON.parse(JSON.stringify(response));
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
    if(!(this.data.occupation >= this.data.capacity)) {
      if('id_user' in who) {
        this.oneService.acceptPlayer(this.id_tournament, who.id_user).subscribe(() => {
          this.ngOnInit();
          this.tree.updateTree();
        });
      } else {
        this.oneService.acceptTeam(this.id_tournament, who.id_team).subscribe(() => {
          this.ngOnInit();
          this.tree.updateTree();
        });
      }
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
