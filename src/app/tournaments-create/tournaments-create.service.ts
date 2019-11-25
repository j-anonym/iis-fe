import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentsCreateService {

  constructor(private http : HttpClient) { }

  createTournament(body) {
    console.log(body);
  }
}
