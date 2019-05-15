import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../book';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {

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

}
