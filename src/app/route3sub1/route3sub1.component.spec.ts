import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3sub1Component } from './route3sub1.component';

describe('Route3sub1Component', () => {
  let component: Route3sub1Component;
  let fixture: ComponentFixture<Route3sub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3sub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
