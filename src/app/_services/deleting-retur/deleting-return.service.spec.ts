import { TestBed } from '@angular/core/testing';

import { DeletingReturnService } from './deleting-return.service';

describe('DeletingReturnService', () => {
  let service: DeletingReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletingReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
