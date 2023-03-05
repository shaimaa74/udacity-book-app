import BookItem from "./Book-Item";
import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { BookItemModel } from '../../Models/Book-Model';
import { Provider } from 'react-redux';
import store from '../../Store/store';

let container: any = null;
let minProps: BookItemModel;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  minProps = {
    id: 'id',
    title: 'book title',
    authors: ['Alex Morgen', 'Mark Alen'],
    imageLinks: {
        "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    shelf: 'read',
  }
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('render BookItem component', () => {
    render(<Provider store={store}><BookItem authors={minProps.authors} id={minProps.id} title={minProps.title} imageLinks={minProps.imageLinks} shelf={minProps.shelf} /></Provider>)
});

test("renders BookItem component with currently reading option", () => {
    render(<Provider store={store}><BookItem authors={minProps.authors} id={minProps.id} title={minProps.title} imageLinks={minProps.imageLinks} shelf={minProps.shelf} /></Provider>)
    const currentlyReadingText = screen.getByText(/Currently Reading/i);
    expect(currentlyReadingText).toBeInTheDocument();
});

test("renders BookItem component with want to read option", () => {
    render(<Provider store={store}><BookItem authors={minProps.authors} id={minProps.id} title={minProps.title} imageLinks={minProps.imageLinks} shelf={minProps.shelf} /></Provider>)
    const wantReadText = screen.getByText(/Want to Read/i);
    expect(wantReadText).toBeInTheDocument();
});

test("renders BookItem component with title", () => {
    render(<Provider store={store}><BookItem authors={minProps.authors} id={minProps.id} title={minProps.title} imageLinks={minProps.imageLinks} shelf={minProps.shelf} /></Provider>)
    const title = screen.getByText(/book title/i);
    expect(title).toBeInTheDocument();
});

test("renders BookItem component with authors", () => {
    render(<Provider store={store}><BookItem authors={minProps.authors} id={minProps.id} title={minProps.title} imageLinks={minProps.imageLinks} shelf={minProps.shelf} /></Provider>)
    const auters = screen.getByText(/Alex Morgen, Mark Alen/i);
    expect(auters).toBeInTheDocument();
});

test('should test onChange behavior', async () => {
    render(<Provider store={store}><BookItem authors={minProps.authors} id={minProps.id} title={minProps.title} imageLinks={minProps.imageLinks} shelf={minProps.shelf} /></Provider>)

    const select: HTMLSelectElement = screen.getByRole('select');
    fireEvent.change(select, { target: { value: 'currentlyReading' } });

    await screen.findByText("Currently Reading");
    expect(screen.getByText("Currently Reading")).toBeTruthy();
});