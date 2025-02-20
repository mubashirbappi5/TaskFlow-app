import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
 
} from "react-router-dom";
import MainRoute from './Route/MainRoute.jsx';
import AuthContext from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthContext>
      <RouterProvider router={MainRoute} />
      </AuthContext>
  </StrictMode>,
)
