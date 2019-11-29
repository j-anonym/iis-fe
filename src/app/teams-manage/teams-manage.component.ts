import { Component, OnInit } from '@angular/core';
import { TeamsAllService } from '../teams-all/teams-all.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-manage',
  templateUrl: './teams-manage.component.html',
  styleUrls: ['./teams-manage.component.scss']
})
export class TeamsManageComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['name', 'logo'];

  constructor(private allService: TeamsAllService, private router: Router) { }

  ngOnInit() {
    this.allService.getAllJoined(1).subscribe(result => {
      this.dataSource = JSON.parse(JSON.stringify(result));
      this.dataSource = new MatTableDataSource(this.dataSource);
    })
  }

  getTeam(row) {
    console.log(row);
    this.router.navigate(['/team/'+row.id_team]);
  }

}
