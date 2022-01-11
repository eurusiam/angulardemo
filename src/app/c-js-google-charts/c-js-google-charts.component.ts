
import { Component, Input, OnInit } from '@angular/core';

import { GoogleComboChartService } from './../services/google-combo-chart.service';
import { ComboChartConfig } from './../Models/combo-chart-config';

declare var google: any;

@Component({
  selector: 'app-c-js-google-charts',
  templateUrl: './c-js-google-charts.component.html',
  styleUrls: ['./c-js-google-charts.component.scss']
})
export class CJsGoogleChartsComponent implements OnInit {

  public charts: {}[] = [];

  config: ComboChartConfig = new ComboChartConfig('', '', []);
  elementId!: string;
  title!: string;
  data!: any[];

  constructor(private _pieChartService: GoogleComboChartService) {}

  ngOnInit(): void {

    this.elementId = 'chart_div';
    this.title = 'Monthly Coffee Production by Country';
    this.data = [
      ['Month', 'A001', 'A002', 'A003', 'A004', 'A005', 'A006', 'A007', 'A008', 'A009', 'A010', 'A011', 'A012', 'A013', 'A014', 'A015', 'A016', 'A017', 'A018', 'A019', 'A020', 'A021', 'A022', 'A023', 'A024', 'A025', 'A026', 'A027', 'A028', 'A029', 'A030', 'A031', 'A032', 'A033', 'A034', 'A035', 'A036', 'A037', 'A038', 'A039', 'A040', 'A041', 'A042', 'A043', 'A044', 'A045', 'A046', 'A047', 'A048', 'A049', 'A050'],
      ['2001/01',  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500],
      ['2001/02',  12, 22, 32, 42, 52, 62, 72, 82, 92, 122, 112, 122, 132, 142, 152, 162, 172, 182, 192, 222, 212, 222, 232, 242, 252, 262, 272, 282, 292, 322, 312, 322, 332, 342, 352, 362, 372, 382, 392, 422, 412, 422, 432, 442, 452, 462, 472, 482, 492, 522],
      ['2001/03',  15, 25, 35, 45, 55, 65, 75, 85, 95, 155, 115, 125, 135, 145, 155, 165, 175, 185, 195, 255, 215, 225, 235, 245, 255, 265, 275, 285, 295, 355, 315, 325, 335, 345, 355, 365, 375, 385, 395, 455, 415, 425, 435, 445, 455, 465, 475, 485, 495, 555],
      ['2001/04',  19, 29, 39, 49, 59, 69, 79, 89, 99, 199, 119, 129, 139, 149, 159, 169, 179, 189, 199, 299, 219, 229, 239, 249, 259, 269, 279, 289, 299, 399, 319, 329, 339, 349, 359, 369, 379, 389, 399, 499, 419, 429, 439, 449, 459, 469, 479, 489, 499, 599],
    ]
    this.config = new ComboChartConfig(this.elementId, this.title, this.data);

    this._pieChartService.BuildComboChart(this.config);
  }
}

