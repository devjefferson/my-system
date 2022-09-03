import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Heading from '.';

describe('Heading Component', () => {
  it('should render the component', () => {
    render(<Heading>oi</Heading>);
  });
});
