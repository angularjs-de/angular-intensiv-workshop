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
}
