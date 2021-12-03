import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  save : string= "Save";

  constructor() { }

  ngOnInit(): void {
  }

}
