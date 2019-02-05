import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BulkComponent} from './bulk.component';

const routes: Routes = [
  {
    path: '',
    component: BulkComponent,
    data: {
      title: 'Bulk',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkRoutingModule { }
