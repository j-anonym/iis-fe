import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments-create',
  templateUrl: './tournaments-create.component.html',
  styleUrls: ['./tournaments-create.component.scss']
})
export class TournamentsCreateComponent implements OnInit {

  singles = true;
  gender = '---';

  constructor() { }

  ngOnInit() {
  }

}
