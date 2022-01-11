import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CJsGoogleChartsComponent } from './c-js-google-charts.component';

describe('CJsGoogleChartsComponent', () => {
  let component: CJsGoogleChartsComponent;
  let fixture: ComponentFixture<CJsGoogleChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CJsGoogleChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CJsGoogleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
