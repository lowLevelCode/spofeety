import { Artist } from "./artist.spotify";
import { ExternalUrlsSpotify } from "./externalUrls.spotify";

export interface Track {
    artists: Artist[];    
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrlsSpotify;
    href: string;
    id: string;
    is_local: false
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface TrackSpotify {
    href:string;
    items: Track[];
    limit: number;
    next: unknown;
    offset: number;
    previous: unknown;
    total: number;
}