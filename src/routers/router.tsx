import { Login, Register } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
    errorElement: <div>Not Found</div>,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <div>Not Found</div>,
  },
]);
