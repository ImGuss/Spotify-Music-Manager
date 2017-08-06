import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSearchResultsComponent } from './public-search-results.component';

describe('PublicSearchResultsComponent', () => {
  let component: PublicSearchResultsComponent;
  let fixture: ComponentFixture<PublicSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
