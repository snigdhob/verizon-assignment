import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route4sub1Component } from './route4sub1.component';

describe('Route4sub1Component', () => {
  let component: Route4sub1Component;
  let fixture: ComponentFixture<Route4sub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route4sub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
