import { TestBed, inject } from '@angular/core/testing';

import { TruncateStringService } from './truncate-string.service';

describe('TruncateStringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TruncateStringService]
    });
  });

  it('should be created', inject([TruncateStringService], (service: TruncateStringService) => {
    expect(service).toBeTruthy();
  }));
});
