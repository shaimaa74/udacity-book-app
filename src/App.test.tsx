import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './Store/store';

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('render app component', () => {
    render(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>)
});

test("renders home component in App.js", () => {
  render(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>);
  const textInHome = screen.getByText(/MyReads/i);
  expect(textInHome).toBeInTheDocument();
});

test("renders search component in App.js", () => {
  render(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>);
  const textInSearch = screen.getByText(/Add a book/i);
  expect(textInSearch).toBeInTheDocument();
});

