import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AdminPageService {

  constructor(private http: HttpClient) { }

  loadUsers() {
    return this.http.get('/api/person/all');
  }

  deleteUser(id_user) {
    this.http.delete('/api/person/delete/' + id_user).subscribe(response => {
    });
  }

  updateUser(data) {
    this.http.post('/api/person/update', data).subscribe(response => {
    });
  }

  updateUserWait(data) {
    return this.http.post('/api/person/update', data)
  }

  getUser(id_user) {
    return this.http.get("/api/person/get/"+id_user);
  }
  
  getPlayer(id_stat) {
    return this.http.get("/api/person/getplayer/"+ id_stat);
  }
  
  
  
}
