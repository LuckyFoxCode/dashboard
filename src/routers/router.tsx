import { Login, Register, Root } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
