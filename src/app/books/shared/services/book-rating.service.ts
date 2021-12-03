import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateUp(book: Book): Book {
    // book.rating++; // Not recommended: This doesn't change the reference value, but directly change the values, violated to immutability
    // How to copy then the object?: Instead of 'object.assign', use 'object spread'; object spread is shallow copy
    return { ...book, rating: book.rating < 5? book.rating + 1 : 5 }; // Ternary operator
  }

  rateDown(book: Book): Book {
    // book.rating--; // Not recommended: This doesn't change the reference value, but directly change the data, violated to immutability
    return { ...book, rating: Math.max(book.rating - 1, 1) };
  }
}
