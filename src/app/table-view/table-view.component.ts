import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Store, select } from '@ngrx/store';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import {
  filter,
  map,
  tap,
} from 'rxjs/operators';

import { AppReducers } from '../store/reducers';
import { UserDataLoad, UserSchema } from '../store/user-data-actions';

export class UserDataSource extends DataSource<UserSchema> {

  userData$: Observable<AppReducers>;
  data$: Observable<UserSchema[]>;

  constructor(private store: Store<AppReducers>) {
    super();

    this.store.dispatch(new UserDataLoad());

    this.userData$ = this.store.pipe(select('users'));
    this.data$ = this.userData$.pipe(
      filter(o => !!o),
      map(o => o['userData']),
      // tap(o => console.log('@>', o)),
    );
  }

  connect(): Observable<UserSchema[]> {
    return this.data$;
  }

  disconnect() {}

}

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableViewComponent implements OnInit {

  displayedColumns = ['id', 'first_name', 'last_name', 'email', 'ip_address'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppReducers>) {
    this.dataSource = new UserDataSource(this.store);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
