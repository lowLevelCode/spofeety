import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { CardSpotifyModule } from 'src/app/shared/components/cards/card-spotify/card-spotify.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CardSpotifyModule,
  ]
})
export class SearchModule { }
