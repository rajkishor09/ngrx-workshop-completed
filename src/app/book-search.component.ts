import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-book-search',
  template: `
    <mat-card>
      <mat-card-title>Find a Book</mat-card-title>
      <mat-card-content>
       <mat-form-field class="example-full-width">
          <input matInput placeholder="Search for a book" [formControl]="searchTerms">
        </mat-form-field>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }
    input {
      width: 300px;
    }
  `]
})
export class BookSearchComponent implements OnInit {
  searchTerms: FormControl = new FormControl();

  @Input() set value(val: string) {
    this.searchTerms.setValue(val, { onlySelf: true, emitEvent: false });
  }

  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.searchTerms
      .valueChanges
      .pipe(
        filter(terms => terms !== '' && terms !== this.value)
        , debounceTime(500)
      )
      .subscribe(this.search);
  }
}
