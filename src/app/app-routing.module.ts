import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { NewPinComponent } from './new-pin/new-pin.component';
import { SearchComponent } from './search/search.component';
import { CallbackComponent } from './callback/callback.component';
import { PublicSearchComponent } from './public-search/public-search.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { StartPlaylistComponent } from './start-playlist/start-playlist.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistToSongComponent } from './playlist-to-song/playlist-to-song.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PublicPlaylistToSongComponent } from './public-playlist-to-song/public-playlist-to-song.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'pin/new', component: NewPinComponent },

  { path: 'search', component: SearchComponent },

  { path: 'callback', component: CallbackComponent },

  { path: 'playlists', component: ListPlaylistsComponent },

  { path: 'search/public', component: PublicSearchComponent },

  { path: 'start-playlist', component: StartPlaylistComponent },

  { path: 'playlists/create', component: CreatePlaylistComponent },

  { path: 'playlists/:id', component: PlaylistDetailsComponent },

  { path: 'playlists/add/:id', component: PlaylistToSongComponent },

  { path: 'public/playlists/add/:id', component: PublicPlaylistToSongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
