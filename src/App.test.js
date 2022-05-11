import { render, screen } from '@testing-library/react';
import App from './App';

test('renders links and text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Learn/i);
  expect(headerElement).toBeInTheDocument();
  const descElement = screen.getByText(/Access to subtitles in a foreign language/i);
  expect(descElement).toBeInTheDocument();
  const installLink = screen.getByText(/Install for free/i);
  expect(installLink).toBeInTheDocument();
  const privacyPolocy = screen.getByText(/Privacy Policy/i);
  expect(privacyPolocy).toBeInTheDocument();

});
