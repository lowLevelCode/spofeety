import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';

const routes: Routes = [
  {
    path: '', component: AlbumsComponent,
    children: [
      { path: ':id/tracks', loadChildren: () => import('./tracks/tracks.module').then(m => m.TracksModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
