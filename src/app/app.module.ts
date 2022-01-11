import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CAngularGoogleChartsComponent } from './c-angular-google-charts/c-angular-google-charts.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CJsGoogleChartsComponent } from './c-js-google-charts/c-js-google-charts.component';
import { GoogleComboChartService } from './services/google-combo-chart.service';
import { CMaterialTreeComponent } from './c-material-tree/c-material-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    CAngularGoogleChartsComponent,
    CJsGoogleChartsComponent,
    CMaterialTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [
    GoogleComboChartService
  ],
  bootstrap: [CJsGoogleChartsComponent]
})
export class AppModule { }
