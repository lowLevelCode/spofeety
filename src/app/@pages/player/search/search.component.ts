import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/interfaces/spotify/artist.spotify';
import { AlbumsSpotify, SearchSpotify } from 'src/app/interfaces/spotify/search.spotify';
import { MessageStateService } from 'src/app/services/mesage.state.service';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ImageSpotify } from 'src/app/interfaces/spotify/image.spotify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  albums: AlbumsSpotify;

  constructor(
    private readonly _router: Router,
    private readonly _spotifyService: SpotifyService,
    private readonly _messageState: MessageStateService) { }

  ngOnInit(): void {
    this._messageState.onMessage()
      .subscribe((query: string) =>
        this._spotifyService.search(query, 'album')
          .subscribe((search: SearchSpotify) => this.albums = search.albums)
      );
  }

  onNext() {
    const next = this.albums?.next;

    if (next)
      this._spotifyService.getRequest(next)
        .subscribe((search: SearchSpotify) => this.albums = search.albums)
  }

  onPrev() {
    const previous = this.albums?.previous;

    if (previous)
      this._spotifyService.getRequest(previous)
        .subscribe((search: SearchSpotify) => this.albums = search.albums)
  }

  getTextFromArtisName(artist: Artist[]): string {
    return artist.map((artist: Artist) => artist.name).join(',');
  }

  getImage(images: ImageSpotify[]): string {
    return images[0].url;
  }

  onViewAlbumById(id: string) {
    this._router.navigate([`player/albums/${id}/tracks`]);
  }
}