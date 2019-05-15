import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  createBook(book: Partial<Book>): Observable<Book> {
    const newBook: Book = {
      title: 'Default Title',
      subtitle: 'Default Subtitle',
      abstract: 'Default Abstract',
      author: 'Default Author',
      numPages: 123,
      isbn: `${this.randomDigest()}-${this.randomDigest()}-${this.randomDigest()}-${this.randomDigest()}`,
      publisher: {
        name: 'Default Publisher Name',
        url: 'http://default.publisher.com'
      },
      ...book
    };

    return this.http.post<Book>('http://localhost:4730/books', newBook);
  }

  updateBook(isbn: string, book: Partial<Book>): Observable<Book> {
    return this.http.patch<Book>(`http://localhost:4730/books/${isbn}`, book);
  }

  private randomDigest() {
    return Math.floor(Math.random() * 10000);
  }
}
