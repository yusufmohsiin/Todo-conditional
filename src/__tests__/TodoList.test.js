import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './App';

test('renders todo list', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);
  const inputElement = getByPlaceholderText('Add a todo');
  const addButton = getByText('Add Todo');

  expect(inputElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('adds todo', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  const inputElement = getByPlaceholderText('Add a todo');
  const addButton = getByText('Add Todo');

  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  const todoItem = getByText('Test Todo');
  expect(todoItem).toBeInTheDocument();
});
