import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ChartType } from '../types/chart-type';
import { CAngularGoogleChartsComponent } from './c-angular-google-charts.component';

describe('CAngularGoogleChartsComponent', () => {
  let component: CAngularGoogleChartsComponent;
  let fixture: ComponentFixture<CAngularGoogleChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAngularGoogleChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CAngularGoogleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('ngOnInit', () => {
  //   it('should create the chart', () => {
  //     const chartType = ChartType.BarChart;
  //   });
  // });


});
