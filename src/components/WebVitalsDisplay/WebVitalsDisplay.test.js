import { render, screen, act } from '@testing-library/react';
import WebVitalsDisplay from './index';

test('renders WebVitalsDisplay and shows no data initially', () => {
  render(<WebVitalsDisplay />);
  expect(screen.getByRole('heading', { name: /Web Vitals/i })).toBeInTheDocument();
  expect(screen.getByText(/No web vitals data yet./i)).toBeInTheDocument();
});

test('displays web vital metrics when custom event is dispatched', () => {
  render(<WebVitalsDisplay />);

  const mockMetric = {
    name: 'FCP',
    value: 123.45,
    id: 'fcp-123',
    delta: 123.45,
    entries: [],
    navigationType: 'navigate',
    rating: 'good',
  };

  act(() => {
    const event = new CustomEvent('webVitalsMetric', { detail: mockMetric });
    window.dispatchEvent(event);
  });

  expect(screen.getByText(/FCP: 123.45/i)).toBeInTheDocument();
  expect(screen.queryByText(/No web vitals data yet./i)).not.toBeInTheDocument();
});
