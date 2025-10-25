import React from 'react';
import { useAuth } from './AuthProvider';
import SignIn from './auth/SignIn';

export default function RouteGuard({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 h-10 w-10" />
      </div>
    );
  }

  if (!user) return <SignIn />;

  return <>{children}</>; 
}
