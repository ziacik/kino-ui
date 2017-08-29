import { TestBed, inject } from '@angular/core/testing';

import { TpbService } from './tpb.service';

describe('TpbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TpbService]
    });
  });

  it('should be created', inject([TpbService], (service: TpbService) => {
    expect(service).toBeTruthy();
  }));
});
