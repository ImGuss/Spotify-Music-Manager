import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPlaylistToSongComponent } from './public-playlist-to-song.component';

describe('PublicPlaylistToSongComponent', () => {
  let component: PublicPlaylistToSongComponent;
  let fixture: ComponentFixture<PublicPlaylistToSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPlaylistToSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPlaylistToSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
