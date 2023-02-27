import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  searchBooks: [],
};
const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getAllBooks(state, action) {
      state.books = action.payload.books;
    },
    booksSearch(state, action) {
      state.searchBooks = action.payload.searchBooks;
    },
    clearSearchList: () => initialState
  },
});

export const BooksActions = BooksSlice.actions;

export default BooksSlice;