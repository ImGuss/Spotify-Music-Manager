import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPlaylistComponent } from './start-playlist.component';

describe('StartPlaylistComponent', () => {
  let component: StartPlaylistComponent;
  let fixture: ComponentFixture<StartPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
