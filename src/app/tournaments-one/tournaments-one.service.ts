import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentsOneService {

  constructor(private http: HttpClient) { }

  getOneTournament(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/get/" + id_tournament);
  }

  deleteTournament(id_tournament) {
    return this.http.delete("http://localhost:8080/api/tournament/delete/" + id_tournament);
  }

  getPendingPlayers(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/player/getpending/"+id_tournament);
  }

  getPendingReferees(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/player/getpendingreferee/"+id_tournament);
  }

  getPendingTeams(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/teams/getpending/"+id_tournament);
  }

  getAcceptedPlayers(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/player/getaccepted/"+id_tournament);
  }

  getAcceptedReferees(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/player/getacceptedreferees/"+id_tournament);
  }

  getAcceptedTeams(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/teams/getaccepted/"+id_tournament);
  }

  acceptPlayer(id_tournament, id_player) {
    return this.http.put("http://localhost:8080/api/tournament/player/accept/"+id_tournament+"/"+id_player, null);
  }

  acceptTeam(id_tournament, id_team) {
    return this.http.put("http://localhost:8080/api/tournament/team/accept/"+id_tournament+"/"+id_team, null);
  }

  declinePlayer(id_tournament, id_player) {
    return this.http.delete("http://localhost:8080/api/tournament/player/decline/"+id_tournament+"/"+id_player);
  }

  declineTeam(id_tournament, id_team) {
    return this.http.delete("http://localhost:8080/api/tournament/team/decline/"+id_tournament+"/"+id_team);
  }
}
