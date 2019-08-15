import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from 'src/app/core/customer.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private customerService: CustomerService, private location: Location) { }

  ngOnInit() {
  }

  onSubmit(){
    const customer = new Customer({
      name: this.customerForm.value.name,
      lastName: this.customerForm.value.lastName,
      email: this.customerForm.value.email
    });

    this.customerService.postCustomer(customer).subscribe(x=> this.location.back());
  }

  get name(){
    return this.customerForm.get("name");
  }

  get lastName(){
    return this.customerForm.get("lastName");
  }

  get email(){
    return this.customerForm.get("email");
  }
}
