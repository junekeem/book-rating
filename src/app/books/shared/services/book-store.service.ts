import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  // private apiUrl = 'https://api.angular.schule';
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books');
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + `/books/${isbn}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl + '/books', book);
  }

  update(isbn:string, book: Book): Observable<Book> {
    return this.http.put<Book>(this.apiUrl + `/books/${isbn}`, book);
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + `/books/search/${term}`);
  }

  reset(): Observable<unknown> {
    return this.http.delete(this.apiUrl + '/books');
  }

  delete(isbn: string): Observable<unknown> {
    return this.http.delete(this.apiUrl + `/books/${isbn}`);
  }

  updateRating(isbn: string, rate: number): Observable<any> {
    const newRating = { rating: rate };
    return this.http.post<{ rating: number }>(this.apiUrl + `/books/${isbn}/rate`, newRating);
  }
}
