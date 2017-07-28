import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { SpotifyService } from '../services/spotify.service';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _spotifyService: SpotifyService,
    private _playlistService: PlaylistService,
    private _actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this._spotifyService.isloggedin()
    .then( (user) => {
      // log the user
      console.log('USER', user);

      // call method in SpotifyService that sets the spotifyId the access token, and the refresh token
      this._spotifyService.setCreds(user.spotifyID, user.accessToken, user.refreshToken);
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  logout() {
    this._spotifyService.logout();
    this._spotifyService.removeCreds();
    window.location.reload();
  }

  // generatePlaylist() {
  //   this._playlistService.generatePlaylist()
  // }


}
