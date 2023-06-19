import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  stockId: string = ''

  constructor(private router: Router) {}

  goToStockDetails(): void {
    if (this.stockId) {
      this.router.navigate([this.stockId])
    }
  }
}
