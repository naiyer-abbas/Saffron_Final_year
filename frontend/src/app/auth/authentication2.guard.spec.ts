import { TestBed } from '@angular/core/testing';

import { Authentication2Guard } from './authentication2.guard';

describe('Authentication2Guard', () => {
  let guard: Authentication2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Authentication2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
