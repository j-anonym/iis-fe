import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getAllStatisticsPlayers() {
    return this.http.get('http://localhost:8080/api/statistics/getall/players');
  }

  getAllStatisticsTeams() {
    return this.http.get('http://localhost:8080/api/statistics/getall/teams');
  }
}
