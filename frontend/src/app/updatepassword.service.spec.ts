import { TestBed } from '@angular/core/testing';

import { UpdatepasswordService } from './updatepassword.service';

describe('UpdatepasswordService', () => {
  let service: UpdatepasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatepasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
