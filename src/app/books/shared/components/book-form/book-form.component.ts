import { Book } from '../../models/book';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  @Output() newBookForm = new EventEmitter<FormGroup>();

  @Input() buttonText = 'Button';
  @Input() book?: Book;

  bookForm!: FormGroup;

  constructor() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      rating: new FormControl(5, [Validators.min(1), Validators.max(5)]),
      price: new FormControl(0, [Validators.min(0), Validators.max(999)]),
    });
  }

  ngOnInit(): void {
    if (this.book) this.setBookFormValue(this.book);
  }

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

  onSubmit() {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }
    this.newBookForm.emit(this.bookForm);
  }

  setBookFormValue(book: Book) {
    this.bookForm.setValue({
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      rating: book.rating,
      price: book.price,
    });
  }
}