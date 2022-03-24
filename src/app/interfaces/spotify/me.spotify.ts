import { ExternalUrlsSpotify } from "./externalUrls.spotify";

export interface FollowersSpotify {
    href: string;
    total: number;
}

export interface MeSpotify {
    birthdate: string;
    country: string;
    display_name: string;
    email: string;
    external_urls: ExternalUrlsSpotify;
    followers: FollowersSpotify;
    href: string;
    id: string;
    product: string;
    type: string;
    uri: string;
}