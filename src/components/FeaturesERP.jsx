import React from 'react';
import { Users, Layers, Shield, Globe, Settings, Smartphone, Database, Workflow } from 'lucide-react';

const features = [
  { icon: Users, title: 'Multi-tenancy', desc: 'Isolate data and configuration per tenant with RBAC and secure boundaries.' },
  { icon: Globe, title: 'Localization', desc: 'Languages, currencies, numbering, tax rules, regional formats.' },
  { icon: Layers, title: 'Modular domains', desc: 'Finance, Inventory, Sales/CRM, HR, Projects, Procurement and more.' },
  { icon: Shield, title: 'Security & compliance', desc: 'Permissions, audit trails, encryption in transit and at rest.' },
  { icon: Settings, title: 'Workflows', desc: 'Approvals, automations, webhooks, scheduled jobs with Functions.' },
  { icon: Smartphone, title: 'Mobile ready', desc: 'React Native support via shared Firebase backend and models.' },
  { icon: Database, title: 'Data model', desc: 'Schema-driven validation, migrations, versioning-friendly structures.' },
  { icon: Workflow, title: 'Extensibility', desc: 'Extension SDK for custom fields, pages, functions, and integrations.' },
];

export default function FeaturesERP() {
  return (
    <section id="features" className="py-14 md:py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for scale and flexibility</h2>
        <p className="mt-3 text-zinc-700">Everything you need to run any business globally on a developer-friendly stack.</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <div key={idx} className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-zinc-900 p-2 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
