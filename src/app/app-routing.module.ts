import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { StockDetailsComponent } from './stock-details/stock-details.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':symbol', component: StockDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
