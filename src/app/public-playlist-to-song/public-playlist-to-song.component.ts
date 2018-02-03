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

  public spotifyId;

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
  }


  addSongtoPublicPlaylist() {
    // need to find playlist ID and add song ID from query string to playlist service addSongToPlaylist method then this._router.navigate to the list of songs to be able to vote
  }

  goBackToSearch() {
    // need to navigate back to search with the party owner's spotify creds
  }

}
