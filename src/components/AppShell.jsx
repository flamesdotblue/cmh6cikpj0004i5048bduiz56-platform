import React, { useState } from 'react';
import { Home, Layers, Settings, Building2, User, LogOut } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { useTenant } from './TenantProvider';
import TenantSwitcher from './TenantSwitcher';
import Dashboard from './pages/Dashboard';
import Modules from './pages/Modules';
import SettingsPage from './pages/Settings';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'modules', label: 'Modules', icon: Layers },
  { id: 'settings', label: 'Settings', icon: Settings }
];

export default function AppShell() {
  const [active, setActive] = useState('dashboard');
  const { user, logout } = useAuth();
  const { tenant } = useTenant();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="hidden text-sm sm:block">
              <p className="font-semibold leading-tight">Global ERP</p>
              {tenant && <p className="text-xs text-zinc-600">{tenant.name}</p>}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TenantSwitcher />
            <div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm">
              <User className="h-4 w-4 text-zinc-600" />
              <span className="max-w-[160px] truncate">{user?.email}</span>
              <button
                onClick={logout}
                className="ml-2 inline-flex items-center gap-1 rounded-md bg-zinc-900 px-2 py-1 text-xs text-white hover:bg-zinc-800"
                title="Sign out"
              >
                <LogOut className="h-3.5 w-3.5" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-4 py-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <nav className="rounded-xl border border-zinc-200 bg-white p-2">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition hover:bg-zinc-50 ${
                  active === item.id ? 'bg-zinc-900 text-white hover:bg-zinc-900/90' : 'text-zinc-800'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          {active === 'dashboard' && <Dashboard />}
          {active === 'modules' && <Modules />}
          {active === 'settings' && <SettingsPage />}
        </main>
      </div>
    </div>
  );
}
