import { TestBed, inject } from '@angular/core/testing';

import { FlyInService } from './fly-in.service';

describe('FlyInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlyInService]
    });
  });

  it('should be created', inject([FlyInService], (service: FlyInService) => {
    expect(service).toBeTruthy();
  }));
});
