import { TestBed } from '@angular/core/testing';

import { AsyncInitialValueService } from './async-initial-value.service';

describe('AsyncInitialValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncInitialValueService = TestBed.get(AsyncInitialValueService);
    expect(service).toBeTruthy();
  });
});
