import { Action } from '@ngrx/store';
import { Book } from './book-model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum SearchActionTypes {
  Search = '[Book] Search',
  SearchSuccess = '[Book] SearchSuccess'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Search implements Action {
  readonly type = SearchActionTypes.Search;

  constructor(public payload: string) { }
}

export class SearchSuccess implements Action {
  readonly type = SearchActionTypes.SearchSuccess;

  constructor(public payload: Book[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type All
            = Search
            | SearchSuccess;
