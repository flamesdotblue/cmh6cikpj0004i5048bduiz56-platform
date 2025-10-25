import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { useAuth } from '../AuthProvider';

export default function SignIn() {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('admin@globalerp.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err) {
      setError('Sign in failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-zinc-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Global ERP</h1>
            <p className="text-xs text-zinc-600">Sign in to continue</p>
          </div>
        </div>

        <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring-2"
              required
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring-2"
              required
            />
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-white transition hover:bg-zinc-800 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
