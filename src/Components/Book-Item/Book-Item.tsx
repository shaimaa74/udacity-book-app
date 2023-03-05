import { BookItemModel } from '../../Models/Book-Model';
import { useSelector, useDispatch } from 'react-redux';
import { updateBookShelf } from '../../Store/Books-actions';

const BookItem = (props: BookItemModel) => {
  const dispatch = useDispatch();
  const books = useSelector((state: any) => state.books.books);

  const authorsView = props.authors?.map(author => author).join(', ');
  const book = {
    id: props.id,
    title: props.title,
    authors: props.authors,
    imageLinks: props.imageLinks,
    shelf: props.shelf
  };

  const onChange = (value: any) => {
    dispatch<any>(updateBookShelf(book, value, books));
  };

  return (
    <div className="book" role='book'>
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks?.thumbnail})` }}>
            </div>
            <div className="book-shelf-changer">
            <select role='select' value={book.shelf ? book.shelf : 'none'} onChange={(e)=>onChange(e.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{authorsView}</div>
    </div>
  );
}

export default BookItem;
