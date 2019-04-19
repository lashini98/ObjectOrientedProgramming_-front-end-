import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DeleteItemsComponent } from './delete-items/delete-items.component';
import { BorrowItemsComponent } from './borrow-items/borrow-items.component';
import { ReturnItemsComponent } from './return-items/return-items.component';
import { ReportComponent } from './report/report.component';
import { DisplayListComponent } from './display-list/display-list.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:  'add-items', component: AddItemsComponent},
  {path: 'delete-items', component: DeleteItemsComponent},
  {path: 'borrow-items', component: BorrowItemsComponent},
  {path: 'return-items', component: ReturnItemsComponent},
  {path: 'report', component: ReportComponent},
  {path: 'display-items', component: DisplayListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
