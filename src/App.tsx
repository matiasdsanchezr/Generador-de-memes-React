import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { MantineProvider } from '@mantine/core';

import PublicLayout from './layouts/PublicLayout';

import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    errorElement: <Home />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <Home /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
