import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TournamentsTreeMatchComponent } from '../tournaments-tree-match/tournaments-tree-match.component';
import { TournamentsOneComponent } from '../tournaments-one/tournaments-one.component';
import { updateLocale } from 'moment';
import { TournamentsOneService } from '../tournaments-one/tournaments-one.service';
import { single } from 'rxjs/operators';
import { Globals } from '../globals';

@Component({
  selector: 'tournaments-tree',
  templateUrl: './tournaments-tree.component.html',
  styleUrls: ['./tournaments-tree.component.scss']
})
export class TournamentsTreeComponent implements OnInit {

  @Input() public capacity: number;
  @Input() public matches: any;
  @Input() public accepted: any;
  @Input() public acceptedReferees = [];
  @Input() public singles: any;
  @Input() public id_staff: any;

  divided;

  constructor(public dialog: MatDialog, private oneService: TournamentsOneService, private globals: Globals) { }

  ngOnInit() {
    this.divided = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[]};
    this.divideMatches()
  }

  openDialog(match) {
    const dialogRef = this.dialog.open(TournamentsTreeMatchComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '500px',
      data: {
        one: match,
        accepted: this.accepted,
        singles: this.singles
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updateTree();
    });
  }

  updateTree() {
    if (this.singles) {
      this.oneService.getAllPlayerMatches(this.matches[0].id_tournament).subscribe(result => {
        this.matches = JSON.parse(JSON.stringify(result));
        this.ngOnInit();
      });
    } else {
      this.oneService.getAllTeamMatches(this.matches[0].id_tournament).subscribe(result => {
        this.matches = JSON.parse(JSON.stringify(result));
        this.ngOnInit();
      })
    }
  }

  idToName(id) {
    if (this.accepted.length == 0)
      return "";
    if ('id_user' in this.accepted[0]) {
      for (let one of this.accepted) {
        if(one.id_user == id)
          return one.name+" "+one.surname;
      }
    } else if ('id_team' in this.accepted[0]) {
      for (let one of this.accepted) {
        if(one.id_team == id)
          return one.name;
      }
    }
    return "";
  }

  insertResult(match) {
    if ((this.globals.loggeduserid == this.id_staff) || (this.acceptedReferees.find((element) => {return element == this.globals.loggeduserid})))
      this.openDialog(match);
  }

  divideMatches() {
    // capacity 2
    if (this.capacity == 2) {
      this.divided[1] = this.matches;
    // capacity 4
    } else if (this.capacity == 4) {
      for (let index=0; index<=1; index++)
        this.divided[1].push(this.matches[index]);

      this.divided[2].push(this.matches[2]);
    // capacity 8
    } else if (this.capacity == 8) {
      for (let index=0; index<=3; index++)
        this.divided[1].push(this.matches[index]);

      for (let index=4; index<=5; index++)
        this.divided[2].push(this.matches[index]);

      this.divided[3].push(this.matches[6]);
    // capacity 16
    }  else if (this.capacity == 16) {
      for (let index=0; index<=7; index++)
        this.divided[1].push(this.matches[index]);

      for (let index=8; index<=11; index++)
        this.divided[2].push(this.matches[index]);

      for (let index=12; index<=13; index++)
        this.divided[3].push(this.matches[index]);

      this.divided[4].push(this.matches[14]);
    // capacity 32
    }  else if (this.capacity == 32) {
      for (let index=0; index<=15; index++)
        this.divided[1].push(this.matches[index]);

      for (let index=16; index<=23; index++)
        this.divided[2].push(this.matches[index]);

      for (let index=24; index<=27; index++)
        this.divided[3].push(this.matches[index]);

      for (let index=28; index<=29; index++)
        this.divided[4].push(this.matches[index]);

      this.divided[5].push(this.matches[30]);
    // capacity 64
    }  else if (this.capacity == 64) {
      for (let index=0; index<=31; index++)
        this.divided[1].push(this.matches[index]);

      for (let index=32; index<=47; index++)
        this.divided[2].push(this.matches[index]);

      for (let index=48; index<=55; index++)
        this.divided[3].push(this.matches[index]);

      for (let index=56; index<=59; index++)
        this.divided[4].push(this.matches[index]);

      for (let index=60; index<=61; index++)
        this.divided[5].push(this.matches[index]);

      this.divided[6].push(this.matches[62]);
    } 
  }

}
