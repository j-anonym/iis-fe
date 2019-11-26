import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentsManageService {

  constructor(private http: HttpClient) { }

  getAllTournamentsByUser(id_user) {
    return this.http.get("http://localhost:8080/api/tournament/getall/" + id_user);
  }
}
