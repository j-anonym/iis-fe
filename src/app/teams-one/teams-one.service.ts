import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsOneService {

  constructor(private http: HttpClient) { }

  getTeam(id_team) {
    return this.http.get("http://localhost:8080/api/team/get/" + id_team);
  }

  getTeamPlayers(id_team) {
    return this.http.get("http://localhost:8080/api/team/get/players/" + id_team)
  }

  deleteTeam(id_team) {
    return this.http.delete("http://localhost:8080/api/team/delete/" + id_team);
  }
}
