import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) { }

  getAllUsers() {
    return this.http.get("http://localhost:8080/api/person/all");
  }
}
