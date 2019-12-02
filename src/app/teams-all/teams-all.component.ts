import { Component, OnInit } from '@angular/core';
import { TeamsAllService } from './teams-all.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TeamsAllDialogComponent } from '../teams-all-dialog/teams-all-dialog.component';
import { Globals } from '../globals';

@Component({
  selector: 'app-teams-all',
  templateUrl: './teams-all.component.html',
  styleUrls: ['./teams-all.component.scss']
})
export class TeamsAllComponent implements OnInit {

  displayColumns: string[] = ['name', 'id_player_1', 'id_player_2', 'action'];
  dataSource;

  constructor(private allService: TeamsAllService, private router: Router, public dialog: MatDialog, public globals: Globals) { }

  ngOnInit() {
    this.allService.getAllTeams().subscribe(response => {
      this.dataSource = JSON.parse(JSON.stringify(response));
      this.dataSource = new MatTableDataSource(this.dataSource);
    })
  }

  openDialog(one) {
    const dialogRef = this.dialog.open(TeamsAllDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '500px',
      data: {one: one}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  getTeam(row) {
    this.router.navigate(['/team', row.id_team]);
  }

}
