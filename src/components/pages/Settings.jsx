import React, { useState } from 'react';
import { useTenant } from '../TenantProvider';

export default function SettingsPage() {
  const { tenant, setTenant, tenants } = useTenant();
  const [name, setName] = useState(tenant?.name || '');
  const [currency, setCurrency] = useState(tenant?.currency || 'USD');

  const save = () => {
    if (!tenant) return;
    const updated = { ...tenant, name, currency };
    setTenant(updated);
  };

  return (
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
              setName(next?.name || '');
              setCurrency(next?.currency || 'USD');
            }}
          >
            {tenants.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-1 text-sm">
          <label className="text-zinc-700">Tenant name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-sm rounded-lg border border-zinc-300 px-3 py-2"
          />
        </div>

        <div className="grid gap-1 text-sm">
          <label className="text-zinc-700">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full max-w-sm rounded-lg border border-zinc-300 px-3 py-2"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>

        <div className="pt-1">
          <button onClick={save} className="rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800">Save changes</button>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-sm text-zinc-700">
        Link these settings to Firestore for persistence per tenant, and guard writes with security rules that check the user's role and tenant ID.
      </div>
    </div>
  );
}
