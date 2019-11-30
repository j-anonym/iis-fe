import { Injectable } from '@angular/core';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable()
export class Globals {
    role: string = 'test';
    loggeduser: string = '';
    logged: boolean;
    loggeduserid;
    logged_user_is_admin;
}