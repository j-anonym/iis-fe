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
}
