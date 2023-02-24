import React from 'react';
import { useSelector } from 'react-redux';
import { BookItemModel, BooksModel } from '../../Models/Book-Model';
import BookItem from '../Book-Item/Book-Item';

const BooksList = (props: BooksModel) => {
    // const books = useSelector((state) => );
  return (
    <div className="list-books">
        <div className="list-books-title">
        <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {props.books.map((book) => (
                    <li key={book.id}>
                        <BookItem authors={book.authors} id={book.id} title={book.title} imageLinks={book.imageLinks} ></BookItem>
                    </li>
                ))}
                </ol>
            </div>
            </div>
        </div>
        </div>
        <div className="open-search">
        <a>Add a book</a>
        </div>
    </div>
  );
}

export default BooksList;
