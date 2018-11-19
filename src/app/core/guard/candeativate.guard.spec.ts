import { TestBed, async, inject } from '@angular/core/testing';

import { CandeativateGuard } from './candeativate.guard';

describe('CandeativateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandeativateGuard]
    });
  });

  it('should ...', inject([CandeativateGuard], (guard: CandeativateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
