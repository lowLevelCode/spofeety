import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { CardSpotifyModule } from 'src/app/shared/components/cards/card-spotify/card-spotify.module';
import { BtnOptionsModule } from 'src/app/shared/components/buttons/btn-options/btn-options.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CardSpotifyModule,    
    BtnOptionsModule
  ]
})
export class SearchModule { }
