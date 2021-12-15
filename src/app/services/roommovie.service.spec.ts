import { TestBed } from '@angular/core/testing';

import { RoommovieService } from './roommovie.service';

describe('RoommovieService', () => {
  let service: RoommovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoommovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
