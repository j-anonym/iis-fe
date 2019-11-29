import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsAllService {

  constructor(private http: HttpClient) { }

  getAllTeams() {
    return this.http.get("http://localhost:8080/api/team/getall");
  }
}
