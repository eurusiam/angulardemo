import { TestBed } from '@angular/core/testing';

import { GoogleComboChartService } from './google-combo-chart.service';

describe('GoogleComboChartService', () => {
  let service: GoogleComboChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleComboChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
