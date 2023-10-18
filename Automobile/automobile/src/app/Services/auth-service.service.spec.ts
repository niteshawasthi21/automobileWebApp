import { TestBed } from '@angular/core/testing';

import { authservice } from '../Services/auth-service.service';

describe('AuthServiceService', () => {
  let service: authservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
