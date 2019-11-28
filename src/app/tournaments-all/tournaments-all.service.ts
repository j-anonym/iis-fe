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
}
