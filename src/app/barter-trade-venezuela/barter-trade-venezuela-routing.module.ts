import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarterTradeVenezuelaComponent } from './barter-trade-venezuela.component';

const routes: Routes = [
  { path: '', component: BarterTradeVenezuelaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarterTradeVenezuelaRoutingModule { }
