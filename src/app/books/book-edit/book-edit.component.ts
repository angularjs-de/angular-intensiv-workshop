import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {

  book: Book;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.subscription = this.route.params.pipe(
      switchMap((params: { isbn: string }) => this.bookData.getBookByIsbn(params.isbn))
    ).subscribe(book => this.book = book);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  save(values: Partial<Book>) {
    this.bookData.updateBook(this.book.isbn, values)
      .subscribe(updatedBook => this.book = updatedBook);
  }
}
