import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.books$ = this.bookData.getBooks();
  }

}
