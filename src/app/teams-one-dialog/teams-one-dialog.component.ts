import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TeamsOneService } from '../teams-one/teams-one.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-one-dialog',
  templateUrl: './teams-one-dialog.component.html',
  styleUrls: ['./teams-one-dialog.component.scss']
})
export class TeamsOneDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TeamsOneDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private oneService: TeamsOneService, private router: Router) { }

  ngOnInit() {
    console.log(this.data)
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    console.log(this.data.one.id_team)
    this.oneService.deleteTeam(this.data.one.id_team).subscribe(() => {
      this.dialogRef.close();
      this.router.navigate(['teams/all']);
    })
  }

}
