import { Component, OnInit } from '@angular/core';
import { TournamentsManageService } from './tournaments-manage.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TournamentsManageDialogComponent } from '../tournaments-manage-dialog/tournaments-manage-dialog.component';

@Component({
  selector: 'app-tournaments-manage',
  templateUrl: './tournaments-manage.component.html',
  styleUrls: ['./tournaments-manage.component.scss']
})
export class TournamentsManageComponent implements OnInit {

  tournaments = [];
  dataSource;
  displayedColumns: string[] = ['name', 'date_from', 'date_to', 'occupation', 'place'];

  constructor(private manageService: TournamentsManageService, public dialog: MatDialog) { }

  ngOnInit() {
    this.manageService.getAllTournamentsByUser(1).subscribe(response => {
      this.tournaments = JSON.parse(JSON.stringify(response));
      this.dataSource = new MatTableDataSource(this.tournaments);
      // console.log(this.tournaments);
    });
  }

  getTournament(row) {
    console.log(row);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TournamentsManageDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(() => {
      // let id_created = this.createService.getLastCreatedTournament(1);
      // this.router.navigate(['/tournament/'+id_created]);
    });
  }

}
