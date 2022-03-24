import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyEnvironment } from 'src/environments/environment';
import { MeSpotify } from "../interfaces/spotify/me.spotify";
import { SearchSpotify } from "../interfaces/spotify/search.spotify";
import { SearchQueryType } from "../types/search-query.type";
import { TrackSpotify } from "../interfaces/spotify/track.spotify";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spofeetyUrl: string = SpotifyEnvironment.urlApi;

  constructor(private readonly _htppClient: HttpClient) { }

  getMe(): Observable<MeSpotify> {
    return this._htppClient.get<MeSpotify>(`${this.spofeetyUrl}/me`);
  }

  search(query: string, type: SearchQueryType): Observable<SearchSpotify> {
    return this._htppClient.get<SearchSpotify>(`${this.spofeetyUrl}/search?q=${query}&type=${type}`);
  }

  getAlbumById(id: string): Observable<any> {
    return this._htppClient.get<any>(`${this.spofeetyUrl}/albums/${id}`);
  }

  getTracksByAlbumId(id: string): Observable<TrackSpotify> {
    return this._htppClient.get<TrackSpotify>(`${this.spofeetyUrl}/albums/${id}/tracks`);
  }

  getTracksById(id: string): Observable<any> {
    return this._htppClient.get<any>(`${this.spofeetyUrl}/tracks/${id}`);
  }

  getRequest(request:string): Observable<SearchSpotify> {
    return this._htppClient.get<SearchSpotify>(request);
  }
}


