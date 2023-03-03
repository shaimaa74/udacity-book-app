import { UIActions } from './UI-slice';
import { BooksActions } from './Books-slice';

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getAllBooks = () => {
  return async (dispatch: any) => {
    const getAll = async () => {
      const response = await fetch(`${api}/books`, { headers });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const dataJson = await response.json();
      const data = await dataJson.books;
      
      return data;
    };

    try {
      const allBooks = await getAll();
      dispatch(
        BooksActions.getAllBooks({
          books: allBooks || [],
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showError({
          errorMsg: 'Something went wrong'
        })
      );
    }
  };
};

export const searchForBooks = (query: any) => {
  let errorMessage = 'Something went wrong';
  return async (dispatch: any) => {
    const search = async () => {
      let data: any;
      if(query === ''){
        data = [];
        return data;
      }
      const response = await fetch(`${api}/search`,
        {
          method: "POST",
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const dataJson = await response.json();
      
      if (dataJson.books.error) {
        errorMessage = 'No books matches your search';
        throw new Error(errorMessage);
      }

      data = await dataJson.books;
      
      return data;

    };

    try {
      const searchResult = await search();

      dispatch(
        BooksActions.booksSearch({
          searchBooks: searchResult || [],
        })
      );
    } catch (error) {
        dispatch(
          UIActions.showError({
            errorMsg: errorMessage
          })
        );
    }
  };
};

export const updateBookShelf = (book: any, shelf: any, books: any) => {
  let errorMessage = 'Something went wrong';
  return async (dispatch: any) => {
    const update = async () => {
      const response = await fetch(`${api}/books/${book.id}`,
        {
          method: "PUT",
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ shelf }),
        });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const dataJson = await response.json();
      
      return dataJson;
    };

    try {
      const updateResult = await update();
      book.shelf = shelf;
      let updatedBooks = books.filter((b: any) =>b.id !== book.id)
      updatedBooks.push(book)

      dispatch(
        BooksActions.updateBookShelf({
          books: updatedBooks || books,
        })
      );
    } catch (error) {
        dispatch(
          UIActions.showError({
            errorMsg: errorMessage
          })
        );
    }
  };
};