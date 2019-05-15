import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookData: BookDataService) {
    this.bookData.getBooks().subscribe(books => this.books = books);
  }

  ngOnInit() {
  }

}
