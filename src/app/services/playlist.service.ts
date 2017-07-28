import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PlaylistService {

  constructor(
    private _http: Http
  ) { }

  // creates a playlist on backend as well as spotify
  generatePlaylist() {

    const baseUrl = 'http://localhost:3000/';
    return this._http.post(
      baseUrl,
      {  },
      { withCredentials: true }
    )
  }
}
