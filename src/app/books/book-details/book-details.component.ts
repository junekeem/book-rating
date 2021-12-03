import { BookStoreService } from './../shared/services/book-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/models/book';
import { map, mergeMap, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookStoreService: BookStoreService
  ) {
    // Synchroner Weg (PULL)
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    // Asynchroner Weg (PUSH)
    // Not Recommended:
    // this.route.paramMap.subscribe((params) => {
    //   this.isbn = params.get('isbn')!; // Non-null assertion operator: !
    //   console.log(this.isbn);

    //   this.getSingleBook(this.isbn);
    // });

    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.bookStoreService.getSingle(isbn))
    );

  }

  getSingleBook(isbn: string){
    this.bookStoreService.getSingle(isbn).subscribe()
  }

  ngOnInit(): void {}
}
