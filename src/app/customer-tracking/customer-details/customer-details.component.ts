import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { DataSharingService } from 'src/app/core/data-sharing.service';
import { Link } from 'src/app/shared/link';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  link: Link;

  constructor(private customerService: CustomerService, private dataShare: DataSharingService) { }

  ngOnInit() {
    this.link = this.dataShare.link
    if (this.link)
      this.customerService.getCustomer(this.link.href).subscribe(a => this.customer = a);
  }

}
