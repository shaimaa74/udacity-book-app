import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchForBooks } from '../../Store/Books-actions';
import Error from '../../UI/Error/Error';
import BookItem from '../Book-Item/Book-Item';
import { BookItemModel } from '../../Models/Book-Model';
import { UIActions } from '../../Store/UI-slice';
import { BooksActions } from '../../Store/Books-slice';

const Search = () => {
  const dispatch = useDispatch();
  let searchBooks = useSelector((state: any) => state.books.searchBooks);
  let error = useSelector((state:any) => state.ui.errorMsg);
  let isValid = true;

  const onChange = (e: any) => {
    dispatch<any>(searchForBooks(e.currentTarget.value));
    isValid = searchBooks.length > 0;
  };

  const clearSearch = () => {
    dispatch<any>(BooksActions.clearSearchList());
    dispatch<any>(UIActions.resetError());
  };

  return (
    <Fragment>
      {(error || !isValid) && (
        <Error errorMsg={error}/>
      )}
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/home" onClick={clearSearch}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" onChange={onChange}/>
          </div>
        </div>
        { !error && isValid && (
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.map((book: BookItemModel) => (
                <BookItem key={book.id} authors={book.authors} id={book.id} title={book.title} imageLinks={book.imageLinks} shelf={book.shelf}/>
            ))}
          </ol>
        </div>
        )}
      </div>
    </Fragment>
  );
}

export default Search;
