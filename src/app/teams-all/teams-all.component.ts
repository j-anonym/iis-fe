import { Component, OnInit } from '@angular/core';
import { TeamsAllService } from './teams-all.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-teams-all',
  templateUrl: './teams-all.component.html',
  styleUrls: ['./teams-all.component.scss']
})
export class TeamsAllComponent implements OnInit {

  displayColumns: string[] = ['name', 'id_player_1', 'id_player_2'];
  dataSource;

  constructor(private allService: TeamsAllService) { }

  ngOnInit() {
    this.allService.getAllTeams().subscribe(response => {
      this.dataSource = JSON.parse(JSON.stringify(response));
      this.dataSource = new MatTableDataSource(this.dataSource);
    })
  }

  getTeam(row) {
    console.log(row);
  }

}
