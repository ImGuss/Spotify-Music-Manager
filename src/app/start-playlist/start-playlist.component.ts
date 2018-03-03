import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

// services
import { SpotifyService } from '../services/spotify.service';
import { PlaylistService } from '../services/playlist.service';


@Component({
  selector: 'app-start-playlist',
  templateUrl: './start-playlist.component.html',
  styleUrls: ['./start-playlist.component.css']
})
export class StartPlaylistComponent implements OnInit {

  public spotifyId: string;
  public baseUrl: string = environment.baseUrl;

  public pinNumber: number;

  private accessToken: string;
  private refreshToken: string;

  private publicAccessToken: string;
  private publicSpotifyId: string;

  constructor(
    private _playlistService: PlaylistService,
    private _spotifyService: SpotifyService,
    private _router: Router,
    private _http: Http
  ) { }

  ngOnInit() {
    this._spotifyService.isloggedin()
    .then( (user) => {
      // log the user
      console.log('USER', user);
      this.spotifyId = user.spotifyID;
      console.log(this.spotifyId)
      this.accessToken = user.accessToken;
      this.refreshToken = user.refreshToken;

      // call method in SpotifyService that sets the spotifyId the access token, and the refresh token
      this._spotifyService.setCreds(user.spotifyID, user.accessToken, user.refreshToken);

      this.getPinNumber();
      this.getPubCreds();


      this.savePubCreds()
      .then( (playlist) => {
      })
      .catch( err => console.log(err));
    })
    .catch( (err) => {
      console.log(err);
    });


  }

  getPinNumber() {
    this._playlistService.getPinNumber(this.spotifyId)
    .subscribe( (playlist) => {
      this.pinNumber = playlist['pin'];
    });
  }

  // get public playlist credentials which ironically are private, and save them to this component
  getPubCreds() {
    const creds = this._playlistService.sendPubCreds();

    this.publicSpotifyId = creds[0];
    this.publicAccessToken = creds[1];
    return;
  }

  // save public playlist credentials to server
  savePubCreds() {

    console.log('publicid and access token', this.publicSpotifyId, this.publicAccessToken);

    const finalUrl = `${this.baseUrl}/playlist/credentials/set`;

    return this._http.post(
      finalUrl,
      {
        spotifyId: this.publicSpotifyId,
        accessToken: this.publicAccessToken
      },
      { withCredentials: true }
    )
    .toPromise()
    .then( res => res.json() );
  }

}
