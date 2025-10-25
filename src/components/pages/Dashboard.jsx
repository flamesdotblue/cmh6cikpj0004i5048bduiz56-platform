import React from 'react';
import { useTenant } from '../TenantProvider';
import { BarChart3, Globe, Shield, Workflow } from 'lucide-react';

export default function Dashboard() {
  const { tenant } = useTenant();

  const cards = [
    {
      icon: BarChart3,
      title: 'Revenue (mock)',
      value: tenant?.currency === 'EUR' ? '€1,245,300' : tenant?.currency === 'GBP' ? '£1,045,300' : '$1,345,900',
      desc: 'Last 12 months'
    },
    { icon: Globe, title: 'Locales', value: (tenant?.locales || []).join(', '), desc: 'Localization enabled' },
    { icon: Shield, title: 'Compliance', value: 'GDPR, SOC-like', desc: 'Blueprint-ready' },
    { icon: Workflow, title: 'Workflows', value: '23 active', desc: 'Approvals & automations' }
  ];

  return (
    <div className="grid gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
        <p className="text-sm text-zinc-600">Tenant: {tenant?.name}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-zinc-900 p-2 text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-zinc-600">{c.title}</p>
                <p className="text-lg font-semibold">{c.value}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-600">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-sm text-zinc-700">
        Connect these metrics to Firestore collections (invoices, orders, inventory) and Cloud Functions for secure server-side aggregations per tenant.
      </div>
    </div>
  );
}
