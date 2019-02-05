import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CIBC',
      status: false
    },
    children: [
      {
        path: 'bulk',
        loadChildren: './bulk/bulk.module#BulkModule'
      },
      {
        path: 'trading',
        loadChildren: './trading/trading.module#TradingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
