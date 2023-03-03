import Card from "./Card";
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";

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

test('render card component', () => {
    const {getByTestId} = render(<Card />);
    const card = getByTestId('card');
    expect(card).toBeDefined();
});

test('render properties', () => {
    const { container } = render(<Card className='center'/>);
    expect(container.firstChild).toHaveClass('center')
});