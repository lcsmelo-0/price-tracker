import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { StockService } from '../stock.service'

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  stockData: any
  symbol: string = ''

  constructor(private route: ActivatedRoute, private stockService: StockService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const symbol = params.get('symbol')
      if (symbol !== null) {
        this.symbol = symbol
        this.getStockData()
      }
    })
  }

  getStockData(): void {
    this.stockService.getStockData(this.symbol).subscribe(data => {
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
