import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BaseTemplate, TEST_ID } from '../BaseTemplate.component';
import { Default, Large } from './BaseTemplate.stories';

describe('BaseTemplate component tests', () => {
  test('renders without crashing', () => {
    render(<BaseTemplate size="large" />);

    const template = screen.getByTestId(TEST_ID);

    expect(template).toBeInTheDocument();
  });
});

describe('BaseTemplate stories tests', () => {
  test('renders without crashing', () => {
    render(<Large size="large" />);

    const template = screen.getByTestId(TEST_ID);

    expect(template).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    render(<Default size="default" />);

    const template = screen.getByTestId(TEST_ID);

    expect(template).toBeInTheDocument();
  });
});
