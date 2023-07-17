import { TestBed } from '@angular/core/testing';

import { LcsService } from './lcs.service';

describe('LcsService', () => {
  let service: LcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
