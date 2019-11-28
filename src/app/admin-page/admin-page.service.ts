import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AdminPageService {

  constructor(private http: HttpClient) { }

  loadUsers() {
    return this.http.get('http://localhost:8080/api/person/all');
  }

  deleteUser(id_user) {
    this.http.delete('http://localhost:8080/api/person/delete/' + id_user).subscribe(response => {
      console.log(response);
    });
  }
}
