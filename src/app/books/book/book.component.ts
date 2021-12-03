import { Book } from '../shared/models/book';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<Book>();

  @Input() book?: Book;
  @Input() maxRating = 5;
  @Input() minRating = 1;

  constructor() {}

  ngOnInit(): void {}

  printStars(num: number): string {
    const star = '⭐️';
    return num > 0 ? star.repeat(num) : 'No rating exists!';
  }

  onRateUp() {
    this.rateUp.emit(this.book);
  }

  onRateDown() {
    this.rateDown.emit(this.book);
  }

  onDelete() {
    this.delete.emit(this.book);
  }

  trackBook(index: number, item: Book) {
    return index;
  }
}
