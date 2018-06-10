import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-results-count',
  template: `
    <mat-card>
      <mat-card-title> Search Results: {{ count | async }} </mat-card-title>
      </mat-card>
  `,
  styles: []
})
export class ResultsCountComponent implements OnInit {
  count: Observable<number>;
  constructor(private store: Store<fromRoot.State>) {
    this.count = store.select(fromRoot.selectCount);
  }

  ngOnInit() {
  }

}
