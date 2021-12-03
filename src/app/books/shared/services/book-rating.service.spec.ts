import { TestBed } from '@angular/core/testing';
import { Book } from '../models/book';

import { BookRatingService } from './book-rating.service';

/* Note:
** Testphasen: Arrange(Testvorbereitung) -> Act(Testdurchführung) -> Assert(Prüfung)
** Syntax of Jasmine 'describe' und 'it'; describe: a suite, it: concrete action, include minimum 1 expect
** Assertion: expect(); expect() is combined with Matcher
** beforeEach: it is excuted before each specification
*/
describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    // Arrangephase:
    TestBed.configureTestingModule({ //Testbed is alike small ngModule only for this test
      // declarations: [],
      // imports: []
    });
    service = TestBed.inject(BookRatingService);
    // service = new BookRatingService(); // Alternative of TestBed.inject(BookRatingService);

    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 13.50
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up a book rating by 1', () => {
    // Arrange
    book.rating = 3;

    // Act
    const ratedBook = service.rateUp(book);

    // Assert: Please do not use the same algorithm/business logic, use the result, concrete value: 4!!
    // expect(ratedBook.rating).toBe(book.rating + 1); // (X)
    expect(ratedBook.rating).toBe(4); // (O)
  });

  it('should rate down a book rating by 1', () => {
    book.rating = 3;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not rate higher than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
