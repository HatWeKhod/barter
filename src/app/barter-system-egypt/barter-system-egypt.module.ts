import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarterSystemEgyptRoutingModule } from './barter-system-egypt-routing.module';
import { BarterSystemEgyptComponent } from './barter-system-egypt.component';

@NgModule({
  imports: [
    CommonModule,
    BarterSystemEgyptRoutingModule
  ],
  declarations: [BarterSystemEgyptComponent]
})
export class BarterSystemEgyptModule { }
