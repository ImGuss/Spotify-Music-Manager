import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private _playlistService: PlaylistService,
    private _router: Router,
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

      this.getPinNumber();
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

  logout() {
    this._spotifyService.logout();
    this._spotifyService.removeCreds();
    window.location.reload();
  }

  getPlaylistOwnerByPinNumber(pinNumber) {
    this._playlistService.getPlaylistOwnerByPinNumber(pinNumber)
    .subscribe( (playlist) => {
      this._router.navigate(['/search/public']);
    });
  }

  generatePlaylist() {
    this._playlistService.generatePlaylist()
    .subscribe( (playlist) => {
      this.pinNumber = playlist['pin'];
    });
  }

}
