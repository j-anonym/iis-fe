import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsAllService {

  constructor(private http: HttpClient) { }

  getAllTeams() {
    return this.http.get('/api/team/getall');
  }

  joinTeam(id_team, id_player) {
    return this.http.put('/api/team/join/' + id_team + '/' + id_player, null);
  }

  getAllJoined(id_user) {
    return this.http.get('/api/team/getjoined/' + id_user);
  }
}
