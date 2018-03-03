import { Component, OnInit } from '@angular/core';

// services
import { SpotifyService } from '../services/spotify.service';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-public-search',
  templateUrl: './public-search.component.html',
  styleUrls: ['./public-search.component.css']
})
export class PublicSearchComponent implements OnInit {

  private publicSpotifyId: string;
  private publicAccessToken: string;

  results: any;

  query: string;
  type: string;

  constructor(
    private _spotifyService: SpotifyService,
    private _playlistService: PlaylistService,
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

  searchMusicPublic() {
    this._playlistService.searchMusicPublic(this.query, this.type)
    .subscribe( (results) => {
      this.results = results;
      console.log(this.results);
    });
  }

}
