import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsOneService {

  constructor(private http: HttpClient) { }

  getTeam(id_team) {
    return this.http.get("/api/team/get/" + id_team);
  }
}
