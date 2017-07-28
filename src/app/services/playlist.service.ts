import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

//services
import { SpotifyService } from './spotify.service';


@Injectable()
export class PlaylistService {

  private accessToken: string;

  constructor(
    private _http: Http,
    private _spotifyService: SpotifyService
  ) { }

  // creates a playlist on backend as well as spotify
  generatePlaylist(listName: string, listDesc: string) {

    this.accessToken = this._spotifyService.getAccessToken();

    const baseUrl = `http://localhost:3000/playlist/create/${this._spotifyService.spotifyId}`;
    return this._http.post(
      baseUrl,
      {
        listName: listName,
        listDesc: listDesc,
        accessToken: this.accessToken
      },
      { withCredentials: true }
    )
    .map( res => res.json() );
  }
}
