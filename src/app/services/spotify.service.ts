import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {

  public spotifyId: string;
  public code: string;

  private accessToken: string;
  private refreshToken: string;

  public searchResults: any;

  constructor(
    private _http: Http
  ) { }

  // check back end to see if user is logged in
  isloggedin() {
    return this._http.get(
      'http://localhost:3000/loggedin',
      { withCredentials: true }
    )
    .toPromise()
    .then( res => res.json() );
  }

  setCreds(spotifyId: string, accessToken: string, refreshToken: string) {
    this.spotifyId = spotifyId;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  logout() {
    return this._http.get(
      'http://localhost:3000/logout',
      { withCredentials: true }
    )
    .toPromise()
    .then( res => res.json);
  }

  removeCreds() {
    this.spotifyId = undefined;
    this.code = undefined;
    this.accessToken = undefined;
    this.refreshToken = undefined;
  }


  // creates playlist based on parameters given by method that's calling it in create-playlist component
  createPlaylist(listName: string, listDesc: string) {
    console.log(this.spotifyId);

    const baseUrl = `http://localhost:3000/spotify/${this.spotifyId}/playlists/create`;

    return this._http.post(
      baseUrl,
      {
        listName: listName,
        listDesc: listDesc,
        accessToken: this.accessToken
      },
      {withCredentials: true}
    )
    .toPromise()
    .then( res => res.json() );
  }

  listPlaylists() {

    const baseUrl = `http://localhost:3000/spotify/${this.spotifyId}/playlists/`;

    return this._http.post(
      baseUrl,
      {
        accessToken: this.accessToken
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

  getSinglePlaylist(playlistId: string) {

    const baseUrl = `http://localhost:3000/spotify/${this.spotifyId}/playlists/`;

    return this._http.post(
      baseUrl + playlistId,
      {
        accessToken: this.accessToken
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }

  searchMusic(query: string, type: string) {
    const baseUrl = `http://localhost:3000/spotify/search?`;

    const params = [
      `q=${query}`,
      `type=${type}`
    ].join('&');

    const finalUrl = baseUrl + params;

    return this._http.post(
      finalUrl,
      {
        accessToken: this.accessToken
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }


}
