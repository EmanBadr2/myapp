import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersListComponent } from './components/users-list/users-list.component';



import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';

import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { AddEditUsersComponent } from './components/add-edit-users/add-edit-users.component';




@NgModule({
  declarations: [
    UsersListComponent,
    AddEditUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule  ,


    SharedModule ,
    MaterialModule ,

    DashboardModule

  ]
})
export class UsersModule { }
