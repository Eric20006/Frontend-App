import { TestBed } from '@angular/core/testing';

import { RootTestService } from './root-test.service';

describe('RootTestService', () => {
  let service: RootTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
