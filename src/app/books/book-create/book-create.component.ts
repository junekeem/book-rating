import { BookFormComponent } from './../book-form/book-form.component';
import { BookStoreService } from './../shared/book-store.service';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {

  @ViewChild(BookFormComponent)
  private bookFormComponent!: BookFormComponent;

  bookForm!: FormGroup;

  constructor(
    private bookStoreService: BookStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createBook() {

    if (this.bookFormComponent.bookForm.invalid) {
      this.bookFormComponent.bookForm.markAllAsTouched();
      return;
    }

    // const book: Book = this.bookForm.value;
    this.bookStoreService.create(this.bookFormComponent.bookForm.value).subscribe(book => {
      // Option 1
      this.router.navigate(['/books', book.isbn]); // [routerLink] = ['/books', book.isbn]
      // Option 2
      // this.router.navigateByUrl('/books'); // routerLink = "/books"
    });
  }
}
