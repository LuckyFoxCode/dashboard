import { Login, NotFound, Register, Root } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <NotFound />,
  },
]);
