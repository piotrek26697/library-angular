import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@Angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Book, BookAttributes } from '../book-tracking/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiURL: string = "http://localhost:8080/library/api/books";
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
  getBook(url: string): Observable<Book> {
    return this.httpClient.get<BookAttributes>(url)
      .pipe(map(a => new Book(a)),
        catchError(this.handleError<Book>("getBookRent", null)));
  }
}
