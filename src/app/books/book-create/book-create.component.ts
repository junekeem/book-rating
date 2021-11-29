import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      rating: new FormControl(1, [
        Validators.min(1),
        Validators.max(5)
      ]),
      price: new FormControl(0, [
        Validators.min(0),
        Validators.max(999)])
    });
  }

  ngOnInit(): void {
  }

}

/*
  TODO:
  - Validation
  - Notification (Hinweismeldungen)
  - Submit-Button
  - Send (Abschicken)
  - HTTP
  - Redirect to detail-page
*/
