import { BookRatingService } from './../shared/book-rating.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const ratingMock: BookRatingService = {
      rateUp: (book: Book) => book,
      rateDown: (book: Book) => book
    };

    // In case of several methods in your service and if you don't need to mock all:
    // 1. Use Partial; 2. Use library: ts-mockito
    const partialRatingMock: Partial<BookRatingService> = {
      rateUp: (book: Book) => book
      // rateDown: (book: Book) => book
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA], // Shallow Component Test: all child components are ignored
      providers: [
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp() for onRateUp()', () => {
    // Arrange
    // component.rs: dont use like this! you cannot access if it is private
    const rs = TestBed.inject(BookRatingService);
    const book = { isbn: '123' } as Book; // TypeAssertion: use only in the test!

    // Act
    // spyOn(rs, 'rateUp'); // spy covers 'rateUp' and  deals all requests/responses
    spyOn(rs, 'rateUp').and.callThrough();
    component.onRateUp(book);

    // Assert: use just one of them
    expect(rs.rateUp).toHaveBeenCalled();
    expect(rs.rateUp).toHaveBeenCalledTimes(1);
    expect(rs.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
