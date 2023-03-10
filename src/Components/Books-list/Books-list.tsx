import { Link } from 'react-router-dom';
import { BooksModel } from '../../Models/Book-Model';
import Shelf from '../Shelf/Shelf';

const BooksList = (props: BooksModel) => {
  return (
    <div className="list-books" data-testid="books-list">
        <div className="list-books-title">
        <h1>MyReads</h1>
        </div>
        <div className="list-books-content" data-testid="shelf">
        <div>
            <Shelf books={props.books}></Shelf>
        </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>
  );
}

export default BooksList;
