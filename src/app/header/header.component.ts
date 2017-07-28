import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

// services
import { SpotifyService } from '../services/spotify.service';
import { PlaylistService } from '../services/playlist.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public spotifyId: string;
  public baseUrl: string = environment.baseUrl;

  public pinNumber: number;

  constructor(
    private _spotifyService: SpotifyService,
    private _playlistService: PlaylistService
  ) { }

  ngOnInit() {
    this._spotifyService.isloggedin()
    .then( (user) => {
      // log the user
      console.log('USER', user);
      this.spotifyId = user.spotifyID;
      console.log(this.spotifyId)

      // call method in SpotifyService that sets the spotifyId the access token, and the refresh token
      this._spotifyService.setCreds(user.spotifyID, user.accessToken, user.refreshToken);
    })
    .catch( (err) => {
      console.log(err);
    });

    this.getPinNumber();
  }

  getPinNumber() {
    this._playlistService.getPinNumber()
    .subscribe( (playlist) => {
      this.pinNumber = playlist['pin'];
    });
  }

  searchPinNumbers() {

  }

  logout() {
    this._spotifyService.logout();
    this._spotifyService.removeCreds();
    window.location.reload();
  }

}
