// src/App.tsx
import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from './contexts/RouterContext';
import { routes } from './router/config';
import Router from './router/Router';
import { AuthProvider } from './contexts/AuthContext';
const App: FC = () => {

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        document.body.classList.add('scrolling');
      } else {
        document.body.classList.remove('scrolling')
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouterProvider routes={routes}>
            <Router/>
        </RouterProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
