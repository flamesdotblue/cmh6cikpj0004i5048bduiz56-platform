import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, _password) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const fakeUser = {
      id: 'u_1',
      email,
      name: email.split('@')[0],
      roles: ['admin'],
      tenants: [
        { id: 't_global', name: 'Global Corp', locales: ['en-US', 'es-ES'], currency: 'USD' },
        { id: 't_eu', name: 'EU Division', locales: ['en-GB', 'de-DE'], currency: 'EUR' }
      ]
    };
    setUser(fakeUser);
    setLoading(false);
    return fakeUser;
  };

  const logout = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 300));
    setUser(null);
    setLoading(false);
  };

  const value = useMemo(() => ({ user, loading, login, logout }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
