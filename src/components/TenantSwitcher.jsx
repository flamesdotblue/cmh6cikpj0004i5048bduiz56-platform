import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTenant } from './TenantProvider';

export default function TenantSwitcher() {
  const { tenant, tenants, setTenant } = useTenant();

  if (!tenants || tenants.length === 0) return null;

  return (
    <div className="relative inline-block text-left">
      <select
        className="appearance-none rounded-lg border border-zinc-200 bg-white px-3 py-2 pr-8 text-sm"
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
      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
    </div>
  );
}
