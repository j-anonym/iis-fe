import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TournamentsCreateService } from './tournaments-create.service';

@Component({
  selector: 'app-tournaments-create',
  templateUrl: './tournaments-create.component.html',
  styleUrls: ['./tournaments-create.component.scss']
})
export class TournamentsCreateComponent implements OnInit {

  public createForm: FormGroup;
  singles = true;
  gender = '---';

  constructor(private createService : TournamentsCreateService) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(128)]),
      date_from: new FormControl(null, [Validators.required]),
      date_to: new FormControl(null, [Validators.required]),
      place: new FormControl(null, [Validators.required]),
      is_singles: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      capacity: new FormControl(null, [Validators.required, Validators.max(64)]),
      prize: new FormControl(null, [Validators.required]),
      cost: new FormControl(null, [Validators.required]),
      sponsors: new FormControl('', [Validators.maxLength(512)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.createForm.controls[controlName].hasError(errorName);
  }

  submit(data) {
    this.createService.createTournament(data);
  }

}
