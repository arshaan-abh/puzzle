import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ErrorPage, HomePage, LoginPage, RegisterPage } from './elements';
import AuthGuard from '../guards/auth-guard';

const router = createBrowserRouter([
  {
    path: '/auth',
    errorElement: <ErrorPage />,
    children: [
      { element: <Navigate to="/auth/login" replace />, index: true },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <HomePage />
      </AuthGuard>
    ),
    errorElement: <ErrorPage />,
    children: [],
  },
  { path: '*', element: <Navigate to="/not-found" replace /> },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
