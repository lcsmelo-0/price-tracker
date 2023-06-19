import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StockDetailsComponent } from './stock-details/stock-details.component'
import { PriceVariationChartComponent } from './price-variation-chart/price-variation-chart.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [AppComponent, StockDetailsComponent, PriceVariationChartComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatTableModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
