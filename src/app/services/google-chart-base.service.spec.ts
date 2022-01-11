import { TestBed } from '@angular/core/testing';

import { GoogleChartsBaseService } from './google-chart-base.service';

describe('GoogleChartsBaseService', () => {
  let service: GoogleChartsBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleChartsBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
