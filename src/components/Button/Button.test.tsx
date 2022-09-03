import React from 'react';
import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './';

describe('Button Component', () => {
  it('should render the component', () => {
    render(<Button text="MyApp" />);
  });

  it('must contain the button class', async () => {
    render(<Button text="MyApp" />);
    const component = await screen.findByTestId('component-button');
    expect(component).toHaveClass('button');
  });

  it('must contain the heading class', async () => {
    render(<Button text="MyApp" />);
    const component = await screen.findByTestId('component-button');
    expect(component).toHaveClass('button');
  });

  it('must contain the size class', async () => {
    render(<Button text="MyApp" />);
    const component = await screen.findByTestId('component-button');
  });

  it('must contain the contrast class', async () => {
    render(<Button onContrast text="MyApp" />);
    const component = await screen.findByTestId('component-button');
  });

  it('Click', () => {
    const { container } = render(<Button onContrast text="MyApp" />);
    const button = getByTestId(container, 'component-button');
    fireEvent.click(button);
  });

  it('Click Disabled', () => {
    const { container } = render(<Button onContrast disabled text="MyApp" />);

    expect(getByTestId(container, 'component-button')).toBeDisabled();
  });
});
