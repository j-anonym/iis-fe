import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentsOneService {

  constructor(private http: HttpClient) { }

  getOneTournament(id_tournament) {
    return this.http.get('/api/tournament/get/' + id_tournament);
  }

  deleteTournament(id_tournament) {
    return this.http.delete('/api/tournament/delete/' + id_tournament);
  }

  getPendingPlayers(id_tournament) {
    return this.http.get('/api/tournament/player/getpending/' + id_tournament);
  }

  getPendingReferees(id_tournament) {
    return this.http.get('/api/tournament/player/getpendingreferee/' + id_tournament);
  }

  getPendingTeams(id_tournament) {
    return this.http.get('/api/tournament/team/getpending/' + id_tournament);
  }

  getAcceptedPlayers(id_tournament) {
    return this.http.get('/api/tournament/player/getaccepted/' + id_tournament);
  }

  getAcceptedReferees(id_tournament) {
    return this.http.get('/api/tournament/player/getacceptedreferees/' + id_tournament);
  }

  getAcceptedTeams(id_tournament) {
    return this.http.get('/api/tournament/team/getaccepted/' + id_tournament);
  }

  acceptPlayer(id_tournament, id_player) {
    return this.http.put('/api/tournament/player/accept/' + id_tournament + '/' + id_player, null);
  }

  acceptTeam(id_tournament, id_team) {
    return this.http.put('/api/tournament/team/accept/' + id_tournament + '/' + id_team, null);
  }

  declinePlayer(id_tournament, id_player) {
    return this.http.delete('/api/tournament/player/decline/' + id_tournament + '/' + id_player);
  }

  declineTeam(id_tournament, id_team) {
    return this.http.delete('/api/tournament/team/decline/' + id_tournament + '/' + id_team);
  }

  getAllPlayerMatches(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/getplayermatches/"+id_tournament);
  }

  getAllTeamMatches(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/getteammatches/"+id_tournament);
  }

  updatePlayerMatch(body) {
    return this.http.post("http://localhost:8080/api/tournament/update/player/match", body);
  }

  updateTeamMatch(body) {
    return this.http.post("http://localhost:8080/api/tournament/update/team/match", body);
  }
}
