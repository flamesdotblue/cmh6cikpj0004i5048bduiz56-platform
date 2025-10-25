import React from 'react';
import { Boxes, ShoppingCart, Banknote, Users, Briefcase } from 'lucide-react';

const MODULES = [
  { key: 'finance', name: 'Finance', icon: Banknote, desc: 'GL, AP/AR, invoicing, tax' },
  { key: 'inventory', name: 'Inventory', icon: Boxes, desc: 'SKUs, warehouses, stock' },
  { key: 'sales', name: 'Sales & CRM', icon: ShoppingCart, desc: 'Leads, opportunities, orders' },
  { key: 'hr', name: 'HR & Payroll', icon: Users, desc: 'Employees, payroll, time off' },
  { key: 'projects', name: 'Projects', icon: Briefcase, desc: 'WBS, tasks, timesheets' }
];

export default function Modules() {
  return (
    <div className="grid gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Modules</h2>
        <p className="text-sm text-zinc-600">Enable, configure, and extend domain modules.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m) => (
          <div key={m.key} className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-zinc-900 p-2 text-white">
                <m.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-zinc-600">{m.desc}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-50">Open</button>
              <button className="rounded-lg bg-zinc-900 px-3 py-1.5 text-sm text-white hover:bg-zinc-800">Configure</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
