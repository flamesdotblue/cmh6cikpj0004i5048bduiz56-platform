import React, { useState } from 'react';
import { Home, Layers, Settings as SettingsIcon, Building2, User, LogOut } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { useTenant } from './TenantProvider';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'modules', label: 'Modules', icon: Layers },
  { id: 'settings', label: 'Settings', icon: SettingsIcon }
];

function Card({ icon: Icon, title, value, desc }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-zinc-900 p-2 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-zinc-600">{title}</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-zinc-600">{desc}</p>
    </div>
  );
}

export default function AppShell() {
  const [active, setActive] = useState('dashboard');
  const { user, logout } = useAuth();
  const { tenant, setTenant, tenants } = useTenant();

  const currency = tenant?.currency || 'USD';
  const revenue = currency === 'EUR' ? '€1,245,300' : currency === 'GBP' ? '£1,045,300' : '$1,345,900';

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
            {tenants && tenants.length > 0 && (
              <select
                className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm"
                value={tenant?.id || tenants[0]?.id}
                onChange={(e) => {
                  const next = tenants.find((t) => t.id === e.target.value);
                  if (next) setTenant(next);
                }}
              >
                {tenants.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            )}
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
          {active === 'dashboard' && (
            <div className="grid gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
                <p className="text-sm text-zinc-600">Tenant: {tenant?.name}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card icon={Home} title="Revenue (mock)" value={revenue} desc="Last 12 months" />
                <Card icon={Layers} title="Active Modules" value="9" desc="Enabled for this tenant" />
                <Card icon={SettingsIcon} title="Open Workflows" value="23" desc="Approvals & automations" />
                <Card icon={User} title="Users" value="48" desc="Invited members" />
              </div>
              <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-sm text-zinc-700">
                Connect these metrics to Firestore (invoices, orders, inventory) and Cloud Functions for per-tenant aggregations.
              </div>
            </div>
          )}

          {active === 'modules' && (
            <div className="grid gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Modules</h2>
                <p className="text-sm text-zinc-600">Enable, configure, and extend domain modules.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { key: 'finance', name: 'Finance', desc: 'GL, AP/AR, Invoicing, Tax, Payments' },
                  { key: 'inventory', name: 'Inventory', desc: 'SKUs, Warehouses, Stock, Movements' },
                  { key: 'sales', name: 'Sales & CRM', desc: 'Leads, Opportunities, Orders, Billing' },
                  { key: 'procurement', name: 'Procurement', desc: 'Suppliers, POs, Receipts, Contracts' },
                  { key: 'projects', name: 'Projects', desc: 'WBS, Tasks, Budgets, Timesheets' },
                  { key: 'hr', name: 'HR & Payroll', desc: 'Employees, Payroll, Time Off, Reviews' }
                ].map((m) => (
                  <div key={m.key} className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{m.name}</h3>
                      <span className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600">Enabled</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-600">{m.desc}</p>
                    <div className="mt-4 flex gap-2">
                      <button className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-50">Open</button>
                      <button className="rounded-lg bg-zinc-900 px-3 py-1.5 text-sm text-white hover:bg-zinc-800">Configure</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === 'settings' && (
            <div className="grid gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Settings</h2>
                <p className="text-sm text-zinc-600">Tenant-level configuration and localization.</p>
              </div>
              <div className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="grid gap-1 text-sm">
                  <label className="text-zinc-700">Active tenant</label>
                  <select
                    className="w-full max-w-sm rounded-lg border border-zinc-300 px-3 py-2"
                    value={tenant?.id}
                    onChange={(e) => {
                      const next = tenants.find((t) => t.id === e.target.value);
                      if (next) setTenant(next);
                    }}
                  >
                    {tenants?.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-1 text-sm">
                  <label className="text-zinc-700">Tenant name</label>
                  <input
                    value={tenant?.name || ''}
                    onChange={(e) => setTenant({ ...(tenant || {}), name: e.target.value })}
                    className="w-full max-w-sm rounded-lg border border-zinc-300 px-3 py-2"
                  />
                </div>

                <div className="grid gap-1 text-sm">
                  <label className="text-zinc-700">Currency</label>
                  <select
                    value={tenant?.currency || 'USD'}
                    onChange={(e) => setTenant({ ...(tenant || {}), currency: e.target.value })}
                    className="w-full max-w-sm rounded-lg border border-zinc-300 px-3 py-2"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                  </select>
                </div>

                <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-sm text-zinc-700">
                  Persist to Firestore under /tenants/{tenantId} and guard writes with Security Rules.
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
