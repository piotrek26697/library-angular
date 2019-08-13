import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@Angular/common/http';
import { Observable, of } from 'rxjs';
import { Customer, CustomerAttributes } from '../customer-tracking/customer';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiURL: string = "localhost:8080/library/api/customers";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  handleError<T>(operation = 'operation', result?: T) {
    return (error): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<CustomerAttributes[]>(this.apiURL)
      .pipe(map(a => a.map(a => new Customer(a))),
        catchError(this.handleError<Customer[]>("getCustomers", new Array())));
  }
  getCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<CustomerAttributes>(this.apiURL + `/${id}`)
      .pipe(map(a => new Customer(a)),
        catchError(this.handleError<Customer>("getAnimal", null)));
  }
  postCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post(this.apiURL, customer, this.httpOptions)
  }
}
