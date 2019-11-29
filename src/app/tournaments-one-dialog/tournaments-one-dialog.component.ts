import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TournamentsOneService } from '../tournaments-one/tournaments-one.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournaments-one-dialog',
  templateUrl: './tournaments-one-dialog.component.html',
  styleUrls: ['./tournaments-one-dialog.component.scss']
})
export class TournamentsOneDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TournamentsOneDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private oneService: TournamentsOneService, private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    // console.log(this.data.one.id_tournament);
    this.oneService.deleteTournament(this.data.one.id_tournament).subscribe(() => {

    });
    this.dialogRef.close();
    this.router.navigate(['tournaments/all']);
  }

}
