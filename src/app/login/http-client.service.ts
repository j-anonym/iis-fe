import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

}