import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Book } from '../shared/models/book';
import { BookStoreService } from '../shared/services/book-store.service';

@Component({
  selector: 'br-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {

  save: string = 'Save';
  book$: Observable<Book>;
  isbn!: string;

  constructor(
    private bookStoreService: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.book$ = this.route.paramMap.pipe(
      map((params) => params.get('isbn')!),
      map((isbn) => (this.isbn = isbn)),
      switchMap((isbn) => this.bookStoreService.getSingle(isbn))
    );
  }

  ngOnInit(): void {}

  updateBook(bookForm: FormGroup) {
    const book: Book = bookForm.value;
    if(this.isbn != book.isbn){
      return;
    }
    this.bookStoreService.update(this.isbn, book).subscribe(book => {
      this.router.navigate(['/books', book.isbn]);
    });
  }
}
