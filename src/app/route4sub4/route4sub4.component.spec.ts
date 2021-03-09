import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route4sub4Component } from './route4sub4.component';

describe('Route4sub4Component', () => {
  let component: Route4sub4Component;
  let fixture: ComponentFixture<Route4sub4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route4sub4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4sub4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
