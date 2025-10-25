import React from 'react';
import { Cloud, Server, Smartphone, Globe, Workflow } from 'lucide-react';

export default function ArchitectureERP() {
  return (
    <section id="architecture" className="py-14 md:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Reference architecture</h2>
          <p className="mt-3 text-zinc-700">A pragmatic blueprint using React on the front-end and Firebase on the back-end, optimized for multi-tenancy, localization, and mobile.</p>

          <ul className="mt-6 space-y-3 text-sm text-zinc-800">
            <li className="flex items-start gap-3"><Cloud className="mt-0.5 h-4 w-4" /> Firebase Auth, Firestore, Cloud Functions, and Storage for serverless scale.</li>
            <li className="flex items-start gap-3"><Globe className="mt-0.5 h-4 w-4" /> Localization layer with region packs for currency, taxation, numbering, and date formats.</li>
            <li className="flex items-start gap-3"><Server className="mt-0.5 h-4 w-4" /> Tenant-aware security rules, data partitioning, and background jobs.</li>
            <li className="flex items-start gap-3"><Workflow className="mt-0.5 h-4 w-4" /> Event-driven workflows with webhooks and scheduled tasks.</li>
            <li className="flex items-start gap-3"><Smartphone className="mt-0.5 h-4 w-4" /> Shared models across Web and React Native apps.</li>
          </ul>

          <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-800">
            <pre className="whitespace-pre-wrap leading-relaxed">{`// Multi-tenant document shape (Firestore)
/tenants/{tenantId}
  name: string
  locales: string[]
  currency: string
  plan: 'starter' | 'growth' | 'enterprise'
  features: string[]

/tenants/{tenantId}/users/{userId}
  role: 'admin' | 'manager' | 'member'
  permissions: string[]

// Security Rules (conceptual)
match /tenants/{tenantId}/{document=**} {
  allow read, write: if request.auth != null && request.auth.token.tid == tenantId &&
    hasPermission(request.resource, request.auth.token.roles);
}`}</pre>
          </div>
        </div>

        <div className="flex items-center lg:justify-end">
          <Diagram />
        </div>
      </div>
    </section>
  );
}

function Diagram() {
  return (
    <div className="w-full max-w-xl">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold">Clients</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <Badge>React Web</Badge>
            <Badge>React Native</Badge>
            <Badge>Admin Console</Badge>
            <Badge>Public Portal</Badge>
          </div>
        </div>

        <Arrow />

        <div className="col-span-6 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold">API & Realtime</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <Pill>Firebase Auth</Pill>
            <Pill>Firestore</Pill>
            <Pill>Storage</Pill>
            <Pill>Cloud Functions</Pill>
          </div>
        </div>

        <Arrow />

        <div className="col-span-6 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold">Domain Services</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <Pill>Finance</Pill>
            <Pill>Inventory</Pill>
            <Pill>Sales & CRM</Pill>
            <Pill>HR & Payroll</Pill>
            <Pill>Projects</Pill>
            <Pill>Procurement</Pill>
          </div>
        </div>

        <Arrow />

        <div className="col-span-6 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold">Cross-cutting</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <Pill>Localization</Pill>
            <Pill>RBAC</Pill>
            <Pill>Audit Logs</Pill>
            <Pill>Integrations</Pill>
            <Pill>Reporting</Pill>
            <Pill>Compliance</Pill>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1">{children}</span>;
}

function Pill({ children }) {
  return <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5">{children}</span>;
}

function Arrow() {
  return (
    <div className="col-span-6 flex justify-center py-1" aria-hidden>
      <div className="h-4 w-px bg-zinc-200" />
    </div>
  );
}
