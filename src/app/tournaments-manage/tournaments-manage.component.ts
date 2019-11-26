import { Component, OnInit } from '@angular/core';
import { TournamentsManageService } from './tournaments-manage.service';

@Component({
  selector: 'app-tournaments-manage',
  templateUrl: './tournaments-manage.component.html',
  styleUrls: ['./tournaments-manage.component.scss']
})
export class TournamentsManageComponent implements OnInit {

  tournaments;

  constructor(private manageService: TournamentsManageService) { }

  ngOnInit() {
    this.tournaments = this.manageService.getAllTournamentsByUser(1).subscribe(response => {
      console.log(response);
    });
  }

}
