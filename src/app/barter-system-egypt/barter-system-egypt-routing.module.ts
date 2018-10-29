import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarterSystemEgyptComponent } from './barter-system-egypt.component';

const routes: Routes = [
  { path: '', component: BarterSystemEgyptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarterSystemEgyptRoutingModule { }
