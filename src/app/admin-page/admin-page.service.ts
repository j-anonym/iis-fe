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
      console.log(response);
    });
  }

  updateUser(data) {
    this.http.post('/api/person/update', data).subscribe(response => {
      console.log(response);
    });
  }

  getUser(id_user) {
    return this.http.get("/api/person/get/"+id_user);
  }
  
  updateName(id_user, name) {
    return this.http.put('/api/person/updatename/' + id_user + '/' + name, null);
  }

  updateSurname(id_user, surname) {
    return this.http.put('/api/person/updatesurname/' + id_user + '/' + surname, null);
  }

  updateNationality(id_user, nationality) {
    return this.http.put('/api/person/updatenationality/' + id_user + '/' + nationality, null);
  }

  updateBirth(id_user, birth) {
    return this.http.put('/api/person/updatebirth/' + id_user + '/' + birth, null);
  }

  updateLeftHanded(id_user, left_handed) {
    return this.http.put('/api/person/updatelefthanded/' + id_user + '/' + left_handed, null);
  }
  
  updateSex(id_user, sex) {
    return this.http.put('/api/person/updatesex/' + id_user + '/' + sex, null);
  }
  
}
