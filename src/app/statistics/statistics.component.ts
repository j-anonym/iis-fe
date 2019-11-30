import { Component, OnInit, ViewChild } from '@angular/core';
import { StatisticsService } from './statistics.service';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface NStat {
  name: string;
  id_stat: number;
  won_matches: number;
  lost_matches: number;
  won_sets: number;
  lost_sets: number;
  won_games: number;
  lost_games: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  playerDataSource = new MatTableDataSource<NStat>();
  teamDataSource = new MatTableDataSource<NStat>();


  displayedColumns: string[] = ['name', 'won_matches', 'lost_matches', 'won_sets', 'lost_sets', 'won_games', 'lost_games'];

  constructor(private statisticService: StatisticsService) { }

  ngOnInit() {
    this.statisticService.getAllStatisticsPlayers().subscribe(response => {
      this.playerDataSource.data = response as NStat[];
    });

    this.statisticService.getAllStatisticsTeams().subscribe(response => {
      this.teamDataSource.data = response as NStat[];
    });

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.playerDataSource.sort = this.sort;
  }

}
