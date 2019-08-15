import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerTrackingRoutingModule } from './customer-tracking-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    CustomerTrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerTrackingModule { }
