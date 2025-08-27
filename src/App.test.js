import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LinkedIn link', () => {
  render(<App />);
  const imageElement = screen.getByAltText(/LinkedIn/i);
  expect(imageElement).toBeInTheDocument();
});
