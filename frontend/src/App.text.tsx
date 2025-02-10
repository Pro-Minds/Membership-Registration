import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/templates/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});

