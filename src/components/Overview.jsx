export default function Overview() {
  return (
    <section id="overview" className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">ShahidChat MVP Overview</h2>
          <p className="mt-3 text-slate-600">
            ShahidChat combines WhatsApp-style real-time messaging with Instagram-style social features.
            This page provides a practical development plan you can implement right away: essential
            modules, data models, and step-by-step guidance to deliver a polished MVP.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Cross-platform UI with React/Next.js patterns</li>
            <li>• Firebase Auth with OTP, Storage, and Realtime DB</li>
            <li>• PostgreSQL for relational records via managed service</li>
            <li>• Push notifications with web/native strategies</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
          <h3 className="text-sm font-medium text-slate-500">High-level Goals</h3>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-3">
              Reliable OTP sign-in
            </div>
            <div className="rounded-lg bg-fuchsia-50 border border-fuchsia-200 p-3">
              Realtime chat updates
            </div>
            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3">
              Media uploads & stories
            </div>
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
              Smooth notifications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
