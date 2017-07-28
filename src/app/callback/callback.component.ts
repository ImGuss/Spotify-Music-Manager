import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

// services
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  public baseUrl: string = environment.baseUrl;

  errorMessage: string;

  loginUrl: string;

  constructor(
    private _spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
  }

}
