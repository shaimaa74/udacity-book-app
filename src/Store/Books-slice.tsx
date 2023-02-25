import { createSlice } from '@reduxjs/toolkit';

const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    searchBooks: [],
  },
  reducers: {
    getAllBooks(state, action) {
      state.books = action.payload.books;
    },
    booksSearch(state, action) {
      state.searchBooks = action.payload.searchBooks;
    }
  },
});

export const BooksActions = BooksSlice.actions;

export default BooksSlice;