// import { BooksModule } from './books/books.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BooksModule,
    HttpClientModule // Import only once in app.module.ts: It's service and service is used globally
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
