import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// services
import { SpotifyService } from './services/spotify.service';
import { PlaylistService } from './services/playlist.service';

// components
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CallbackComponent } from './callback/callback.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { ListPlaylistsComponent } from './list-playlists/list-playlists.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PlaylistToSongComponent } from './playlist-to-song/playlist-to-song.component';
import { PublicSearchComponent } from './public-search/public-search.component';
import { PublicSearchResultsComponent } from './public-search-results/public-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    CallbackComponent,
    CreatePlaylistComponent,
    ListPlaylistsComponent,
    PlaylistDetailsComponent,
    SearchResultsComponent,
    PlaylistToSongComponent,
    PublicSearchComponent,
    PublicSearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    SpotifyService,
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
