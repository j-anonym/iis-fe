import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Account} from "./account";

@Injectable({providedIn: 'root'})
export class AccountService {
    constructor(private http:HttpClient) {}
    getAll() {
    }
}