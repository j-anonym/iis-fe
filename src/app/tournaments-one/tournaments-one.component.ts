import { Component, OnInit } from '@angular/core';
import { TournamentsOneService } from './tournaments-one.service';
import { MatDialog } from '@angular/material';
import { TournamentsOneDialogComponent } from '../tournaments-one-dialog/tournaments-one-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournaments-one',
  templateUrl: './tournaments-one.component.html',
  styleUrls: ['./tournaments-one.component.scss']
})
export class TournamentsOneComponent implements OnInit {

  data;

  constructor(private oneService: TournamentsOneService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {


    this.oneService.getOneTournament(this.route.snapshot.paramMap.get("id")).subscribe(response => {
      this.data = JSON.parse(JSON.stringify(response));
      console.log(this.data);
    }); 
  }

  openDialog() {
    console.log(this.data);
    const dialogRef = this.dialog.open(TournamentsOneDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '500px',
      data: {one: this.data}
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
