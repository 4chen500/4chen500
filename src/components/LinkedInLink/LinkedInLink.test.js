import { render, screen } from '@testing-library/react';
import LinkedInLink from './';

const href = "https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2F4chen500%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3d7A5i0t3JDI7XH0zVoWmq";

test('renders LinkedIn link with correct attributes', () => {
  render(<LinkedInLink href={href} />);
  const linkElement = screen.getByRole('link', { name: /linkedin/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', href);
  expect(linkElement).toHaveAttribute('target', '_blank');
  expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');

  const imageElement = screen.getByAltText(/linkedin/i);
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'https://ssl.gstatic.com/atari/images/sociallinks/linkedin_white_44dp.png');
});
