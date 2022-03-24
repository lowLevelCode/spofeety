import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  { path: '', redirectTo:'search', pathMatch:'full' },
  { 
    path: '', component: PlayerComponent, 
    children:[
      { path: 'home', loadChildren: () => import('../../@pages/player/home/home.module').then(m => m.HomeModule) },
      { path: 'search', loadChildren: () => import('../../@pages/player/search/search.module').then(m => m.SearchModule) },
      { path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule) }
    ] 
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
