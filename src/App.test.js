// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EchidnaVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EchidnaVault/i);
    expect(titleElement).toBeInTheDocument();
});
