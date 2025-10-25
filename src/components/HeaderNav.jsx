import React from 'react';
import { Building2, Globe, User } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white">
              <Building2 className="h-5 w-5" />
            </span>
            <span className="hidden sm:block font-semibold tracking-tight">Global ERP</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a href="#features" className="hover:text-zinc-950">Features</a>
            <a href="#architecture" className="hover:text-zinc-950">Architecture</a>
            <a href="#localization" className="hover:text-zinc-950">Localization</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs text-zinc-700">
              <Globe className="h-3.5 w-3.5" />
              Multi-tenant
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1.5 text-sm text-white hover:bg-zinc-800">
              <User className="h-4 w-4" />
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
