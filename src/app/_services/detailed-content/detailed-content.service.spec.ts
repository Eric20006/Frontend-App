import { TestBed } from '@angular/core/testing';

import { DetailedContentService } from './detailed-content.service';

describe('DetailedContentService', () => {
  let service: DetailedContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
