import { Artist } from "./artist.spotify";
import { ExternalUrlsSpotify } from "./externalUrls.spotify";
import { ImageSpotify } from "./image.spotify";

export interface Copyrights {
    text:string;
    type:string;
}

export interface ExportIds {
    upc:string;
}

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    copyrights: Copyrights[];
    external_ids: ExportIds;
    external_urls: ExternalUrlsSpotify;
    genres: unknown;
    href: string;
    id: string;
    images: ImageSpotify[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    tracks: unknown;
    type: string;
    uri: string;
}