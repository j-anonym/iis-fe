import { Component, OnInit } from '@angular/core';
import { TournamentsAllService } from './tournaments-all.service';
import { MatTableDataSource } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-tournaments-all',
  templateUrl: './tournaments-all.component.html',
  styleUrls: ['./tournaments-all.component.scss']
})
export class TournamentsAllComponent implements OnInit {

  futureData = ['Pepper','Salt','Paprika','Pepper','Salt','Paprika','Pepper','Salt','Paprika'];
  currentData = ['Pepper','Salt','Paprika','Pepper','Salt','Paprika'];
  pastData = ['Pepper','Salt','Paprika','Pepper','Salt','Paprika','Pepper','Salt','Paprika','Pepper','Salt','Paprika','Pepper','Salt','Paprika'];

  next = [];
  nextDataSource;
  displayNext: string[] = ['name', 'date_from'];
  
  current = [];
  currentDataSource;
  displayCurrent: string[] = ['name', 'date_to'];
  
  past = [];
  pastDataSource;
  displayPast: string[] = ['name', 'date_to'];

  constructor(private allService: TournamentsAllService) { }

  ngOnInit() {
    this.allService.getAllTournaments().subscribe(response => {
      let data = JSON.parse(JSON.stringify(response));
      let date_from;
      let date_to;
      let date_now = moment().format("YYYY-MM-DD");

      for (let record of data) {
        date_from = moment(record.date_from).format("YYYY-MM-DD");
        date_to = moment(record.date_to).format("YYYY-MM-DD");

        if (date_now < date_from)
          this.next.push(record);
        else if((date_now >= date_from) && (date_now <= date_to))
          this.current.push(record);
        else if(date_now > date_to)
          this.past.push(record);

      }

      this.nextDataSource = new MatTableDataSource(this.next);
      this.currentDataSource = new MatTableDataSource(this.current);
      this.pastDataSource = new MatTableDataSource(this.past);
      // console.log(this.next);
      // console.log(this.current);
      // console.log(this.past);
      
    });
  }

}
