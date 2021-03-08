import { TestBed } from '@angular/core/testing';

import { Route3Service } from './route3.service';

describe('Route3Service', () => {
  let service: Route3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Route3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
