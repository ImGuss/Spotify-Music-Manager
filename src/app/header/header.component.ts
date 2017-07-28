import { Component, OnInit } from '@angular/core';


// services
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public spotifyId: string;

  constructor(
    private _spotifyService: SpotifyService
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
  }

  logout() {
    this._spotifyService.logout();
    this._spotifyService.removeCreds();
    window.location.reload();
  }

}
