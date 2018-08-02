import { Component, OnInit, ViewChild } from '@angular/core';
import { DATA, UserSchema } from './user-data';

import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.styl']
})
export class TableViewComponent implements OnInit {

  displayedColumns = [ 'id', 'first_name', 'last_name', 'email', 'ip_address' ];
  dataSource: MatTableDataSource<UserSchema> = new MatTableDataSource(DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
