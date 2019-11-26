import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentsCreateService {

  constructor(private http : HttpClient) { }

  createTournament(body) {
    this.http.post("http://localhost:8080/api/tournament/create", body);
  }

  getLastCreatedTournament(id_staff) {
    return this.http.get("http://localhost:8080/api/tournament/getlast/" + id_staff);
  }

  // getTournament(id_tournament) {
  //   return this.http.get("http://localhost:8080/api/tournament/get/" + id_tournament);
  // }
}
