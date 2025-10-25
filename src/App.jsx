import React from 'react';
import AuthProvider from './components/AuthProvider';
import TenantProvider from './components/TenantProvider';
import RouteGuard from './components/RouteGuard';
import AppShell from './components/AppShell';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-zinc-900">
      <AuthProvider>
        <TenantProvider>
          <RouteGuard>
            <AppShell />
          </RouteGuard>
        </TenantProvider>
      </AuthProvider>
    </div>
  );
}
