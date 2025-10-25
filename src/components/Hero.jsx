import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Settings, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs text-zinc-700 shadow-sm backdrop-blur">
              <Globe className="h-3.5 w-3.5" />
              Global, multi-tenant, localized ERP
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              One ERP for any industry, anywhere
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-700">
              A modern, modular ERP built with React and Firebase. Multi-tenant by design, localized for every market, scalable from startup to enterprise, and ready for web and mobile.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-white transition hover:bg-zinc-800">
                <Rocket className="h-4 w-4" />
                Get started
              </a>
              <a href="#architecture" className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 transition hover:bg-zinc-50">
                <Settings className="h-4 w-4" />
                Architecture
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
