import { Component, OnInit } from '@angular/core';
import { TeamsOneService } from './teams-one.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams-one',
  templateUrl: './teams-one.component.html',
  styleUrls: ['./teams-one.component.scss']
})
export class TeamsOneComponent implements OnInit {

  data;
  id_team;

  constructor(private oneService: TeamsOneService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id_team = this.route.snapshot.paramMap.get("id");

    this.oneService.getTeam(this.id_team).subscribe(response => {
      this.data = JSON.parse(JSON.stringify(response));
      console.log(this.data);
    })
  }

}
