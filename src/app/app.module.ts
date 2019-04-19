import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { DeleteItemsComponent } from './delete-items/delete-items.component';
import { BorrowItemsComponent } from './borrow-items/borrow-items.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { ReportComponent } from './report/report.component';
import { ReturnItemsComponent } from './return-items/return-items.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';


@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    DeleteItemsComponent,
    BorrowItemsComponent,
    DisplayListComponent,
    ReportComponent,
    ReturnItemsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DlDateTimePickerDateModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
