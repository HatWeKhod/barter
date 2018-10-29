import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarterTradeVenezuelaRoutingModule } from './barter-trade-venezuela-routing.module';
import { BarterTradeVenezuelaComponent } from './barter-trade-venezuela.component';

@NgModule({
  imports: [
    CommonModule,
    BarterTradeVenezuelaRoutingModule
  ],
  declarations: [BarterTradeVenezuelaComponent]
})
export class BarterTradeVenezuelaModule { }
