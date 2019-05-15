import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private bookData: BookDataService) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      abstract: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  save() {
    this.bookData.createBook(this.form.value).subscribe(console.log);
  }

}
