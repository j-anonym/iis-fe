import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AccountService {
    constructor(private http:HttpClient) {}

    getLoggedUserId(username) {
        return this.http.get("/api/person/getloggeduserid/" + username);
    }

    getLoggedUserAdminStatus(username) {
        return this.http.get("/api/person/getloggeduseradminstatus/" + username);
    }
}
