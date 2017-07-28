import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

  playlistId: string;
  playlist: any;

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute,
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

    this._route.params.subscribe( (params) => {
      this.getSinglePlaylist(params['id']);
    });
  }

  getSinglePlaylist(playlistId) {
    this._spotifyService.getSinglePlaylist(playlistId)
    .subscribe( (playlist) => {
      console.log('\n','PLAYLIST!!!~~~~~~',playlist, typeof(playlist));
      this.playlist = playlist;
      console.log('\n','THIS PLAYLIST~~~',this.playlist)
    });
  }

}
