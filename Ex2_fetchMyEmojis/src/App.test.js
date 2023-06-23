import { render, screen } from '@testing-library/react';
import { App } from './App';

it('renders simple webpage with greeting', () => {
  render(<App />);
  expect(screen.getByText(/Hi there/i)).toBeInTheDocument();
});
