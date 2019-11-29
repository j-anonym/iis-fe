import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

 export class Account{
    constructor(
        public status:string,
    ) {}

}


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private httpClient:HttpClient
    ) {
    }

    authenticate(username, password) {
        return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
            map(
                userData => {
                    sessionStorage.setItem('username',username);
                    let tokenStr= 'Bearer '+userData.token;
                    sessionStorage.setItem('token', tokenStr);
                    return userData;
                }
            )

        );
    }

    register(username, password, name, surname, nationality) {
        return this.httpClient.post<any>('http://localhost:8080/register',{username,password, name, surname, nationality}).pipe(
            map(
                userData => {
                    sessionStorage.setItem('username',username);
                    return userData;
                }
            )

        );
    }



    isUserLoggedIn() {
        let account = sessionStorage.getItem('username')
        console.log(!(account === null))
        return !(account === null)
    }

    logOut() {
        sessionStorage.removeItem('username')
    }
}
