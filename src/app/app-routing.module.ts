import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/gurds/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'' , redirectTo:'auth' , pathMatch:'full'} ,

  { path: 'auth',
     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: 'dashboard' ,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'users-list',
     loadChildren: () => import('./dashboard/admin/modules/users/users.module').then(m => m.UsersModule) },
  {path:'**' , component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes  , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
