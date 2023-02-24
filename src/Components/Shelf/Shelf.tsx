import React from 'react';
import { BooksModel } from '../../Models/Book-Model';
import BookItem from '../Book-Item/Book-Item';

const Shelf = (props: BooksModel) => {
    const shelves = [
        {type: 'currentlyReading', title: 'Currently Reading'},
        {type: 'wantToRead', title: 'Want to Read'},
        {type: 'read', title: 'Read'}
    ];
    
  return (
    <>{shelves.map((shelf) => {
        const books =props.books.filter( (book) => book.shelf === shelf.type);
        return(
            <div className="bookshelf" key={shelf.title}>
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books" key={shelf.title}>
                    <ol className="books-grid">
                        {books.map((book) => (
                            <BookItem key={book.id} authors={book.authors} id={book.id} title={book.title} imageLinks={book.imageLinks} shelf={book.shelf}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    })}
    </>
  );
}

export default Shelf;
