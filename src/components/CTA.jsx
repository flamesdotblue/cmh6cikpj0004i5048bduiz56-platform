import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative mt-12 border-t border-zinc-200 bg-gradient-to-b from-white to-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Start building your global ERP</h3>
            <p className="mt-2 text-zinc-700">Use the React + Firebase foundation to ship modules fast. Add tenants, enable localization packs, and deploy with confidence.</p>
            <ul className="mt-4 list-disc pl-5 text-sm text-zinc-800">
              <li>Tenant-aware navigation and settings</li>
              <li>Role-based permissions and audit trails</li>
              <li>Region packs for taxes, currency, and compliance</li>
              <li>Extensible modules and workflows</li>
            </ul>
          </div>
          <div>
            <form className="grid gap-3">
              <input type="text" name="company" placeholder="Company name" className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring-2" />
              <input type="email" name="email" placeholder="Work email" className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring-2" />
              <div className="grid grid-cols-2 gap-3">
                <select className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring-2">
                  <option>Industry</option>
                  <option>Manufacturing</option>
                  <option>Retail & eCommerce</option>
                  <option>Services</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                </select>
                <select className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-zinc-300 focus:ring-2">
                  <option>Region</option>
                  <option>Americas</option>
                  <option>EMEA</option>
                  <option>APAC</option>
                </select>
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 font-medium text-white transition hover:bg-zinc-800">Request early access</button>
              <p className="text-xs text-zinc-600">By continuing, you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
