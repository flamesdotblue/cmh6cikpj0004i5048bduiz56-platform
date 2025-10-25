import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Architecture from './components/Architecture';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-zinc-900">
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeatureGrid />
        <Architecture />
      </main>
      <CTA />
    </div>
  );
}
