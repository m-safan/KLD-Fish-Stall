import { TestBed, inject } from '@angular/core/testing';

import { SharedModelService } from './shared-model.service';

describe('SharedModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedModelService]
    });
  });

  it('should be created', inject([SharedModelService], (service: SharedModelService) => {
    expect(service).toBeTruthy();
  }));
});
