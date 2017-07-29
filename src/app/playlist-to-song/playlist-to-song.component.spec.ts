import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistToSongComponent } from './playlist-to-song.component';

describe('PlaylistToSongComponent', () => {
  let component: PlaylistToSongComponent;
  let fixture: ComponentFixture<PlaylistToSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistToSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistToSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
