import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('expects addCollectionButton to be in App Component', () => {
  const {queryByTestId} = render(<App />);
  const addCollectionButton = queryByTestId("add-collection-button");
  expect(addCollectionButton).toBeInTheDocument();
});

test('expects Drawer component not to be in App Component', () => {
  const {queryByTestId} = render(<App />);
  const addCollectionDrawer = queryByTestId("add-collection-drawer");
  expect(addCollectionDrawer).not.toBeInTheDocument();
});

test('expects Drawer component to be in App Component on render', () => {
  const {queryByTestId} = render(<App />);
  const addCollectionButton = queryByTestId("add-collection-button");
  fireEvent.click(addCollectionButton);

  const addCollectionDrawer = queryByTestId("add-collection-drawer");
  expect(addCollectionDrawer).toBeInTheDocument();
});
