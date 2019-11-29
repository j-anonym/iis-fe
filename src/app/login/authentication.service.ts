import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Account } from './account';



@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentSub: BehaviorSubject<Account>;
    public current: Observable<Account>;

    constructor(
        private http:HttpClient
    ) { this.currentSub = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('current')));
        this.current = this.currentSub.asObservable();
    }

    public get currentVal() : Account {
        return this.currentSub.value;
    }

    authenticate(username, password) {
        return this.http.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
            map(
                userData => {
                    localStorage.setItem('current', JSON.stringify(userData));
                    this.currentSub.next(userData);
                    return userData;
                }
            )

        );
    }

    register(username, password, name, surname, nationality) {
        return this.http.post<any>('http://localhost:8080/register',{username,password, name, surname, nationality}).pipe(
            map(
                userData => {
                    localStorage.setItem('current', JSON.stringify(userData));
                    return userData;
                }
            )

        );
    }


    logOut() {
        localStorage.removeItem('current');
        this.currentSub.next(null);
    }
}
