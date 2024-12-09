import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes) //forChild
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }