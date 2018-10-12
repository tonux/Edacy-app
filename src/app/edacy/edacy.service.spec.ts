import { TestBed, inject } from '@angular/core/testing';

import { EdacyService } from './edacy.service';

describe('EdacyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdacyService]
    });
  });

  it('should be created', inject([EdacyService], (service: EdacyService) => {
    expect(service).toBeTruthy();
  }));
});
