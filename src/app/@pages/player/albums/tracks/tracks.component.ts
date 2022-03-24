import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Track, TrackSpotify } from 'src/app/interfaces/spotify/track.spotify';
import { Album } from 'src/app/interfaces/spotify/album.spotify';
import { MatDialog } from '@angular/material/dialog';
import { DetailsTrackComponent } from 'src/app/shared/components/dialogs/details-track/details-track.component';
import { Artist } from 'src/app/interfaces/spotify/artist.spotify';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'plays', 'time'];
  dataSource: Track[];
  albumData: Album;

  constructor(
    public dialog: MatDialog,
    private readonly _route: ActivatedRoute,
    private readonly _spotifyService: SpotifyService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this._spotifyService.getAlbumById(id).subscribe((album: Album) => this.albumData = album);
    this._spotifyService.getTracksByAlbumId(id).subscribe((tracks: TrackSpotify) => this.dataSource = tracks?.items);
  }

  onViewDetails(trackRow: Track) {    
    const artistsName = trackRow?.artists.map((artist: Artist) => artist.name).join(',');
    const album = this.albumData?.name;    
    const name = trackRow?.name;

    const dialogRef = this.dialog.open(DetailsTrackComponent, {
      width:'40%',
      height:'40%',
      data: { name, album, artistsName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
