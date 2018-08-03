import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';

import {
  Action,
  UserDataLoad,
  UserDataLoadSuccess,
  LOAD_USER_DATA,
  LOAD_USER_DATA_SUCCESS
} from '../store/user-data-actions';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  @Effect()
  userData$: Observable<Action> = this.actions$.pipe(
    ofType('User.Data.Load'),
    // ofType(UserDataLoad.type),
    switchMap(() => this.http.get('assets/mock-data/users.json')),
    filter(o => !!o),
    map(o => ({ type: LOAD_USER_DATA_SUCCESS, payload: o['Users'] })),
    // tap(o => console.log('#>', o)),
    // catchError(() => of({type: ''}))
  );

  constructor(public actions$: Actions, public http: HttpClient) { }
}
