import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];

  private subscription: Subscription;

  constructor(private bookData: BookDataService) {}

  ngOnInit() {
    this.subscription = this.bookData.getBooks().subscribe(books => this.books = books);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
