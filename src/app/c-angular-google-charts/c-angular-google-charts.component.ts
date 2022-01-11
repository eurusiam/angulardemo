import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';

@Component({
  selector: 'app-c-angular-google-charts',
  templateUrl: './c-angular-google-charts.component.html',
  styleUrls: ['./c-angular-google-charts.component.scss']
})
export class CAngularGoogleChartsComponent implements OnInit {

  public charts: {
    title: string;
    type: ChartType;
    data: any[][];
    columns?: Column[];
    options: {};
  }[] = [];

  constructor() {
    this.charts.push({
      title: 'Combo Chart',
      type: ChartType.ComboChart,
      columns: ['M', 'BB', 'Ecu', 'Mad', 'PNewG', 'Rwa', 'Aver'],
      data: [
        ['204/05', 165, 938, 522, 998, 450, 614.6],
        ['205/06', 135, 1120, 599, 1268, 288, 682],
        ['2006/7', 157, 1167, 587, 807, 397, 623],
        ['2007/8', 139, 1110, 615, 968, 215, 609.4],
        ['28/09', 136, 691, 629, 1026, 366, 569.6]
      ],
      options: {
        width: 800,
        height: 360,
        title: 'Toppings I Like On My Pizza',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        vAxis: { title: 'Cups' },
        hAxis: { title: 'Month' },
        // seriesType: 'bars',
        // series: { 5: { type: 'line' } },
        is3D: true
      }
    });
   }

  ngOnInit(): void {
  }

}
