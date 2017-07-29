import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CallbackComponent } from './callback/callback.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistToSongComponent } from './playlist-to-song/playlist-to-song.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'search', component: SearchComponent },

  { path: 'callback', component: CallbackComponent },

  { path: 'playlists/create', component: CreatePlaylistComponent },

  { path: 'playlists', component: ListPlaylistsComponent },

  { path: 'playlists/add/:id', component: PlaylistToSongComponent },

  { path: 'playlists/:id', component: PlaylistDetailsComponent },

  // { path: 'artists/:id', component: ArtistComponent },
  //
  // { path: 'albums/:id', component: AlbumComponent },
  //
  // { path: 'tracks/:id', component: TrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
