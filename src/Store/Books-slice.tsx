import { createSlice } from '@reduxjs/toolkit';

const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    getAllBooks(state, action) {
      state.books = action.payload.books;
    },
  },
});

export const BooksActions = BooksSlice.actions;

export default BooksSlice;