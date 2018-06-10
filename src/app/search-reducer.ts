import * as SearchActions from './search-actions';
import { Book } from './book-model';

export interface BookState {
  searchTerms: string;
  results: Book[];
};

const initialState: BookState = {
  searchTerms: '',
  results: []
};

export function reducer(state = initialState, action: SearchActions.All): BookState {
  switch (action.type) {
    case SearchActions.SearchActionTypes.Search: {
      return {
        ...state,
        searchTerms: action.payload
      };
    }
    case SearchActions.SearchActionTypes.SearchSuccess: {
      return {
        ...state,
        results: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
