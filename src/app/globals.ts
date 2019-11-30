import { Injectable } from '@angular/core';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable()
export class Globals {
    role = 'test';
    loggeduser = '';
    logged: boolean;
    loggeduserid = -1;
    isAdmin = false;
}
