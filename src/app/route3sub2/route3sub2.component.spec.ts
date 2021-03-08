import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3sub2Component } from './route3sub2.component';

describe('Route3sub2Component', () => {
  let component: Route3sub2Component;
  let fixture: ComponentFixture<Route3sub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3sub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
