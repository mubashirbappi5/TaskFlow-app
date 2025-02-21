import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
 
} from "react-router-dom";
import MainRoute from './Route/MainRoute.jsx';
import AuthContext from './context/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
      <RouterProvider router={MainRoute} />
      </AuthContext>
      </QueryClientProvider>
  </StrictMode>
)
