import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeamsCreateService } from './teams-create.service';
import { TournamentsCreateDialogComponent } from '../tournaments-create-dialog/tournaments-create-dialog.component';
import { Globals } from '../globals';

@Component({
  selector: 'app-teams-create',
  templateUrl: './teams-create.component.html',
  styleUrls: ['./teams-create.component.scss']
})
export class TeamsCreateComponent implements OnInit {

  public createForm: FormGroup;

  constructor(public dialog: MatDialog, private router: Router, private createService: TeamsCreateService, private globals: Globals) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      id_player_1: new FormControl(this.globals.loggeduserid),
      name: new FormControl(null, [Validators.required, Validators.maxLength(128)]),
      logo: new FormControl(null, [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.createForm.controls[controlName].hasError(errorName);
  }

  submit(data) {
    this.createService.createTeam(data).subscribe();
    this.openDialog();
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
      this.createService.getLastCreated(this.globals.loggeduserid).subscribe(result => {
        id_created = result;
        this.router.navigate(['/team', id_created]);
      });
    });
  }

}
