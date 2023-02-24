import React from 'react';
import { BooksModel } from '../../Models/Book-Model';
import BookItem from '../Book-Item/Book-Item';

const Shelf = (props: BooksModel) => {
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">

            </ol>
        </div>
    </div>
  );
}

export default Shelf;
