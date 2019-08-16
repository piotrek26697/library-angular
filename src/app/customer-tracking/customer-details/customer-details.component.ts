import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { DataSharingService } from 'src/app/core/data-sharing.service';
import { Link } from 'src/app/shared/link';
import { Customer } from '../customer';
import { BookRentService } from 'src/app/core/book-rent.service';
import { BookHire } from 'src/app/rental-tracking/book-hire';
import { Book } from 'src/app/book-tracking/book';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  customerDetailsLink: Link;
  bookHires: Array<BookHire> = new Array();
  books: Array<Book> = new Array();

  constructor(private customerService: CustomerService, private dataShare: DataSharingService,
    private bookRentService: BookRentService, private bookService: BookService) { }

  ngOnInit() {
    this.customerDetailsLink = this.dataShare.link
    if (this.customerDetailsLink) {
      this.customerService.getCustomer(this.customerDetailsLink.href).subscribe(a => {
        this.customer = a;
        this.getRentingHistory()
      });
    }
  }

  getRentingHistory() {
    for (let link of this.customer.links) {
      if (link.rel === "bookRent") {
        this.bookRentService.getBookRent(link.href).subscribe(a => {
          this.bookHires.push(a);
          this.getBooks(a);
        });
      }
    }
  }

  getBooks(bookHire: BookHire) {
    for (let bookLink of bookHire.links) {
      if (bookLink.rel === "book") {
        this.bookService.getBook(bookLink.href).subscribe(a => {
          this.books.push(a);
          return;
        })
      }
    }
  }
}
