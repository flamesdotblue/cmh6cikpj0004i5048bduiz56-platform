import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getFirebase } from '../lib/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const fb = getFirebase();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    if (!fb.enabled) {
      setBooting(false);
      return;
    }
    const unsub = onAuthStateChanged(fb.auth, (u) => {
      if (u) {
        const mapped = {
          id: u.uid,
          email: u.email || '',
          name: u.displayName || (u.email ? u.email.split('@')[0] : 'User'),
          roles: ['admin'],
          tenants: [
            { id: 't_global', name: 'Global Corp', locales: ['en-US', 'es-ES'], currency: 'USD' },
            { id: 't_eu', name: 'EU Division', locales: ['en-GB', 'de-DE'], currency: 'EUR' }
          ]
        };
        setUser(mapped);
      } else {
        setUser(null);
      }
      setBooting(false);
    });
    return () => unsub();
  }, [fb.enabled]);

  const mockLogin = async (email, _password) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    const fakeUser = {
      id: 'u_mock',
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

  const login = async (email, password) => {
    if (!fb.enabled) return mockLogin(email, password);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(fb.auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    if (!fb.enabled) return mockLogin('admin@globalerp.com', '');
    setLoading(true);
    try {
      await signInWithPopup(fb.auth, fb.GoogleProvider);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      if (fb.enabled) await signOut(fb.auth);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({ user, loading, booting, login, loginWithGoogle, logout, firebaseEnabled: fb.enabled }),
    [user, loading, booting, fb.enabled]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
