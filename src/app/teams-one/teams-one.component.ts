import { Component, OnInit } from '@angular/core';
import { TeamsOneService } from './teams-one.service';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';
import { MatDialog } from '@angular/material';
import { TeamsOneDialogComponent } from '../teams-one-dialog/teams-one-dialog.component';

@Component({
  selector: 'app-teams-one',
  templateUrl: './teams-one.component.html',
  styleUrls: ['./teams-one.component.scss']
})
export class TeamsOneComponent implements OnInit {

  data;
  players;
  id_team;

  constructor(private oneService: TeamsOneService, private route: ActivatedRoute, public globals: Globals, public dialog: MatDialog) { }

  ngOnInit() {
    this.id_team = this.route.snapshot.paramMap.get("id");

    this.oneService.getTeam(this.id_team).subscribe(response => {
      this.data = JSON.parse(JSON.stringify(response));
    })

    this.oneService.getTeamPlayers(this.id_team).subscribe(response => {
      this.players = JSON.parse(JSON.stringify(response));
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(TeamsOneDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '500px',
      data: {one: this.data}
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
