import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from './AuthProvider';

const TenantContext = createContext(null);

export default function TenantProvider({ children }) {
  const { user } = useAuth();
  const [tenant, setTenant] = useState(null);

  useEffect(() => {
    if (!user) {
      setTenant(null);
      return;
    }
    const preferred = window.localStorage.getItem('currentTenantId');
    const found = user.tenants.find((t) => t.id === preferred) || user.tenants[0];
    setTenant(found || null);
  }, [user]);

  useEffect(() => {
    if (tenant) window.localStorage.setItem('currentTenantId', tenant.id);
  }, [tenant]);

  const value = useMemo(() => ({ tenant, setTenant, tenants: user?.tenants || [] }), [tenant, user]);

  return <TenantContext.Provider value={value}>{children}</TenantContext.Provider>;
}

export const useTenant = () => {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error('useTenant must be used within TenantProvider');
  return ctx;
};
