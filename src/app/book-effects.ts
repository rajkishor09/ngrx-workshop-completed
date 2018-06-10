import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as SearchActions from './search-actions';
import { GoogleBooksService } from './google-books.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class BookEffects {
  @Effect() searchSuccess$: Observable<Action> = this.actions$.ofType(SearchActions.SearchActionTypes.Search)
    .pipe(
      map((action: SearchActions.Search) => action.payload)
      , switchMap(terms => this.bookService.searchBooks(terms))
      , map(results => new SearchActions.SearchSuccess(results))
    );

  constructor(
    private actions$: Actions,
    private bookService: GoogleBooksService
  ) { }
}
