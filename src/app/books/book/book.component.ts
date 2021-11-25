import { Book } from '../shared/book';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  @Input() book?: Book

  constructor() { }

  ngOnInit(): void {
  }

  printStars(num: number): string{
    const star = '⭐️';
    return num > 0 ? star.repeat(num): "No rating exists!"
  }

  onRateUp() {
    this.rateUp.emit(this.book);
  }

  onRateDown() {
    this.rateDown.emit(this.book);
  }

  trackBook(index: number, item: Book) {
    return index;
  }

}
