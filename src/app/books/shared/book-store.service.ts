import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private apiUrl = 'https://api.angular.schule';

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

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + `/search/${term}`);
  }

  reset(): Observable<unknown> {
    return this.http.delete(this.apiUrl + '/books');
  }

  delete(isbn: string): Observable<unknown> {
    return this.http.delete(this.apiUrl + `/books/${isbn}`);
  }
}
