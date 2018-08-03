import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { appReducers } from './store/reducers';
import { TableViewComponent } from './table-view/table-view.component';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserDataService]),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [
    UserDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
