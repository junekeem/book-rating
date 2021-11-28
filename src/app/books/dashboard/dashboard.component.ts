import { Rating } from './../shared/rating';
import { DialogService } from './../shared/dialog.service';
import { BookStoreService } from './../shared/book-store.service';
import { BookRatingService } from './../shared/book-rating.service';
import { Book } from '../shared/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // books?: Book[];
  // books : Book[] | undefined;
  books: Book[] = [];

  // rs = new BookRatingService(); // Don't do this; Dependancy Injection, Inversion of Control(IoC)

  constructor(
    private rs: BookRatingService, // by writing access modifier, no need to define property again (Day 1),
    private bookStoreService: BookStoreService,
    private dialogService: DialogService
  ) {
    this.getList();
  }

  ngOnInit(): void {
    // LifeCycle Hook; Handle when the component starts
  }

  trackBook(index: number, item: Book) {
    return index;
  }

  onRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateRating(ratedBook);
  }

  onRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateRating(ratedBook);
  }

  onDeleteConfirmDialog(book: Book) {
    this.dialogService.confirm("Do you really want to delete?").subscribe(
      result => {
        if(result) {
          this.delete(book.isbn);        }
      }
    )
  }

  reset() {
    this.bookStoreService.reset().subscribe(response => {
      if(response) this.getList();
    })
  }

  private delete(isbn: string) {
    this.bookStoreService.delete(isbn).subscribe((response) => {
      if(response) this.getList();
    });
  }

  private updateRating(book: Book) {
    const { isbn, rating } = book
    const newRating: Rating = { rating: rating };
    this.bookStoreService.updateRating(isbn, newRating).subscribe(
      response => {
        if(response) this.getList();
    })
  }

  private getList() {
    this.bookStoreService.getAll().subscribe((books) => {
      this.books = books;
    });
  }
}
