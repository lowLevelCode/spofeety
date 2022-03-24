import { Component, Input, OnInit } from '@angular/core';
import { ImgStyleType } from "../../../../types/img-style.type";

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.scss']
})
export class CardSpotifyComponent implements OnInit {

  @Input() img:string;
  @Input() primaryText:string;
  @Input() secondaryText:string;
  @Input() cardType:string = 'album';
  @Input() isRoundedImg:boolean  = false;

  constructor() { }

  ngOnInit(): void {
  }

}
