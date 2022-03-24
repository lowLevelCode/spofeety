import { Injectable } from '@angular/core';
import { SpotifyEnvironment } from 'src/environments/environment';
import { ACCESS_TOKEN_SPOFEETY } from "../helpers/constants";


@Injectable({
  providedIn: 'root'
})
export class LoginSpofeetyService {
  constructor() { }

  definirAccessToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN_SPOFEETY, token);
  }

  getTokenUrlCallback() {
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  getUrlSpotify(): string {
    const authEndpoint = `${SpotifyEnvironment.authEndpoint}`;
    const clientId = `client_id=${SpotifyEnvironment.clientId}`;
    const redirectUrl = `redirect_uri=${SpotifyEnvironment.redirectUrl}`;
    const scopes = `scope=${SpotifyEnvironment.scopes.join('%20')}`;
    const responseType = `response_type=token&show_dialog=true`;
    return `${authEndpoint}?${clientId}&${redirectUrl}&${scopes}&${responseType}`;
  }

  logout() {
    localStorage.removeItem(ACCESS_TOKEN_SPOFEETY);
  }

  isLogin(): boolean {
    const token = localStorage.getItem(ACCESS_TOKEN_SPOFEETY);
    if (token) return true;

    return false;
  }

  getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN_SPOFEETY);
  }

}
