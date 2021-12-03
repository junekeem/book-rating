import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {

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
}
