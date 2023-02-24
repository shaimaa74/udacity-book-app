import { BooksModel } from "./Book-Model";
import { ErrorModel } from "./Error-Model";

export interface RootState {
    books: BooksModel;
    error: ErrorModel;
  }