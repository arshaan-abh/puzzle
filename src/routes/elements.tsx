import { lazy } from 'react';
import Loadable from './loadable';

// AUTH
export const LoginPage = Loadable(lazy(() => import('../pages/auth/login/login')));
export const RegisterPage = Loadable(lazy(() => import('../pages/auth/register/register')));

// Home
export const HomePage = Loadable(lazy(() => import('../pages/home/home')));

// Error
export const ErrorPage = Loadable(lazy(() => import('../pages/error-page/error-page')));

// NotFound
export const NotFoundPage = Loadable(lazy(() => import('../pages/not-found/not-found')));
