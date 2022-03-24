import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { LoginSpofeetyService } from 'src/app/services/login-spofeety.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  spofeetyIconImg: string = 'assets/img/spofeety.png';

  constructor(
    private readonly _loginSpofeety: LoginSpofeetyService,
    private readonly _router: Router) { }

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }


  private verificarTokenUrlCallback() {
    const token = this._loginSpofeety.getTokenUrlCallback();
    if (!!token) {
      this._loginSpofeety.definirAccessToken(token);
      this._router.navigate(['/player/search']);
    }
  }

  onLogin() {
    window.location.href = this._loginSpofeety.getUrlSpotify();
  }
}
