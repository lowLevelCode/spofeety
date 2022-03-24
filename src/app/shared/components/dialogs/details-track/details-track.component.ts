import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-track',
  templateUrl: './details-track.component.html',
  styleUrls: ['./details-track.component.scss']
})
export class DetailsTrackComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
