import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@Angular/common/http';
import { Observable, of } from 'rxjs';
import { BookHire, BookHireAttributes } from '../rental-tracking/book-hire';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookRentService {
  private apiURL: string = "http://localhost:8080/library/api/book_hires";
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
  getBookRent(url: string): Observable<BookHire> {
    return this.httpClient.get<BookHireAttributes>(url)
      .pipe(map(a => new BookHire(a)),
        catchError(this.handleError<BookHire>("getBookRent", null)));
  }
}
