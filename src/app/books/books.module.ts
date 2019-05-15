import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent, BookEditComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BookDataService
  ],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule { }
