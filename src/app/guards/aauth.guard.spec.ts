import { TestBed } from '@angular/core/testing';

import { AauthGuard } from './aauth.guard';

describe('AauthGuard', () => {
  let guard: AauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
