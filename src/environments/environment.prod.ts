export const environment = {
  production: true
};

export const SpotifyEnvironment = {
  clientId: 'aa6946f8c33746478534d8864104223b',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", 
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read", 
    "user-modify-playback-state",
    "user-library-read", 
    "playlist-read-private",
    "playlist-read-collaborative"
  ],
  urlApi:' https://api.spotify.com/v1'
}
