import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { Customer } from '../customer';
import { DataSharingService } from 'src/app/core/data-sharing.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  
  constructor(private customerService: CustomerService, private dataShare: DataSharingService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(a => this.customers = a);
  }

  sendLink(customer: Customer){
    this.dataShare.link = customer.links[0];
  }
}
