import { ExternalUrlsSpotify } from "./externalUrls.spotify";
import { Artist } from "./artist.spotify";

export interface ImgSpotifyCard {
    height: number;
    url: string;
    width: number;
}

export interface Item {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrlsSpotify;
    href: string;
    id: string;
    images: ImgSpotifyCard[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface AlbumsSpotify {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface ArtistsSpotify {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface SearchSpotify {
    albums: AlbumsSpotify;
    artists: ArtistsSpotify;    
}