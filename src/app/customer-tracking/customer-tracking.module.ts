import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerTrackingRoutingModule } from './customer-tracking-routing.module';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomerTrackingRoutingModule
  ]
})
export class CustomerTrackingModule { }
