import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3sub4Component } from './route3sub4.component';

describe('Route3sub4Component', () => {
  let component: Route3sub4Component;
  let fixture: ComponentFixture<Route3sub4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3sub4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3sub4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
