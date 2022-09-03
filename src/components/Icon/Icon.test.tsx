import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Icon from '.';

describe('Icon Component', () => {
  it('should render the component', () => {
    render(<Icon name="arrowUp" />);
  });
});
