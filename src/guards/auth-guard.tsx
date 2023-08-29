import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  children: React.ReactNode;
}
const AuthGuard = ({ children }: AuthGuardProps) => {
  // TODO: check auth
  const isValid = true;

  if (isValid) {
    return <>{children}</>;
  }
  return <Navigate to="/auth/login" />;
};

export default AuthGuard;
