import { Component, OnInit } from '@angular/core';

// services
import { SpotifyService } from '../services/spotify.service';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-start-playlist',
  templateUrl: './start-playlist.component.html',
  styleUrls: ['./start-playlist.component.css']
})
export class StartPlaylistComponent implements OnInit {

  constructor(
    private _spotifyService: SpotifyService,
    private _playlistService: PlaylistService,
  ) { }

  ngOnInit() {
  }

}
