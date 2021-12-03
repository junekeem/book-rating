import { BookFormComponent } from './../book-form/book-form.component';
import { BookStoreService } from './../shared/book-store.service';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {

  edit: string = 'Edit';

  constructor(
    private bookStoreService: BookStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getNewBookForm(bookForm: FormGroup){
    this.createBook(bookForm);
  }

  private createBook(bookForm: FormGroup) {

    const book: Book = bookForm.value;
    this.bookStoreService.create(book).subscribe(book => {
      // Option 1
      this.router.navigate(['/books', book.isbn]); // [routerLink] = ['/books', book.isbn]
      // Option 2
      // this.router.navigateByUrl('/books'); // routerLink = "/books"
    });
  }
}
