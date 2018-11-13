import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login', loadChildren: './login/login.module#LoginModule',
    data: {
      title: 'Bartering Online, Barter your items, goods and services - Hatwekhod.net',
      description: 'Bartering online in egypt and venezuela is the most innovative solution to become better at the art of survival.',
      keywords: 'bartering online in egypt, bartering onlinr in venezuela'
    }
  },
  {
    path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard],
    data: {
      title: 'Bartering Online, Barter your items, goods and services - Hatwekhod.net',
      description: 'Bartering online in egypt and venezuela is the most innovative solution to become better at the art of survival.',
      keywords: 'bartering online in egypt, bartering onlinr in venezuela'
    }
  },
  {
    path: 'barter-system-egypt', loadChildren: './barter-system-egypt/barter-system-egypt.module#BarterSystemEgyptModule',
    data: {
      title: 'Barter System in Egypt - Best Places to Trade Stuff Online',
      description: 'Barter system in egypt is back to improve your life and make it better than before. Visit the hatwekhod.net community for amazing bartering experience and more.',
      keywords: 'barter system in egypt,  bartering system in egypt, barter service in egypt'
    }
  },
  // { path: 'barter-trade-venezuela', loadChildren: './barter-trade-venezuela/barter-trade-venezuela.module#BarterTradeVenezuelaModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
