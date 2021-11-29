import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor() {
    this.bookForm = new FormGroup({
      isbn: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      rating: new FormControl(1),
      price: new FormControl(0)
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
