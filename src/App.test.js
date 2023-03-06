import { render, screen } from '@testing-library/react';
import App from './App';

describe(App, () => {

  it('renders weather title', () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot()
    
    const linkElement = screen.getByText(/Weather App/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('render search button', () => {
    const { getByTestId } = render(<App />)
    const searchBtn = getByTestId('search').textContent
    expect(searchBtn).toBe('Search')

  })
})
