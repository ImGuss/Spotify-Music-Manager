import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';

//services
import { SpotifyService } from './spotify.service';


@Injectable()
export class PlaylistService {

  private accessToken: string;
  public baseUrl: string = environment.baseUrl;

  constructor(
    private _http: Http,
    private _spotifyService: SpotifyService
  ) { }

  // creates a playlist on backend as well as spotify
  generatePlaylist() {

    this.accessToken = this._spotifyService.getAccessToken();

    const baseUrl = `${this.baseUrl}/playlist/create/${this._spotifyService.spotifyId}`;
    return this._http.post(
      baseUrl,
      {
        accessToken: this.accessToken
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

  // get user's playlist pin number
  getPinNumber(spotifyId) {
    const baseUrl = `${this.baseUrl}/${spotifyId}/getpin`;

    return this._http.get(
      baseUrl,
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

  addSongToPlaylist(playlistId, trackId) {

    const spotifyId = this._spotifyService.spotifyId;
    const baseUrl = `${this.baseUrl}/spotify/playlist/${spotifyId}/add/${playlistId}`;

    return this._http.post(
      baseUrl,
      {
        track: trackId,
        accessToken: this._spotifyService.accessToken
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

  getPlaylistOwnerByPinNumber(pinNumber) {

    const baseUrl = `${this.baseUrl}/search/playlists/public`

    return this._http.post(
      baseUrl,
      {
        pin: pinNumber
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

}
