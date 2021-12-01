import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {

  book?: Book;
  isbn?: string;

  constructor(
    private route: ActivatedRoute,
    private bookStoreService: BookStoreService
  ) {
    // Synchroner Weg (PULL)
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    //Asynchroner Weg (PUSH)
    // this.route.paramMap.subscribe((params) => { // TODO: Callback hell ✔
    //   this.isbn = params.get('isbn')!; // Non-null assertion operator: !
    //   console.log(this.isbn);

    //   this.getSingleBook(this.isbn);
    // });

    this.route.paramMap

    params.get('isbn')!
    this.bs.getSingle(isbn)

    .subscribe(book => {
      this.book = book;
    });
  }

  getSingleBook(isbn: string){
    this.bookStoreService.getSingle(isbn).subscribe(
      book => this.book = book
    )
  }

  ngOnInit(): void {}
}
