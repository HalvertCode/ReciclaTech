import { TestBed } from '@angular/core/testing';

import { UneteService } from './unete.service';

describe('UneteService', () => {
  let service: UneteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UneteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
