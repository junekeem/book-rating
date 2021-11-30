import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private bookStoreService: BookStoreService,
    private router: Router
  ) {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      rating: new FormControl(1, [Validators.min(1), Validators.max(5)]),
      price: new FormControl(0, [Validators.min(0), Validators.max(999)]),
    });
  }

  ngOnInit(): void {}

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    // Think '!!' as Boolean(control && control.touched && control.invalid)
    return !!control && control.touched && control.invalid;
    // return (control?.touched && control?.invalid) || false;
  }

  hasError(controlName: string, errorCode: string) {
    const control = this.bookForm.get(controlName);
    return !!control && control.touched && control?.hasError(errorCode);
  }

  submitForm() {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    // const book: Book = this.bookForm.value;
    this.bookStoreService.create(this.bookForm.value).subscribe(book => {
      // Option 1
      this.router.navigate(['/books', book.isbn]); // [routerLink] = ['/books', book.isbn]
      // Option 2
      // this.router.navigateByUrl('/books'); // routerLink = "/books"
    });
  }
}

/*
  TODO:
  - Validation ✔
  - Error Messege (Hinweismeldungen) ✔
  - Submit-Button ✔
  - Send (Abschicken) ✔
  - HTTP ✔
  - Redirect to detail-page ✔
*/
