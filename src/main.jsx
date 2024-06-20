import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';
import { HelmetProvider } from 'react-helmet-async';
import FirebaseProvider from './Page/FirebaseProvider/FirebaseProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
      </FirebaseProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
