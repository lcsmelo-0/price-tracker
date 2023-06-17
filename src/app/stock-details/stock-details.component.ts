import { Component, OnInit } from '@angular/core'
import { StockService } from '../stock.service'

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  stockData: any

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getStockData('PETR4.SA').subscribe(data => {
      this.stockData = data
      console.log(this.stockData)
    })
  }

  calculatePriceVariation(data: any): number {
    const firstDayOpen = data.chart.result[0].indicators.quote[0].open[0]
    const lastDayOpen =
      data.chart.result[0].indicators.quote[0].open[data.chart.result[0].indicators.quote[0].open.length - 1]

    return ((lastDayOpen - firstDayOpen) / firstDayOpen) * 100
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString()
  }
}
