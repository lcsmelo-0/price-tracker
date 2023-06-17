import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { StockService } from '../stock.service'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  stockData: any
  symbol: string = ''
  displayedColumns: string[] = ['day', 'date', 'value', 'variationD1', 'variationFirstDay']
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([])

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
      const timestamps: number[] = this.stockData.chart.result[0].timestamp
      const quotes: number[] = this.stockData.chart.result[0].indicators.quote[0].open
      const filteredData = timestamps
        .map((timestamp: number, index: number) => ({ timestamp, quote: quotes[index] }))
        .filter((data: { timestamp: number; quote: number }) => data.quote !== null && data.quote !== undefined)
        .reverse()
        .slice(0, 30)

      const formattedData = filteredData.map((data: { timestamp: number; quote: number }, index: number) => ({
        day: index + 1,
        date: this.formatDate(data.timestamp * 1000),
        value: data.quote,
        variationD1: '-',
        variationFirstDay: '-',
      }))

      const firstDayValue = formattedData[0].value

      for (let i = 1; i < formattedData.length; i++) {
        const currentData = formattedData[i]
        const previousData = formattedData[i - 1]

        const variationD1 = ((currentData.value - previousData.value) / previousData.value) * 100
        const variationFirstDay = ((currentData.value - firstDayValue) / firstDayValue) * 100

        currentData.variationD1 = variationD1.toFixed(2) + '%'
        currentData.variationFirstDay = variationFirstDay.toFixed(2) + '%'
      }

      this.dataSource.data = formattedData
      console.log(this.stockData)
    })
  }

  calculateVariationD1(element: any): string {
    const currentIndex = this.dataSource.data.indexOf(element)
    if (currentIndex === 0) {
      return '-'
    }

    const previousQuote = this.dataSource.data[currentIndex - 1].quote
    const variation = ((element.quote - previousQuote) / previousQuote) * 100
    return `${variation.toFixed(2)}%`
  }

  calculateVariationFirstDay(element: any): string {
    const firstDayOpen = element.chart.result[0].indicators.quote[0].open[0]
    const currentOpen =
      element.chart.result[0].indicators.quote[0].open[element.chart.result[0].indicators.quote[0].open.length - 1]
    const variation = ((currentOpen - firstDayOpen) / firstDayOpen) * 100
    return `${variation.toFixed(2)}%`
  }

  formatCurrency(value: number): string {
    return `R$ ${value.toFixed(2)}`
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp)
    return date.toLocaleDateString()
  }
}
