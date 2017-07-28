import { Component, OnInit } from '@angular/core';


// services
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-list-playlists',
  templateUrl: './list-playlists.component.html',
  styleUrls: ['./list-playlists.component.css']
})
export class ListPlaylistsComponent implements OnInit {

  public playlists: any[] = [];

  constructor(
    private _spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
    // set user credentials
    this._spotifyService.isloggedin()
    .then( (user) => {
      // log the user
      console.log('USER', user);

      // call method in SpotifyService that sets the spotifyId the access token, and the refresh token
      this._spotifyService.setCreds(user.spotifyID, user.accessToken, user.refreshToken);

      // load playlists after setting credentials
      this.listPlaylists();
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  listPlaylists() {
    this._spotifyService.listPlaylists()
    .subscribe( (playlists) => {

      playlists.items.forEach( (playlist) => {
        this.playlists.push(playlist)
      });
    });
  }

}
