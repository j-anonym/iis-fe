import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TournamentsCreateService } from './tournaments-create.service';

import * as moment from 'moment';
import { TournamentsCreateDialogComponent } from '../tournaments-create-dialog/tournaments-create-dialog.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-tournaments-create',
  templateUrl: './tournaments-create.component.html',
  styleUrls: ['./tournaments-create.component.scss']
})
export class TournamentsCreateComponent implements OnInit {

  public createForm: FormGroup;
  currentDate;
  minDateTo;

  constructor(private createService : TournamentsCreateService, public dialog: MatDialog, private router: Router, private globals: Globals) { }

  ngOnInit() {
    this.currentDate = moment().toDate();

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
      sponsors: new FormControl('', [Validators.maxLength(512)]),
      id_staff: new FormControl(this.globals.loggeduserid)
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.createForm.controls[controlName].hasError(errorName);
  }

  changeDateToMin() {
    this.minDateTo = moment(this.createForm.value.date_from, "MM/DD/YYYY");
    this.minDateTo = moment(this.minDateTo).toDate();
  }

  submit(data) {
    this.createService.createTournament(data).subscribe(() => {
      this.openDialog();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TournamentsCreateDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '500px',
      data: {}
    });

    let id_created;

    dialogRef.afterClosed().subscribe(() => {
      this.createService.getLastCreatedTournament(this.globals.loggeduserid).subscribe(result => {
        id_created = result;
        this.router.navigate(['tournament', id_created]);
      });
      
    });
  }
}
