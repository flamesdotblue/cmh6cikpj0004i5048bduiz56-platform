import React from 'react';
import { Users, Layers, Shield, Globe, Settings, Smartphone, Database, Workflow } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Multi-tenancy',
    desc: 'Isolate data and configuration per tenant with role-based access and secure boundaries.'
  },
  {
    icon: Globe,
    title: 'Localization & i18n',
    desc: 'Support multiple languages, currencies, tax rules, and regional formats effortlessly.'
  },
  {
    icon: Layers,
    title: 'Modular domains',
    desc: 'Plug-and-play modules for Finance, Inventory, Sales, CRM, HR, Projects, and more.'
  },
  {
    icon: Shield,
    title: 'Security & compliance',
    desc: 'Granular permissions, audit trails, encryption at rest/in transit, and SOC-ready patterns.'
  },
  {
    icon: Settings,
    title: 'Workflow automation',
    desc: 'Composable workflows with approvals, webhooks, and scheduled tasks.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-ready',
    desc: 'Shared React + Firebase stack enables React Native apps with real-time sync.'
  },
  {
    icon: Database,
    title: 'Data model',
    desc: 'Schema-driven entities with validation, versioning, and migration-friendly structures.'
  },
  {
    icon: Workflow,
    title: 'Extensibility',
    desc: 'Extension SDK for custom fields, pages, serverless functions, and integrations.'
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-16 md:py-20" id="features">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for scale and flexibility</h2>
        <p className="mt-3 text-zinc-700">Everything you need to run any business, from core ERP domains to localization and compliance, on a modern, developer-friendly stack.</p>
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
