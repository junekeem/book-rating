import { BookFormComponent } from '../shared/components/book-form/book-form.component';
import { BookStoreService } from './../shared/services/book-store.service';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../shared/models/book';
import { Store } from '@ngrx/store';
import { createBook } from '../store/book.actions';
import { createSelectBook } from '../store/book.selectors';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {

  create: string = 'Create';
  book!: Book;

  constructor(
    private bookStoreService: BookStoreService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void { }

  getNewBookForm(bookForm: FormGroup) {
    //    this.createBook(bookForm);
    const book: Book = bookForm.value;
    this.store.dispatch(createBook({data: book}));
  }



  private createBook1(bookForm: FormGroup) {

    const book: Book = bookForm.value;
    this.bookStoreService.create(book).subscribe(book => {
      // Option 1
      this.router.navigate(['/books', book.isbn]); // [routerLink] = ['/books', book.isbn]
      // Option 2
      // this.router.navigateByUrl('/books'); // routerLink = "/books"
    });
  }
}
