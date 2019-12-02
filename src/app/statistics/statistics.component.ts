import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
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
export class StatisticsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild('sBSort', {static: false}) sBSort: MatSort;


  playerDataSource = new MatTableDataSource<NStat>();
  teamDataSource = new MatTableDataSource<NStat>();


  displayedColumns: string[] = ['name', 'won_matches', 'lost_matches', 'won_sets', 'lost_sets', 'won_games', 'lost_games'];

  constructor(private statisticService: StatisticsService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.statisticService.getAllStatisticsPlayers().subscribe(response => {
      this.playerDataSource.data = response as NStat[];
    });

    this.statisticService.getAllStatisticsTeams().subscribe(response => {
      this.teamDataSource.data = response as NStat[];
    });

  }

  public doFilter(value: string) {
    this.playerDataSource.filter = value.trim().toLocaleLowerCase();
  }

  public doFilterTeam(value: string) {
    this.teamDataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {
    this.playerDataSource.sort = this.sort;
    this.teamDataSource.sort = this.sBSort;
    this.cdRef.detectChanges();
  }
  
  getPlayer(row) {
    this.router.navigate(['/player/'+row.id_stat]);
  }
}
