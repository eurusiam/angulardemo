import { Injectable } from '@angular/core';
import { ComboChartConfig } from './../Models/combo-chart-config';
import { GoogleChartsBaseService } from './google-chart-base.service';

declare var google: any;

@Injectable()

export class GoogleComboChartService extends GoogleChartsBaseService {

  constructor() {
    super();
   }

  public BuildComboChart(config: ComboChartConfig) : void {


    const chartFunc= () => { return new google.visualization.ComboChart(document.getElementById(config.elementId)) };

    const options = {
      title : config.title,
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      // seriesType: 'bars',
      series: {5: {type: 'line'}},
      tooltip: {isHtml: true},
      focusTarget: 'category', // Focus on a grouping of all data points along the major axis. Correlates to a row in the data table.
    };

    this.buildChart(config.data, chartFunc, options);
  }
}
