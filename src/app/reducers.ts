import * as formSearch from './search-reducer';

export interface State {
  search: formSearch.BookState;
}

export const reducers = {
  search: formSearch.reducer
}

export function selectResults(state: State) {
  return state.search.results;
}

export function selectCount(state: State) {
  return state.search.results.length;
}

export function selectTerms(state: State) {
  return state.search.searchTerms;
}
