// src/App.tsx
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from './contexts/RouterContext';
import { routes } from './router/config';
import Router from './router/Router';
import { AuthProvider } from './contexts/AuthContext';
const App: FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouterProvider routes={routes}>
            <Router />
        </RouterProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
