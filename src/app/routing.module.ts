import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { FullLayoutComponent } from './full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'detail/:id',
        loadChildren: './hero-detail/hero-detail.module#HeroDetailModule'
      },
      {
        path: 'heroes',
        loadChildren: './heroes/heroes.module#HeroesModule'
      },
      {
        path: '**', // error route
        loadChildren: './error/error.module#ErrorModule'
      }
    ]
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ], //forRoot
  exports: [ RouterModule ]
})

export class RoutingModule { }