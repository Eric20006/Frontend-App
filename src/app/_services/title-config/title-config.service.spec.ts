import { TestBed } from '@angular/core/testing';

import { TitleConfigService } from './title-config.service';

describe('TitleConfigService', () => {
  let service: TitleConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
