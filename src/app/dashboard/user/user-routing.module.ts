import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
   { path: 'user-recipes', loadChildren: () => import('./user-recipes/user-recipes.module').then(m => m.UserRecipesModule) },
    { path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
