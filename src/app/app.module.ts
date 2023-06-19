import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StockDetailsComponent } from './stock-details/stock-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PriceVariationChartComponent } from './price-variation-chart/price-variation-chart.component'

@NgModule({
  declarations: [AppComponent, StockDetailsComponent, PriceVariationChartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
