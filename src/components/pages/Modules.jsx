import React from 'react';
import { Boxes, ShoppingCart, Banknote, Users, Briefcase, Truck, Building, Factory, Stethoscope, ShieldCheck, Car, Hammer, BookOpen } from 'lucide-react';

const MODULES = [
  { key: 'finance', name: 'Finance', icon: Banknote, desc: 'GL, AP/AR, Invoicing, Tax, Payments' },
  { key: 'inventory', name: 'Inventory', icon: Boxes, desc: 'SKUs, Warehouses, Stock, Movements' },
  { key: 'sales', name: 'Sales & CRM', icon: ShoppingCart, desc: 'Leads, Opportunities, Orders, Billing' },
  { key: 'procurement', name: 'Procurement', icon: Truck, desc: 'Suppliers, POs, Receipts, Contracts' },
  { key: 'projects', name: 'Projects', icon: Briefcase, desc: 'WBS, Tasks, Budgets, Timesheets' },
  { key: 'hr', name: 'HR & Payroll', icon: Users, desc: 'Employees, Payroll, Time Off, Reviews' },
  { key: 'facilities', name: 'Facilities', icon: Building, desc: 'Locations, Assets, Maintenance' },
  { key: 'manufacturing', name: 'Manufacturing', icon: Factory, desc: 'BOM, Routing, MRP, Work Orders' },
  { key: 'healthcare', name: 'Healthcare', icon: Stethoscope, desc: 'Patients, Appointments, Billing' },
  { key: 'compliance', name: 'Compliance', icon: ShieldCheck, desc: 'Policies, Audits, Incidents' },
  { key: 'fleet', name: 'Fleet', icon: Car, desc: 'Vehicles, Trips, Fuel, Service' },
  { key: 'construction', name: 'Construction', icon: Hammer, desc: 'Jobs, Cost Codes, RFIs, Submittals' },
  { key: 'knowledge', name: 'Knowledge', icon: BookOpen, desc: 'Docs, SOPs, Training, Wikis' },
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
