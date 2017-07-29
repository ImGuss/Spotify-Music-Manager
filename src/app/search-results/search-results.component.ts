import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

// services
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private _spotifyService: SpotifyService,
    private _router: Router
  ) { }

  @Input() results: any;

  ngOnInit() {
  }

  addTrack(id) {
    this._router.navigate([`/playlists/add/${id}`]);
  }


}
