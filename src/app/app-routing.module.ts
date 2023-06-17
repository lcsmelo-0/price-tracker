import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { StockDetailsComponent } from './stock-details/stock-details.component'

const routes: Routes = [{ path: ':symbol', component: StockDetailsComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
