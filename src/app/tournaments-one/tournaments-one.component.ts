import { Component, OnInit } from '@angular/core';
import { TournamentsOneService } from './tournaments-one.service';

@Component({
  selector: 'app-tournaments-one',
  templateUrl: './tournaments-one.component.html',
  styleUrls: ['./tournaments-one.component.scss']
})
export class TournamentsOneComponent implements OnInit {

  data;

  constructor(private oneService: TournamentsOneService) { }

  ngOnInit() {
    this.oneService.getOneTournament(31).subscribe(response => {
      this.data = JSON.parse(JSON.stringify(response));
      console.log(this.data);
    });

    
  }

}
