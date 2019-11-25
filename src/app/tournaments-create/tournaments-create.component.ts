import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { TournamentsCreateService } from './tournaments-create.service';

@Component({
  selector: 'app-tournaments-create',
  templateUrl: './tournaments-create.component.html',
  styleUrls: ['./tournaments-create.component.scss']
})
export class TournamentsCreateComponent implements OnInit {

  createForm;
  singles = true;
  gender = '---';

  constructor(private formBuilder : FormBuilder, private createService : TournamentsCreateService) { 
    this.createForm = this.formBuilder.group({
      name: null,
      date: null,
      place: null,
      is_singles: null,
      type: null,
      capacity: null,
      prize: null,
      cost: null,
      sponsors: null
    });
  }

  ngOnInit() {
  }

  submit(data) {
    this.createService.createTournament(data);
  }

}
