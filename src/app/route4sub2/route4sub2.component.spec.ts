import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route4sub2Component } from './route4sub2.component';

describe('Route4sub2Component', () => {
  let component: Route4sub2Component;
  let fixture: ComponentFixture<Route4sub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route4sub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Route4sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
