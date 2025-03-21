import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SharedModule } from "../shared/shared.module";
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent ,
    SidebarComponent ,
     NavbarComponent,
     DeleteItemComponent,
     ProfileComponent,
     ChangePasswordComponent ,
     NoDataComponent,
     LogoutComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule ,
    MaterialModule
] ,
exports:[
  NoDataComponent
]


})
export class DashboardModule { }
