import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./helpers/guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo:'player', pathMatch:'full' },
  { path: 'player', loadChildren: () => import('./@pages/player/player.module').then(m => m.PlayerModule), canActivate:[AuthGuard] },
  { path: 'login', loadChildren: () => import('./@pages/login/login.module').then(m => m.LoginModule) },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
