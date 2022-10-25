import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    // precargar un estado al stoore
  },
});

describe('Testing <LoginPage/> component', () => {
  test('Should render the component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });
});
