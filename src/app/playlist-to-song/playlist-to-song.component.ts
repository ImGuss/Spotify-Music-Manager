import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


// services
import { SpotifyService } from '../services/spotify.service';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlist-to-song',
  templateUrl: './playlist-to-song.component.html',
  styleUrls: ['./playlist-to-song.component.css']
})
export class PlaylistToSongComponent implements OnInit {

  public spotifyId;

  public trackId: string;

  public playlists: any[] = [];

  constructor(
    private _spotifyService: SpotifyService,
    private _playlistService: PlaylistService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {

    // set user credentials
    this._spotifyService.isloggedin()
    .then( (user) => {
      // log the user
      console.log('USER', user);

      this.spotifyId = user.spotifyID;

      // call method in SpotifyService that sets the spotifyId the access token, and the refresh token
      this._spotifyService.setCreds(user.spotifyID, user.accessToken, user.refreshToken);

      // load playlists after setting credentials
      this.listPlaylists();
    })
    .catch( (err) => {
      console.log(err);
    });

    this._route.params.subscribe( (params) => {
      this.trackId = params.id;
    })
  }

  listPlaylists() {
    this._spotifyService.listPlaylists()
    .subscribe( (playlists) => {

      playlists.items.forEach( (playlist) => {
        this.playlists.push(playlist)
      });
    });
  }

  choosePlaylist(playlistId) {

    this._playlistService.addSongToPlaylist(playlistId, this.trackId)
    .subscribe( (playlist) => {
      this._router.navigate(['/playlists']);
    });

  }

}
