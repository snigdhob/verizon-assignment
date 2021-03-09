import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route4sub3Component } from './route4sub3.component';

describe('Route4sub3Component', () => {
  let component: Route4sub3Component;
  let fixture: ComponentFixture<Route4sub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route4sub3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4sub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
