import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


// services
import { SpotifyService } from '../services/spotify.service';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-public-playlist-to-song',
  templateUrl: './public-playlist-to-song.component.html',
  styleUrls: ['./public-playlist-to-song.component.css']
})
export class PublicPlaylistToSongComponent implements OnInit {

  public spotifyId: string;
  public accessToken: string;
  public refreshToken: string;

  private publicSpotifyId: string;
  private publicAccessToken: string;
  private publicPlaylistId: string;

  public trackId: string;

  public playlist: any[] = [];

  constructor(
    private _spotifyService: SpotifyService,
    private _playlistService: PlaylistService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit() {
    // need to copy PlaylistToSongComponent ngoninit but need to make sure it only list the one public playlist

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

      this._playlistService.getPubPlaylistFromServer()
      .subscribe( (playlist) => {
        console.log('playlist',playlist)
        this.publicPlaylistId = playlist.playlistId;
        this.publicAccessToken = playlist.accessToken;
        this.publicSpotifyId = playlist.owner;
      });

      this._route.params.subscribe( (params) => {
        this.trackId = params['id'];
      });

    })
    .catch( (err) => {
      console.log(err);
    });
  }

  // add song to public playlist and navigate back to search
  // maybe will make it so that it will go straight to playlist in order to vote
  addSongtoPublicPlaylist() {
    console.log('trackID', this.trackId);

    this._playlistService.addSongToPublicPlaylist(this.publicPlaylistId, this.trackId, this.publicSpotifyId, this.publicAccessToken)
    .subscribe( (playlist) => {
      this._router.navigate(['/search/public']);
    })
  }

  goBackToSearch() {

    // need to navigate back to search with the party owner's spotify creds
    this._router.navigate(['/search/public']);
  }

}
