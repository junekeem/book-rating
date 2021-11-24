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

}
