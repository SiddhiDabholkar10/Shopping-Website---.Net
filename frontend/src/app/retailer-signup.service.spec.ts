import { TestBed } from '@angular/core/testing';

import { RetailerSignupService } from './retailer-signup.service';

describe('RetailerSignupService', () => {
  let service: RetailerSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
