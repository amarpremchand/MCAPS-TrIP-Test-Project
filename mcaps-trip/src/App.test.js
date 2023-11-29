import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {

  test('renders Home component for default route', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByTestId('home-component')).toBeInTheDocument();
  });

  test('renders Movie component for /movie/:id route', () => {
    window.history.pushState({}, '', '/movie/123');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByTestId('movie-component')).toBeInTheDocument();
  });

});
