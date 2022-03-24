import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MeSpotify } from 'src/app/interfaces/spotify/me.spotify';
import { LoginSpofeetyService } from 'src/app/services/login-spofeety.service';
import { MessageStateService } from 'src/app/services/mesage.state.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-toolbar-with-search',
  templateUrl: './toolbar-with-search.component.html',
  styleUrls: ['./toolbar-with-search.component.scss']
})
export class ToolbarWithSearchComponent implements OnInit {

  buscarControl = new FormControl();
  userName: string;

  constructor(
    private readonly _loginSpofeetyService: LoginSpofeetyService,
    private readonly _spotifyService: SpotifyService,
    private readonly _location: Location,
    private readonly _messageStateService: MessageStateService) { }

  ngOnInit(): void {
    this._spotifyService.getMe().subscribe((me: MeSpotify) => this.userName = me.display_name);

    this.buscarControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data: string) => {
        this._messageStateService.sendMessage(data);
      });
  }

  locationBack() {
    this._location.back();
  }

  locationForward() {
    this._location.forward();
  }

  logOut() {
    this._loginSpofeetyService.logout();
  }

}
