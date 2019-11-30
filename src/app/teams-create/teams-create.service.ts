import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsCreateService {

  constructor(private http: HttpClient) { }

  createTeam(data) {
    return this.http.post("http://localhost:8080/api/team/create", data);
  }

  getLastCreated(id_user) {
    return this.http.get("http://localhost:8080/api/team/getlast/"+id_user);
  }
}
