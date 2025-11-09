import { Search, MapPin, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">A</div>
            <span className="text-xl font-semibold tracking-tight">ArenaKita</span>
          </div>

          <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search venues, sports, or locations"
                className="w-full rounded-xl border border-slate-200 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
              <MapPin className="h-4 w-4" /> Near me
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-slate-50">Log in</button>
            <button className="rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700">List your venue</button>
            <button className="ml-1 p-2 rounded-xl hover:bg-slate-50 md:hidden">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search venues, sports, or locations"
                className="w-full rounded-xl border border-slate-200 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50 whitespace-nowrap">
              <MapPin className="h-4 w-4" /> Near me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
