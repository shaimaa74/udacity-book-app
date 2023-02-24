import { configureStore } from '@reduxjs/toolkit';

import UISlice from './UI-slice'
import BooksSlice from './Books-slice';

const store = configureStore({
  reducer: { ui: UISlice.reducer, books: BooksSlice.reducer },
});

export default store;