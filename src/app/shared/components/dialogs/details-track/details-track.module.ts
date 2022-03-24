import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsTrackComponent } from './details-track.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DetailsTrackComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    DetailsTrackComponent
  ]
})
export class DetailsTrackModule { }
