import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPinComponent } from './new-pin.component';

describe('NewPinComponent', () => {
  let component: NewPinComponent;
  let fixture: ComponentFixture<NewPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
