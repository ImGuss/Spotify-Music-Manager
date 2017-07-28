import { Component, OnInit } from '@angular/core';

// services
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  errorMessage: string;

  loginUrl: string;

  constructor(
    private _spotifyService: SpotifyService,
  ) { }

  ngOnInit() {
  }

}
