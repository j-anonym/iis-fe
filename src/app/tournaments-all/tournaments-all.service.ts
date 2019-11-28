import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentsAllService {

  constructor(private http: HttpClient) { }

  getAllTournaments() {
    return this.http.get("http://localhost:8080/api/tournament/getall");
  }

  joinPlayer(id_player, id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/player/join/"+id_tournament+"/"+id_player);
  }

  joinTeam(id_team, id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/team/join/"+id_tournament+"/"+id_team);
  }

  joinReferee(id_player, id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/player/joinreferee/"+id_tournament+"/"+id_player);
  }

  getAllPlayersTournament(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/player/getall/"+id_tournament);
  }

  getAllTeamsTournament(id_tournament) {
    return this.http.get("http://localhost:8080/api/tournament/team/getall/"+id_tournament);
  }
}
