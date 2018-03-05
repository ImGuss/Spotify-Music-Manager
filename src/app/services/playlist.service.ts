import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';

//services
import { SpotifyService } from './spotify.service';


@Injectable()
export class PlaylistService {

  private accessToken: string;
  public baseUrl: string = environment.baseUrl;

  private publicPlaylist: any;
  private publicAccessToken: string;
  private publicSpotifyId: string;

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

  addSongToPublicPlaylist(playlistId, trackId, spotifyId, accessToken) {

    const baseUrl = `${this.baseUrl}/spotify/playlist/${spotifyId}/add/${playlistId}`;

    return this._http.post(
      baseUrl,
      {
        track: trackId,
        accessToken: accessToken
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
    .map( (res) => {
      const data = res.json();
      this.publicAccessToken = data['ownerId']['accessToken'];
      this.publicSpotifyId = data['ownerId']['spotifyID'];
      return res.json();
    });
  }

  searchMusicPublic(query: string, type: string) {
    const baseUrl = `${this.baseUrl}/spotify/search?`;

    const params = [
      `q=${query}`,
      `type=${type}`
    ].join('&');

    const finalUrl = baseUrl + params;

    return this._http.post(
      finalUrl,
      {
        accessToken: this.publicAccessToken
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

  setPublicCreds(spotifyId, accessToken) {

    this.publicSpotifyId = spotifyId;
    this.publicAccessToken = accessToken;

    const baseUrl = `${this.baseUrl}/playlist/credentials/set`;


    return this._http.post(
      baseUrl,
      {
        spotifyId,
        accessToken
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

  // send private credentials to start playlist component
  sendPubCreds() {
    return [this.publicSpotifyId, this.publicAccessToken];
  }


  // might not need this method
  getPubPlaylistFromServer() {

    const finalUrl = `${this.baseUrl}/playlist/credentials/get`

    return this._http.post(
      finalUrl,
      {
        spotifyId: this.publicSpotifyId
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

}
