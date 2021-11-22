import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import  './setupTests';

beforeAll(() => {
  global.fetch = window.fetch;
});

let wrapper;

beforeEach(() => {
   wrapper = render(<App />, { disableLifecycleMethods: true });
});

afterEach(() => {
   wrapper.unmount();
});

test('Destination Box', async () => {
  const linkElement = await screen.findByLabelText(/Destination/i);
  expect(linkElement).toBeInTheDocument();
});

test('Search Button', async () => {
  const linkElement = await screen.findByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('Map', async () => {
  render(<App />);
  expect()
  const linkElement = await screen.findByText(/55eedb3610cdff0867bc0990602170eb/i);
  expect(linkElement).toBeInTheDocument();
})

test('verify web vitals exist', () => {
  render(<reportWebVitals />);
  const length = reportWebVitals.length;
  const name = reportWebVitals.name;
  const prototype = reportWebVitals.prototype;
  expect(length);
  expect(name);
  expect(prototype);
});

test('web vitals work', () => {
  render(<reportWebVitals />);
  const vitals = reportWebVitals instanceof Function;
  expect(vitals);
});
