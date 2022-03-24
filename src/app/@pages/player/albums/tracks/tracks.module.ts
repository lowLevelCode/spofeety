import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './tracks.component';
import { MatTableModule } from '@angular/material/table';
import { DetailsTrackModule } from 'src/app/shared/components/dialogs/details-track/details-track.module';


@NgModule({
  declarations: [
    TracksComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    MatTableModule,
    DetailsTrackModule
  ]
})
export class TracksModule { }
