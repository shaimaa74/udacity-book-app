import { BookItemModel } from '../../Models/Book-Model';

const BookItem = (props: BookItemModel) => {
  const authorsView = props.authors.map(author => author).join(', ');
  return (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks?.thumbnail})` }}>
            </div>
            <div className="book-shelf-changer">
            <select>
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
