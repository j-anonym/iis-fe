import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentsCreateService {

  constructor(private http: HttpClient) { }

  createTournament(body) {
    return this.http.post("/api/tournament/create", body);
  }

  getLastCreatedTournament(id_staff) {
    return this.http.get("/api/tournament/getlast/" + id_staff);
  }
}
