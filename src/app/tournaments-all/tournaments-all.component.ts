import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments-all',
  templateUrl: './tournaments-all.component.html',
  styleUrls: ['./tournaments-all.component.scss']
})
export class TournamentsAllComponent implements OnInit {

  futureData = ['Pepper','Salt','Paprika','Pepper','Salt','Paprika','Pepper','Salt','Paprika'];
  currentData = ['Pepper','Salt','Paprika','Pepper','Salt','Paprika'];
  pastData = ['Pepper','Salt','Paprika','Pepper','Salt','Paprika','Pepper','Salt','Paprika','Pepper','Salt','Paprika','Pepper','Salt','Paprika'];

  constructor() { }

  ngOnInit() {
  }

}
