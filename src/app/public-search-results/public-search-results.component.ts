import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

// services
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-public-search-results',
  templateUrl: './public-search-results.component.html',
  styleUrls: ['./public-search-results.component.css']
})
export class PublicSearchResultsComponent implements OnInit {

  constructor(
    private _spotifyService: SpotifyService,
    private _router: Router
  ) { }

  @Input() results: any;

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

}
