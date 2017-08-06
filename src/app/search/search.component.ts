import { Component, OnInit, Output } from '@angular/core';

// services
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any;

  query: string;
  type: string;


  constructor(
    private _spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
    this._spotifyService.isloggedin()
    .then( (user) => {

      // call method in SpotifyService that sets the spotifyId the access token, and the refresh token
      this._spotifyService.setCreds(user.spotifyID, user.accessToken, user.refreshToken);
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.query, this.type)
    .subscribe( (results) => {
      this.results = results;
    });
  }

}
