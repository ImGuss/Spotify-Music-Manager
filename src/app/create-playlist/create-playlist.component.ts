import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  // name of the list taken from the from
  listName: string;
  // description of the list taken from the form
  listDesc: string;

  constructor(
    private _spotifyService: SpotifyService,
    private _router: Router,
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

  createPlaylist() {
    this._spotifyService.createPlaylist(this.listName, this.listDesc)
    .then( (playlist) => {
      this._router.navigate(['/playlists/' + playlist.id]);
    })
    .catch( (err) => {
      console.log(err);
    });
  }

}
