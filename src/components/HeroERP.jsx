import React from 'react';
import { Rocket, Shield, Layers, Globe } from 'lucide-react';

export default function HeroERP() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-20%,rgba(24,24,27,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs text-zinc-700 shadow-sm backdrop-blur">
              <Globe className="h-3.5 w-3.5" /> Global, multi-tenant, localized
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              One ERP platform for any industry
            </h1>
            <p className="mt-4 text-zinc-700 max-w-prose">
              Modern, modular ERP built with React and Firebase. Real-time, secure, and scalable for organizations of any size with localization and regulatory readiness.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-white transition hover:bg-zinc-800">
                <Rocket className="h-4 w-4" />
                Explore features
              </a>
              <a href="#architecture" className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 transition hover:bg-zinc-50">
                Architecture
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-700">
              <Badge icon={Shield}>RBAC & Audit</Badge>
              <Badge icon={Layers}>Modular domains</Badge>
              <Badge icon={Globe}>i18n & currency</Badge>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-sm">
              <div className="grid h-full place-items-center text-center">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">Preview</p>
                  <p className="mt-2 text-lg font-medium">React + Firebase multi-tenant workspace</p>
                  <p className="mt-1 text-sm text-zinc-600">Ready for web and React Native</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-700 sm:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-2xl bg-gradient-to-br from-zinc-200 to-white sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5">
      <Icon className="h-4 w-4 text-zinc-700" />
      {children}
    </span>
  );
}
