import { MessageCircle, Share2, Shield, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 grid place-items-center">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-slate-900 leading-none">ShahidChat</p>
            <p className="text-xs text-slate-500 leading-none mt-0.5">MVP Plan & Guide</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#overview" className="hover:text-slate-900">Overview</a>
          <a href="#modules" className="hover:text-slate-900">Modules</a>
          <a href="#guide" className="hover:text-slate-900">Implementation</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Shield className="h-4 w-4" />
            Security First
          </button>
          <button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800">
            <Sparkles className="h-4 w-4" />
            Build MVP
          </button>
        </div>
      </div>
    </header>
  );
}
