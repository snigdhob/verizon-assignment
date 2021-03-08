import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3sub3Component } from './route3sub3.component';

describe('Route3sub3Component', () => {
  let component: Route3sub3Component;
  let fixture: ComponentFixture<Route3sub3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3sub3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3sub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
