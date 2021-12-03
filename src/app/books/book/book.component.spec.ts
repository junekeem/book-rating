import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/models/book';

import { BookComponent } from './book.component';

/*
** Component: Is method called, event triggered, event payload?
*/
describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent] // You can declare more components here but then it can be Integration test
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 10
    }

    fixture.detectChanges(); // change detection is done here manually in the test

    // DOM: fixture.nativeElement.querySelector('button');
    // You can use a DOM Element, but then be careful if it becomes UI-Test, not the unit test!
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(1) should emit event for onRateUp()', () => {
    // Arrange
    let emittedBook: Book | undefined;

    component.rateUp.subscribe(book => { // in subscribe you can use callback function
      emittedBook = book;
    });

    // Act
    component.onRateUp();

    // Assert: use just one of them
    expect(emittedBook).toBeTruthy(); // Variant 1; Falsy: null, undefined, 0, '', NaN, false
    expect(emittedBook).toBeDefined(); // Variant 2
    expect(emittedBook).not.toBeUndefined(); // Variant 3

    expect(emittedBook).toBe(component.book);
  });

  it('(2) should emit event for onRateUp()', (done) => { // Not recommended to do test in this way
    // Arrange
    let emittedBook: Book | undefined;

    component.rateUp.subscribe(book => {
      expect(book).toBe(component.book!);
      done(); // Caution: delay the test, when the callback is not executed, timeout with 5 secs
    });

    // Act
    component.onRateUp();
  });
});
