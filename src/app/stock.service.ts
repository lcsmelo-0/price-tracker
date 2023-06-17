import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'https://query2.finance.yahoo.com/v8/finance/chart'

  constructor(private http: HttpClient) {}

  getStockData(symbol: string): Observable<any> {
    const url = `${this.apiUrl}/${symbol}`
    return this.http.get(url)
  }
}
