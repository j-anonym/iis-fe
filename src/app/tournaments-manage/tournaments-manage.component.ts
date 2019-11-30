import { Component, OnInit } from '@angular/core';
import { TournamentsManageService } from './tournaments-manage.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TournamentsManageDialogComponent } from '../tournaments-manage-dialog/tournaments-manage-dialog.component';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-tournaments-manage',
  templateUrl: './tournaments-manage.component.html',
  styleUrls: ['./tournaments-manage.component.scss']
})
export class TournamentsManageComponent implements OnInit {

  current = [];
  currentDataSource;

  past = [];
  pastDataSource;

  displayedColumns: string[] = ['name', 'date_from', 'date_to', 'occupation', 'place'];

  constructor(private manageService: TournamentsManageService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.manageService.getAllTournamentsByUser(1).subscribe(response => {
      let data = JSON.parse(JSON.stringify(response));
      console.log(data)
      let date_to;
      let date_now = moment().format("YYYY-MM-DD");

      for (let record of data) {
        date_to = moment(record.date_to).format("YYYY-MM-DD");

        if (date_to < date_now)
          this.past.push(record);
        else
          this.current.push(record);

      }

      this.currentDataSource = new MatTableDataSource(this.current);
      this.pastDataSource = new MatTableDataSource(this.past);
    });
  }

  getTournament(row) {
    console.log(row);
    this.router.navigate(['/tournament/'+row.id_tournament]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TournamentsManageDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
