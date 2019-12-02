import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Globals } from '../globals';
import { TournamentsOneService } from '../tournaments-one/tournaments-one.service';

@Component({
  selector: 'app-tournaments-tree-match',
  templateUrl: './tournaments-tree-match.component.html',
  styleUrls: ['./tournaments-tree-match.component.scss']
})
export class TournamentsTreeMatchComponent implements OnInit {

  public matchForm: FormGroup;
  chooseDialog = 2;

  constructor(public dialogRef: MatDialogRef<TournamentsTreeMatchComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public globals: Globals, private oneService: TournamentsOneService) { }

  ngOnInit() {
    if ((this.data.one.sets_home == null) || (this.data.one.sets_away == null)) {
      this.chooseDialog = 1;

      this.matchForm = new FormGroup({
        id_match: new FormControl(this.data.one.id_player_match ? this.data.one.id_player_match : this.data.one.id_team_match),
        sets_home: new FormControl(null, [Validators.required, Validators.max(5), Validators.min(0)]),
        sets_away: new FormControl(null, [Validators.required, Validators.max(5), Validators.min(0)]),
        games_home: new FormControl(null, [Validators.required, Validators.min(0)]),
        games_away: new FormControl(null, [Validators.required, Validators.min(0)]),
        id_home: new FormControl({value: this.data.one.id_user_home ? this.data.one.id_user_home : this.data.one.id_team_home, disabled: true}, [Validators.required]),
        id_away: new FormControl({value: this.data.one.id_user_away ? this.data.one.id_user_away : this.data.one.id_team_away, disabled: true}, [Validators.required]),
        id_referee: new FormControl(this.globals.loggeduserid),
        id_tournament: new FormControl(this.data.one.id_tournament)
      })
    }
  }

  close() {
    this.dialogRef.close();
  }

  submit(formResult) {
    if (this.data.singles) {
      let playerMatch = {
        id_player_match: formResult.id_match,
        sets_home: formResult.sets_home,
        sets_away: formResult.sets_away,
        games_home: formResult.games_home,
        games_away: formResult.games_away,
        id_user_home: formResult.id_home,
        id_user_away: formResult.id_away,
        id_referee: formResult.id_referee,
        id_tournament: formResult.id_tournament
      }
      this.oneService.updatePlayerMatch(playerMatch).subscribe(() => {
        this.dialogRef.close();
      });
    }
    else {
      let teamMatch = {
        id_team_match: formResult.id_match,
        sets_home: formResult.sets_home,
        sets_away: formResult.sets_away,
        games_home: formResult.games_home,
        games_away: formResult.games_away,
        id_team_home: formResult.id_home,
        id_team_away: formResult.id_away,
        id_referee: formResult.id_referee,
        id_tournament: formResult.id_tournament
      }
      this.oneService.updateTeamMatch(teamMatch).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.matchForm.controls[controlName].hasError(errorName);
  }

}
