import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent},
  { path: 'add_customer', component: AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerTrackingRoutingModule { }
