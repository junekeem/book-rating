import { Book } from './../shared/book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book?: Book

  constructor() { }

  ngOnInit(): void {
  }

  printStars(num: number): string{
    const star = '⭐️';
    return num > 0 ? star.repeat(num): "No rating exists!"
  }

  trackBook(index: number, item: Book) {
    return index;
  }

}
