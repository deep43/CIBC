import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkComponent } from './bulk.component';
import {BulkRoutingModule} from './bulk-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    BulkRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
  ],
  declarations: [BulkComponent]
})
export class BulkModule { }
