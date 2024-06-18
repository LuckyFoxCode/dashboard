import { Dashboard } from '@/components';
import { Login, NotFound, Register, Root } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/vital-task',
        element: <h1>Vital Task</h1>,
      },
      {
        path: '/my-task',
        element: <h1>My Task</h1>,
      },
      {
        path: '/task-categories',
        element: <h1>Task Categories</h1>,
      },
      {
        path: '/settings',
        element: <h1>Settings</h1>,
      },
      {
        path: '/help',
        element: <h1>Help</h1>,
      },
    ],
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
