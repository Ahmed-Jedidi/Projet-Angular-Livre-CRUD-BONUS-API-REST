import { TestBed } from '@angular/core/testing';

import { LivreGuard } from './livre.guard';

describe('LivreGuard', () => {
  let guard: LivreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LivreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
